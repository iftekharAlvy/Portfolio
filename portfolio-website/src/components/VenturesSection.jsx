import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Clock, CheckCircle, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const VenturesSection = () => {
  const [selectedVenture, setSelectedVenture] = useState(null)

  const ventures = [
    {
      id: 1,
      title: "Synapse Social by Qbexel",
      description: "A state-of-the-art, AI-powered B2B SaaS platform designed as a human-like seller agent for social-media-based businesses.",
      fullDescription: "Synapse Social is an innovative AI-powered platform that revolutionizes how businesses interact with customers on social media. The system can analyze inputs and seamlessly handle photos, chats, and voice interactions to engage customers just like a real salesperson, providing personalized experiences at scale.",
      technologies: ["AI/ML", "NLP", "Computer Vision", "Voice Processing", "Cloud Infrastructure", "Social Media APIs"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Selected in NSU Startup Next Cohort 3", "Validating innovation and market potential"],
      role: "Co-founder and core developer (with Samiul Alam Khan Riad)",
      impact: "Currently building towards launch with plans to serve multiple social-media-based businesses and automate sales at scale.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Digital Marketing & Growth Campaigns",
      description: "Comprehensive digital marketing strategies for 90+ diverse brands across education, retail, and publishing sectors.",
      fullDescription: "As a digital marketing strategist, I\`ve helped diverse brands scale their reach, drive sales, and build sustainable customer engagement. This portfolio includes work with educational platforms, retail brands, and publishing companies, each requiring tailored approaches to their unique markets. Brands include Nursing Pathshala, Saifur’s BCS Plus, Diamond World, D. Diamond, Fashmecca, Admission and Academic Pathsala, Physics Hunters, Dhumketu Books, Aspect Series, and Rokomari History Books.",      technologies: ["Facebook Ads", "Google Ads", "SEO/SEM", "Analytics", "Content Marketing", "Marketing Automation"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Helped 90+ businesses grow", "Boosted online visibility significantly", "Built long-term growth strategies"],
      role: "Digital Marketing Strategist",
      impact: "Drove measurable increases in followers, engagement, and sales across multiple industry sectors.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      id: 3,
      title: "Brand Building & Entrepreneurship Portfolio",
      description: "Built and scaled multiple brands from the ground up across e-commerce, education, and technology sectors.",
      fullDescription: "This entrepreneurial portfolio showcases my ability to build and scale brands across diverse sectors. From Fashion Palette BD\`s pre-order model to Qbexel\`s tech innovation focus, each brand required unique strategies for market entry, customer acquisition, and sustainable growth.",
      technologies: ["Digital Marketing", "E-commerce Platforms", "Social Media Growth", "Branding Tools", "Business Frameworks"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Successfully scaled multiple brands", "Established sustainable business models", "Achieved startup recognition"],
      role: "Founder and brand strategist",
      impact: "Built diverse brand portfolio with consistent growth and customer loyalty across multiple sectors.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 4,
      title: "Qbexel - Full Stack Software Solution Firm",
      description: "A full-stack software solution firm providing innovative technology services.",
      fullDescription: "Qbexel is a technology firm dedicated to providing comprehensive full-stack software solutions. We specialize in developing custom applications, web platforms, and enterprise software tailored to meet the unique needs of our clients, driving digital transformation and business growth.",
      technologies: ["Web Development", "Mobile Development", "Cloud Solutions", "Custom Software", "UI/UX Design"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Delivering innovative software solutions", "Helping businesses achieve digital transformation"],
      role: "Co-founder (with Samiul Alam Khan Riad)",
      impact: "Empowering businesses with cutting-edge technology and robust software solutions.",
      gradient: "from-red-500 to-orange-600"
    },
    {
      id: 5,
      title: "IT Manager and IELTS Instructor at Study Hub BD",
      description: "Working part-time as an IT Manager and IELTS Instructor, contributing to educational and operational excellence.",
      fullDescription: "In my part-time role at Study Hub BD, I manage IT infrastructure, ensuring smooth technological operations and support. Additionally, I serve as an IELTS instructor, guiding students to achieve their desired scores through comprehensive training and personalized feedback.",
      technologies: ["IT Management", "Network Administration", "Technical Support", "IELTS Instruction", "Educational Leadership"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Ensuring seamless IT operations", "Successfully guiding students in IELTS preparation"],
      role: "IT Manager and IELTS Instructor",
      impact: "Contributing to the operational efficiency and academic success of Study Hub BD.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      title: "Fashion Palette BD & Baby Bliss BD",
      description: "Working as a free employee for my wife\`s businesses, helping them grow from the ground up.",
      fullDescription: "Working as a free employee for my wife\`s businesses, Fashion Palette BD and Baby Bliss BD. Helped her building these businesses from the ground up with only 10k investment, now closing more than 500-1000 orders per month. Very proud husband!",
      technologies: ["E-commerce", "Digital Marketing", "Brand Building", "Supply Chain Management"],
      status: "ongoing",
      statusIcon: <Clock className="w-4 h-4" />,
      achievements: ["Helped scale businesses from 10k investment to 500-1000 orders/month"],
      role: "Free Employee / Proud Husband",
      impact: "Successfully contributed to the growth and scaling of two thriving e-commerce businesses.",
      gradient: "from-green-500 to-teal-600"
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
    <section id="ventures" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Ventures & Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my entrepreneurial journey and professional experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card glass-effect rounded-2xl p-6 cursor-pointer group"
              onClick={() => setSelectedVenture(venture)}
            >
              <div className={`h-2 w-full rounded-full bg-gradient-to-r ${venture.gradient} mb-6`} />
              
              <div className="flex items-center justify-between mb-4">
                <Badge className={`${getStatusColor(venture.status)} border`}>
                  <span className="flex items-center gap-1">
                    {venture.statusIcon}
                    {venture.status}
                  </span>
                </Badge>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {venture.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {venture.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {venture.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {venture.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{venture.technologies.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="text-sm text-muted-foreground">
                <strong>Role:</strong> {venture.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venture Detail Modal */}
        <AnimatePresence>
          {selectedVenture && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVenture(null)}
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
                    <h3 className="text-3xl font-bold mb-2">{selectedVenture.title}</h3>
                    <Badge className={`${getStatusColor(selectedVenture.status)} border`}>
                      <span className="flex items-center gap-1">
                        {selectedVenture.statusIcon}
                        {selectedVenture.status}
                      </span>
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedVenture(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </Button>
                </div>

                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${selectedVenture.gradient} mb-6`} />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Venture Overview</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedVenture.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedVenture.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedVenture.achievements.map((achievement, index) => (
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
                      {selectedVenture.impact}
                    </p>
                  </div>

                  <div className="glass-effect rounded-xl p-4">
                    <h4 className="font-semibold mb-2 text-primary">My Role</h4>
                    <p className="text-muted-foreground">{selectedVenture.role}</p>
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

export default VenturesSection



