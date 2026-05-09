import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full flex items-center px-1 cursor-pointer"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, #4c1d95, #7c3aed)'
          : 'linear-gradient(135deg, #ff00c3, #700bf5)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{ x: darkMode ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? (
          <HiMoon className="w-3 h-3 text-white" />
        ) : (
          <HiSun className="w-3 h-3 text-yellow-600" />
        )}
      </motion.div>
    </motion.button>
  )
}
