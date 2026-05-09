import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10" />
      <div className="absolute top-2/3 right-0 -translate-y-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-2 gradient-text">
            Skills & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: groupIdx * 0.1 }}
            >
              {/* Group Header */}
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold">
                  <span className="gradient-text">{group.title}</span>
                </h3>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  const isHovered = hoveredSkill === skill.name

                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="glass-card p-6 flex flex-col items-center gap-4 cursor-default relative overflow-hidden group"
                      whileHover={{ y: -8, scale: 1.03 }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}22 0%, transparent 70%)`,
                        }}
                      />

                      <div className="relative">
                        <Icon
                          className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300"
                          style={{
                            color: isHovered ? skill.color : undefined,
                            filter: isHovered ? `drop-shadow(0 0 12px ${skill.color}66)` : undefined,
                          }}
                        />
                      </div>

                      <span className="text-sm sm:text-base font-semibold text-center">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
