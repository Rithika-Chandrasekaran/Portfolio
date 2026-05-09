import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import ErrorBoundary from '../components/ErrorBoundary'

export default function ProjectPage() {
  const { projectTitle } = useParams()
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectTitle
  )

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="glass-card p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="px-6 py-2 rounded-full font-medium text-white hero-gradient inline-block">
            Back Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
            >
              <FiArrowLeft /> Back to Portfolio
            </Link>

            <div className="glass-card overflow-hidden">
              <div className="relative h-64 sm:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 text-sm font-medium rounded-full glass">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white hero-gradient shadow-lg hover:shadow-xl transition-all"
                  >
                    <FiGithub size={18} /> Source Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold glass hover:bg-[var(--card-bg)] transition-all"
                  >
                    <FiExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
