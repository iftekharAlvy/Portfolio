import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Bot, User, Key, AlertCircle, Trash2, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'

const ChatSection = () => {
  const [apiKey, setApiKey] = useState('')
  const [provider, setProvider] = useState('openai')
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isConfigured, setIsConfigured] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Load saved configuration from localStorage
    const savedApiKey = localStorage.getItem('llm_api_key')
    const savedProvider = localStorage.getItem('llm_provider')
    if (savedApiKey && savedProvider) {
      setApiKey(savedApiKey)
      setProvider(savedProvider)
      setIsConfigured(true)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const saveConfiguration = () => {
    if (!apiKey.trim()) {
      setError('Please enter your API key')
      return
    }
    
    localStorage.setItem('llm_api_key', apiKey)
    localStorage.setItem('llm_provider', provider)
    setIsConfigured(true)
    setError('')
    
    // Add welcome message
    setMessages([{
      id: Date.now(),
      type: 'bot',
      content: `Hello! I'm ready to chat using your ${provider === 'openai' ? 'OpenAI' : 'Anthropic'} API. How can I help you today?`
    }])
  }

  const clearConfiguration = () => {
    localStorage.removeItem('llm_api_key')
    localStorage.removeItem('llm_provider')
    setApiKey('')
    setProvider('openai')
    setIsConfigured(false)
    setMessages([])
    setError('')
  }

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setError('')

    try {
      let response
      
      if (provider === 'openai') {
        response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: inputMessage }
            ],
            max_tokens: 500
          })
        })
      } else {
        // Anthropic API call would go here
        throw new Error('Anthropic integration coming soon!')
      }

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: data.choices[0].message.content
      }

      setMessages(prev => [...prev, botMessage])
    } catch (err) {
      setError(err.message)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Sorry, I encountered an error: ${err.message}`
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (isConfigured) {
        sendMessage()
      } else {
        saveConfiguration()
      }
    }
  }

  return (
    <section id="chat" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">AI Chat Integration</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI conversation by connecting your own LLM API key
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-6"
        >
          {!isConfigured ? (
            <div className="space-y-6">
              <div className="text-center">
                <Bot className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Configure Your AI Assistant</h3>
                <p className="text-muted-foreground">
                  To start chatting, please provide your LLM API key. Your key is stored locally and never sent to our servers.
                </p>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Privacy Notice:</strong> Your API key is stored locally in your browser and is only used to make direct requests to the LLM provider. 
                  We do not have access to your API key or conversation data.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">LLM Provider</label>
                  <Select value={provider} onValueChange={setProvider}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="openai">OpenAI (GPT-3.5/GPT-4)</SelectItem>
                      <SelectItem value="anthropic" disabled>Anthropic (Claude) - Coming Soon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">API Key</label>
                  <div className="relative">
                    <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Enter your API key..."
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-10"
                    />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button onClick={saveConfiguration} className="w-full btn-primary">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure AI Assistant
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">AI Chat Assistant</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearConfiguration}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Config
                </Button>
              </div>

              <div className="h-96 overflow-y-auto space-y-4 p-4 bg-background/50 rounded-lg">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className={`rounded-lg p-3 chat-message ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-secondary text-secondary-foreground rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="typing-indicator"></div>
                          <div className="typing-indicator"></div>
                          <div className="typing-indicator"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 min-h-[50px] max-h-[120px]"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="btn-primary px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ChatSection

