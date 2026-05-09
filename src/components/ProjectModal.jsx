import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-2xl w-full glass-card overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          >
            <FiX size={20} />
          </button>

          <div className="relative h-56 sm:h-72">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full glass"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white hero-gradient shadow-lg hover:shadow-xl transition-all"
              >
                <FiGithub size={18} />
                Source Code
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold glass hover:bg-[var(--card-bg)] transition-all"
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
