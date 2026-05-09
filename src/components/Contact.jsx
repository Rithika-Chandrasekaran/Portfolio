import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const mailto = `mailto:${personalInfo.email}?subject=Hello from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-2 gradient-text">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's Work Together
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I'm always open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="font-medium hover:gradient-text transition-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] focus:outline-none focus:border-rose-500 transition-colors text-[var(--text-primary)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] focus:outline-none focus:border-rose-500 transition-colors text-[var(--text-primary)]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] focus:outline-none focus:border-rose-500 transition-colors text-[var(--text-primary)] resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white hero-gradient shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
