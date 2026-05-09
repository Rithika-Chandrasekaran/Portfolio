import { motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-8 border-t border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <HiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
