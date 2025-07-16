import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import VenturesSection from './components/VenturesSection'
import ChatSection from './components/ChatSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <VenturesSection />
        <ChatSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2025 Iftekhar Mahmud Alvy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

