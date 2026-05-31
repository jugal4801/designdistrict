'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type AnimatedMascotProps = {
  variant: 'splash' | 'corner'
}

export function AnimatedMascot({ variant }: AnimatedMascotProps) {
  if (variant === 'splash') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [0, -6, 0, -4, 0],
            x: [0, 3, 0, -3, 0],
            rotate: [0, 1.5, 0, -1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/mascot-splash.png"
            alt=""
            width={720}
            height={1080}
            priority
            className="h-[27rem] w-auto sm:h-[30rem]"
          />
        </motion.div>

        <motion.span
          aria-hidden
          className="absolute -left-6 top-[4.5rem] size-4 rounded-sm bg-accent/70"
          animate={{ y: [0, -10, 0], x: [0, -2, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          aria-hidden
          className="absolute -left-12 top-36 size-3 rounded-sm bg-accent/50"
          animate={{ y: [0, -8, 0], x: [0, -1, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.span
          aria-hidden
          className="absolute -left-3 top-[13.5rem] size-2.5 rounded-sm bg-accent/40"
          animate={{ y: [0, -6, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </motion.div>
    )
  }

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
