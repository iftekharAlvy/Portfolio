import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Award, Clock, CheckCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 2,
      title: "AI-Powered Industrial Color-Sorting Robot",
      description: "An AI-driven industrial robot capable of automatically detecting and sorting products based on their colors in real time.",
      fullDescription: "This award-winning project demonstrates the practical application of computer vision and machine learning in industrial automation. The robot uses advanced color detection algorithms to sort products with high precision, significantly improving operational efficiency in manufacturing environments.",
      technologies: ["Computer Vision", "OpenCV", "Arduino", "Raspberry Pi", "Machine Learning", "Robotics Hardware"],
      status: "completed",
      statusIcon: <Award className="w-4 h-4" />,
      achievements: ["🏆 Won the Best Innovative Idea Award", "Successfully showcased as Capstone Project at NSU"],
      role: "Co-developer and system architect",
      impact: "Demonstrated real-world potential for automation in manufacturing industries.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Predictive Modeling of Tidal Currents",
      description: "A research project focused on developing machine learning models to predict tidal current patterns for coastal applications.",
      fullDescription: "This research project leverages advanced machine learning techniques to predict tidal current patterns, enabling better forecasting for coastal and maritime applications. The work contributes to environmental data science and provides foundations for improved coastal engineering tools.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Time Series Analysis", "Data Visualization"],
      status: "completed",
      statusIcon: <CheckCircle className="w-4 h-4" />,
      achievements: ["📄 Successfully published research work", "Contributing to academic knowledge in environmental data science"],
      role: "Lead researcher",
      impact: "Provides a foundation for improved forecasting tools in coastal engineering and environmental monitoring.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 4,
      title: "IoT-Based Smart Home & Security System",
      description: "A low-cost IoT project combining voice-controlled smart switches with motion-sensor security systems.",
      fullDescription: "This project demonstrates the feasibility of affordable IoT solutions using local resources. It combines Wi-Fi powered, voice-command-enabled smart switches for home automation with a sophisticated motion-sensor security system integrated with laser light detection.",
      technologies: ["ESP32", "Wi-Fi Modules", "Voice Recognition APIs", "PIR Sensors", "Laser Modules", "Circuit Design"],
      status: "completed",
      statusIcon: <CheckCircle className="w-4 h-4" />,
      achievements: ["Fully functional voice-controlled automation", "Improved building security", "Demonstrated affordable IoT feasibility"],
      role: "Independent developer",
      impact: "Achieved fully functional home automation on minimal budget (300 BDT) with reliable security features.",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, IoT, digital marketing, and entrepreneurship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card glass-effect rounded-2xl p-6 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
              
              <div className="flex items-center justify-between mb-4">
                <Badge className={`${getStatusColor(project.status)} border`}>
                  <span className="flex items-center gap-1">
                    {project.statusIcon}
                    {project.status}
                  </span>
                </Badge>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="text-sm text-muted-foreground">
                <strong>Role:</strong> {project.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <Badge className={`${getStatusColor(selectedProject.status)} border`}>
                      <span className="flex items-center gap-1">
                        {selectedProject.statusIcon}
                        {selectedProject.status}
                      </span>
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </Button>
                </div>

                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${selectedProject.gradient} mb-6`} />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Project Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Impact & Results</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>

                  <div className="glass-effect rounded-xl p-4">
                    <h4 className="font-semibold mb-2 text-primary">My Role</h4>
                    <p className="text-muted-foreground">{selectedProject.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection

