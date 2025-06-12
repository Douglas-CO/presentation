"use client"

import { useEffect, useState } from "react"
import type React from "react"

interface UseInViewOptions {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

export function useInView(elementRef: React.RefObject<Element>, options: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false)
  const { threshold = 0.1, once = false, rootMargin = "0px" } = options

  useEffect(() => {
    const element = elementRef.current

    // Check if we're in the browser and element exists
    if (typeof window === "undefined" || !element) {
      return
    }

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, once, rootMargin])

  return inView
}
