'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn } from '../animations/fade-in'
import { TiltCard } from '../animations/tilt-card'

type TeamMember = {
  name: string
  role: string
  description: string
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mayur Suthar',
    role: 'Founder & Creative Director',
    description: 'Visionary leader with 5+ years of design expertise and strategic brand building.',
    image: '/team/mayur-suthar.jpg',
  },
  {
    name: 'Jugal Suthar',
    role: 'Co-Founder & Creative Director',
    description: 'Specialist in premium design systems and comprehensive brand identity development.',
    image: '/team/jugal.jpg',
  },
  {
    name: 'Unnati Rajput',
    role: 'Social Media Head & Manager',
    description: 'Drives social strategy and community growth, turning brand stories into content that connects and converts.',
    image: '/team/unnati-rajput.svg',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

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
            <div className="eyebrow mx-auto justify-center mb-6">The People</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to creating exceptional visual experiences for your brand.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
              <TiltCard className="p-8 h-full">
                <div className="mb-6 w-28 h-28 mx-auto rounded-sm overflow-hidden transform group-hover:scale-105 transition-transform duration-300 border border-accent">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={member.name}
                      className="w-full h-full flex items-center justify-center bg-accent/10 text-accent text-3xl font-bold"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
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
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
