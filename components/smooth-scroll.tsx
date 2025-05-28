"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      // Check if the clicked element is an anchor link
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (!anchor) return

      // Get the target section id
      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      // Prevent default behavior
      e.preventDefault()

      // Get the target element
      const targetElement = document.querySelector(href)
      if (!targetElement) return

      // Get the header height for offset
      const header = document.querySelector("header")
      const headerHeight = header ? header.offsetHeight : 0

      // Calculate the position to scroll to
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerHeight

      // Scroll smoothly to the target
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    // Add event listener to the document
    document.addEventListener("click", handleSmoothScroll)

    // Clean up
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
