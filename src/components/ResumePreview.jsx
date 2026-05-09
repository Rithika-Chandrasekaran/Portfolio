import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function ResumePreview({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-3xl h-[80vh] glass-card overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)]">
              <h3 className="font-semibold gradient-text">Resume</h3>
              <div className="flex gap-2">
                <a
                  href={personalInfo.resumeLink}
                  download
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                >
                  <FiDownload size={16} />
                </a>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className="max-w-2xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold gradient-text">{personalInfo.name}</h2>
                  <p className="text-lg text-[var(--text-secondary)] mt-1">{personalInfo.role}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{personalInfo.email} | {personalInfo.location}</p>
                </div>

                {/* Summary */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 gradient-text">Professional Summary</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{personalInfo.bio}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  {personalInfo.stats.map((s) => (
                    <div key={s.label} className="glass-card p-3 text-center">
                      <div className="text-lg font-bold gradient-text">{s.value}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Skills Summary */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 gradient-text">Core Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'React', 'Machine Learning', 'FastAPI', 'SQL', 'Data Analytics', 'Web Scraping', 'Arduino', 'REST APIs', 'MongoDB'].map((s) => (
                      <span key={s} className="px-3 py-1 text-xs font-medium rounded-full glass">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 gradient-text">Contact</h3>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <p>Email: {personalInfo.email}</p>
                    <p>Location: {personalInfo.location}</p>
                    <p>GitHub: {personalInfo.social.github}</p>
                    <p>LinkedIn: {personalInfo.social.linkedin}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
