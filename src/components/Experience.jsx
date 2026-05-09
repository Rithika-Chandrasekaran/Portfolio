import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import { experience } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-2 gradient-text">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Experience & Education
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-violet-600 to-cyan-400 transform md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const Icon = item.type === 'education' ? HiAcademicCap : HiBriefcase
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={item.role}
                variants={itemVariants}
                className={`relative flex items-start gap-6 mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-rose-500 to-violet-600 transform -translate-x-1/2 md:-translate-x-1/2 z-10 mt-6 shadow-lg shadow-rose-500/50" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.role}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">{item.company}</p>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full glass mb-3">
                      {item.period}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
