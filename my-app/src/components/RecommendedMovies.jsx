"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import MovieCard from "./MovieCard"
import { ChevronLeft, ChevronRight } from "lucide-react"


// Sample movie data
const recommendedMovies = [
  {
    id: 1,
    title: "Sikandar",
    posterUrl: "/images/sikandar.jpg",
    rating: "6.1",
    votes: "5.8K",
    genres: ["Action", "Drama"],
  },
  {
    id: 2,
    title: "L2: Empuraan",
    posterUrl: "/images/l2.jpg",
    rating: "8.1",
    votes: "64.8K",
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: 3,
    title: "Chhaava",
    posterUrl: "/images/Chhaava.jpg",
    rating: "9.2",
    votes: "332K",
    genres: ["Action", "Drama", "Historical"],
  },
  {
    id: 4,
    title: "The Diplomat",
    posterUrl: "/images/diplomat.jpg",
    rating: "8.8",
    votes: "20.2K",
    genres: ["Action", "Thriller"],
  },
  {
    id: 5,
    title: "Snow White",
    posterUrl: "/images/snow-white.jpg",
    rating: "7.0",
    votes: "1.6K",
    genres: ["Adventure", "Drama", "Family", "Musical"],
  },
  {
    id: 6,
    title: "Deadpool & Wolverine",
    posterUrl: "/images/image3.jpeg",
    rating: "8.5",
    votes: "120K",
    genres: ["Action", "Comedy", "Superhero"],
  },
  {
    id: 7,
    title: "Joker: Folie à Deux",
    posterUrl: "/images/joker1.jpg",
    rating: "7.8",
    votes: "45K",
    genres: ["Crime", "Drama", "Thriller"],
  },
]

export default function RecommendedMovies() {
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
        
        <h2 className="text-xl font-bold text-gray-900">Recommended Movies</h2>
        <Link href="/movies" className="text-[#f84464] text-sm font-medium hover:underline">
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
          {recommendedMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-[180px]">
              <MovieCard movie={movie} />
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

