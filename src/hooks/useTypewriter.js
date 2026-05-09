import { useState, useEffect, useCallback } from 'react'

export default function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 50, delayAfterWord = 2000 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1))
    } else {
      setText(currentWord.substring(0, text.length + 1))
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), delayAfterWord)
      return
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }
  }, [text, wordIndex, isDeleting, words, delayAfterWord])

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, tick, typeSpeed, deleteSpeed])

  return text
}
