import React from 'react'
import { motion } from 'framer-motion'
import { Code, Brain, Megaphone, Users, Zap, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "text-chart-1",
      skills: ["Python", "Java", "C++", "C", "SQL", "JavaScript", "HTML/CSS", "React", "Next.js"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      color: "text-chart-2",
      skills: ["TensorFlow", "Pandas", "NumPy", "Google Colab", "NLP"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IoT & Hardware",
      color: "text-chart-3",
      skills: ["Arduino IDE", "ESP32/ESP8266", "Raspberry Pi", "Sensors & Actuators", "MQTT", "Circuit Design"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      color: "text-chart-4",
      skills: ["Meta Ads Manager", "Google Ads", "Meta Pixel & CAPI", "TikTok Ads", "YouTube Ads", "SEO/SEM", "Analytics"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Business",
      color: "text-primary",
      skills: ["Team Leadership", "Strategic Innovation", "Entrepreneurship", "Brand Development", "Growth Marketing", "Problem Solving"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, IoT, digital marketing, and entrepreneurship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="skill-badge rounded-lg px-3 py-2 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-chart-1 mb-2">3+</div>
                <p className="text-muted-foreground">Years of Programming</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-2 mb-2">6+</div>
                <p className="text-muted-foreground">Years of Brand Building & Media Buying</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-3 mb-2">90+</div>
                <p className="text-muted-foreground">Businesses Helped</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-3 mb-2">10+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

