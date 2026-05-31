'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedMascot } from '@/components/animated-mascot'

const DISPLAY_MS = 2000
const EXIT_MS = 650

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setShow(false)
    }, DISPLAY_MS)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  const handleExitComplete = () => {
    document.body.style.overflow = ''
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          key="splash-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.45, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <AnimatedMascot variant="splash" />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
              className="text-xl sm:text-2xl font-semibold tracking-[0.25em] text-foreground"
            >
              NEXTPIXEL STUDIO
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
