'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AnimatedMascot() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src="/mascot.png"
        alt=""
        width={120}
        height={180}
        className="h-48 w-auto drop-shadow-[0_8px_24px_rgba(59,110,181,0.35)]"
      />
    </motion.div>
  )
}
