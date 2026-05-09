import { useState, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import CursorFollower from './components/CursorFollower'
import ResumePreview from './components/ResumePreview'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Rithika | Portfolio</title>
        <meta name="description" content="AI & Full Stack Developer specializing in machine learning, web development, and IoT solutions." />
        <meta name="keywords" content="portfolio, AI developer, full stack, machine learning, React, Python" />
      </Helmet>
      <LoadingScreen />
      <CursorFollower />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onResumeClick={() => setResumeOpen(true)} />} />
            <Route path="/project/:projectTitle" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ResumePreview isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  )
}
