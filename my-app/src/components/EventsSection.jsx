"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample events data
const events = [
  {
    id: 1,
    title: "Sunburn Arena",
    posterUrl: "/placeholder.svg?height=300&width=450",
    category: "Music Show",
    location: "Mumbai",
  },
  {
    id: 2,
    title: "Comedy Night",
    posterUrl: "/placeholder.svg?height=300&width=450",
    category: "Comedy Shows",
    location: "Multiple Venues",
  },
  {
    id: 3,
    title: "Prateek Kuhad India Tour",
    posterUrl: "/placeholder.svg?height=300&width=450",
    category: "Music Show",
    location: "Mumbai",
  },
  {
    id: 4,
    title: "Zakir Khan Live",
    posterUrl: "/placeholder.svg?height=300&width=450",
    category: "Comedy Shows",
    location: "Mumbai",
  },
  {
    id: 5,
    title: "Arijit Singh Live Concert",
    posterUrl: "/placeholder.svg?height=300&width=450",
    category: "Music Show",
    location: "Mumbai",
  },
]

export default function EventsSection() {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth
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

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Events Happening Near You</h2>
        <Link href="/events" className="text-[#f84464] text-sm font-medium hover:underline">
          See All
        </Link>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event) => (
            <div key={event.id} className="flex-shrink-0 w-[280px] group">
              <Link href={`/events/${event.id}`}>
                <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl group-hover:scale-[1.02]">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={event.posterUrl || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold text-gray-900 truncate">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.category}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        )}
      </div>
    </section>
  )
}

