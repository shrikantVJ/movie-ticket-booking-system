"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample movie data
const comingSoonMovies = [
  {
    id: 1,
    title: "Sikandar",
    posterUrl: "/images/sikandar.jpg",
    releaseDate: "May 15, 2024",
    genres: ["Action", "Drama"],
  },
  {
    id: 2,
    title: "L2: Empuraan",
    posterUrl: "/placeholder.svg?height=450&width=300",
    releaseDate: "June 10, 2024",
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: 3,
    title: "Chhaava",
    posterUrl: "/placeholder.svg?height=450&width=300",
    releaseDate: "July 5, 2024",
    genres: ["Action", "Drama", "Historical"],
  },
  {
    id: 4,
    title: "The Diplomat",
    posterUrl: "/placeholder.svg?height=450&width=300",
    releaseDate: "August 20, 2024",
    genres: ["Action", "Thriller"],
  },
  {
    id: 5,
    title: "Deadpool & Wolverine",
    posterUrl: "/placeholder.svg?height=450&width=300",
    releaseDate: "July 26, 2024",
    genres: ["Action", "Comedy", "Superhero"],
  },
  {
    id: 6,
    title: "Joker: Folie à Deux",
    posterUrl: "/placeholder.svg?height=450&width=300",
    releaseDate: "October 4, 2024",
    genres: ["Crime", "Drama", "Thriller"],
  },
]

export default function ComingSoonMovies() {
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
        {comingSoonMovies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-[180px] group">
            <Link href={`/movies/${movie.id}`}>
              <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl group-hover:scale-[1.02]">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={movie.posterUrl || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-gray-900 truncate">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.releaseDate}</p>
                <p className="text-xs text-gray-600">{movie.genres.join(", ")}</p>
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
  )
}

