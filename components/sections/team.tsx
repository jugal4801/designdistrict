'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn } from '../animations/fade-in'

const teamMembers = [
  {
    name: 'Mayur Suthar',
    role: 'Founder & Creative Director',
    description: 'Visionary leader with 15+ years of design expertise and strategic brand building.',
    image: '/team/mayur-suthar.jpg',
  },
  {
    name: 'Bhavesh',
    role: 'Co-Founder & Creative Director',
    description: 'Expert in digital transformation and innovative design solutions for modern brands.',
    image: '/team/bhavesh.jpg',
  },
  {
    name: 'Gautam',
    role: 'Co-Founder & Creative Director',
    description: 'Specialist in premium design systems and comprehensive brand identity development.',
    image: '/team/gautam.jpg',
  },
]

export function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to creating exceptional visual experiences for your brand.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-2">
                <div className="mb-6 w-24 h-24 mx-auto rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300 border-2 border-accent">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground text-center mb-2">
                  {member.name}
                </h3>
                
                <p className="text-accent text-center font-semibold text-sm mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
