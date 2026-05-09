import { useState, lazy } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

const Hero = lazy(() => import('../components/Hero'))
const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const Experience = lazy(() => import('../components/Experience'))
const Contact = lazy(() => import('../components/Contact'))

export default function HomePage({ onResumeClick }) {
  return (
    <>
      <ErrorBoundary><Hero onResumeClick={onResumeClick} /></ErrorBoundary>
      <ErrorBoundary><About /></ErrorBoundary>
      <ErrorBoundary><Skills /></ErrorBoundary>
      <ErrorBoundary><Projects /></ErrorBoundary>
      <ErrorBoundary><Experience /></ErrorBoundary>
      <ErrorBoundary><Contact /></ErrorBoundary>
    </>
  )
}
