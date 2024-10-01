import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import '/src/LazyImage.css' // Certifique-se de criar este arquivo

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} ${isVisible ? 'fade-in' : 'fade-out'}`}
      loading="lazy"
    />
  )
}

export default LazyImage
