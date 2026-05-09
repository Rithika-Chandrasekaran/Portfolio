import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0a0a1a, #1a0a2e, #0a1a2e)',
          }}
        >
          {/* Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-rose-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '-3s' }} />
          </div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl font-extrabold gradient-text mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              R
            </motion.h1>
            <motion.div
              className="w-16 h-1 rounded-full bg-gradient-to-r from-rose-500 via-violet-600 to-cyan-400 mx-auto"
              animate={{ width: ['4rem', '8rem', '4rem'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.p
              className="mt-4 text-sm text-gray-400 tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
