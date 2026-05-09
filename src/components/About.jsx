import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500 via-violet-600 to-cyan-400 animate-float opacity-60 blur-xl" />
              <div className="relative w-full h-full rounded-2xl glass-card overflow-hidden flex items-center justify-center">
                <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {personalInfo.name[0]}
                </span>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-violet-600" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-sm font-medium tracking-widest uppercase mb-2 gradient-text"
              variants={itemVariants}
            >
              About Me
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Passionate about{' '}
              <span className="gradient-text">building</span> great
              products
            </motion.h2>
            <motion.p
              className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg"
              variants={itemVariants}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <HiMail className="w-5 h-5 text-rose-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <HiLocationMarker className="w-5 h-5 text-violet-600" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={itemVariants}
            >
              {personalInfo.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
