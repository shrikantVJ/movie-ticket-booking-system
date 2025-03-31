"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MovieCast({ cast }) {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0)
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      // Check initial state
      handleScroll()
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!cast || cast.length === 0) return null

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Cast</h2>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cast.map((person) => (
            <div key={person.id} className="flex-shrink-0 w-[120px] text-center">
              <div className="relative w-[120px] h-[120px] mx-auto mb-2">
                <Image
                  src={person.imageUrl || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover rounded-full"
                  sizes="120px"
                />
              </div>
              <h3 className="font-medium text-gray-900">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  )
}

