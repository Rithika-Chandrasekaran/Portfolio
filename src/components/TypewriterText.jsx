import useTypewriter from '../hooks/useTypewriter'

export default function TypewriterText({ words, className = '' }) {
  const text = useTypewriter(words, { typeSpeed: 70, deleteSpeed: 40, delayAfterWord: 2500 })

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor" />
    </span>
  )
}
