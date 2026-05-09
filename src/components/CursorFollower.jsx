import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const followerRef = useRef(null)

  useEffect(() => {
    const follower = followerRef.current
    if (!follower) return

    let mouseX = -100
    let mouseY = -100
    let currentX = -100
    let currentY = -100

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseLeave = () => {
      mouseX = -100
      mouseY = -100
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08
      follower.style.transform = `translate(${currentX - 20}px, ${currentY - 20}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(255,0,110,0.4), rgba(124,58,237,0.2), transparent)',
        filter: 'blur(4px)',
        transition: 'opacity 0.3s',
      }}
    />
  )
}
