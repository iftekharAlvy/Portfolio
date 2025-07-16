import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Briefcase, Code } from 'lucide-react'
import profilePic from '../assets/profile_pic_1.jpg'

const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Innovative Idea Award",
      description: "AI-based Industrial Product Sorting Robot"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "90+ Businesses Helped",
      description: "Digital marketing and brand growth"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "NSU Startup Next Cohort 3",
      description: "Selected for Synapse Social innovation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Published Research",
      description: "Predictive Modeling of Tidal Currents"
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging the gap between cutting-edge technology and real-world business solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a results-oriented professional with expertise in artificial intelligence, machine learning, 
                programming, digital marketing, and brand building. Recently graduated from North South University. 
                My flagship venture is <span className="font-bold text-primary">SYNAPSE SOCIAL BY QBEXEL</span> which is an AI powered seller agent for social media based businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My unique combination of technical skills, leadership experience, and entrepreneurial mindset 
                allows me to excel in creating AI automation solutions, driving brand growth, and implementing 
                innovative strategies that contribute to technological advancement and business success.
              </p>            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To leverage cutting-edge AI and IoT technologies to create intelligent automation solutions 
                that solve real-world problems while building sustainable brands and businesses that make 
                a positive impact on society.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={profilePic}
                  alt="Iftekhar Mahmud Alvy"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-4 text-center"
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

