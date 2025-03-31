"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample premiere data
const premieres = [
  {
    id: 1,
    title: "The Marvels",
    posterUrl: "/images/marvels.jpg",
    language: "English",
    genre: "Action/Adventure",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    posterUrl: "/images/dune2.jpg",
    language: "English",
    genre: "Sci-Fi/Adventure",
  },
  {
    id: 3,
    title: "Godzilla x Kong",
    posterUrl: "/images/godzilla-kong.jpg",
    language: "English",
    genre: "Action/Sci-Fi",
  },
  {
    id: 4,
    title: "Furiosa",
    posterUrl: "/images/images.jpg",
    language: "English",
    genre: "Action/Adventure",
  },
  {
    id: 5,
    title: "Kung Fu Panda 4",
    posterUrl: "/images/panda.jpg",
    language: "English",
    genre: "Animation/Comedy",
  },
  {
    id: 6,
    title: "Captain America: Brave New World",
    posterUrl: "/images/captain-america-brave-new-world.avif",
    language: "English",
    genre: "Action/Adventure",
  },
  {
    id: 7,
    title: "venom 3",
    posterUrl: "/images/wp14473267.jpg",
    language: "English",
    genre: "Action/Adventure",
  },
  {
    id: 8,
    title: "Joker: Folie à Deux",
    posterUrl: "/images/joker1.jpg",
    language: "English",
    genre: "Action/Adventure",
  },
  {
    id: 9,
    title: "Aquaman and the Lost Kingdom",
    posterUrl: "/images/aquaman.jpg",
    language: "English",
    genre: "Action/Adventure",
  },
]

export default function PremieresSection() {
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
      <div className="bg-[#2B3148] py-8 -mx-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Premieres</h2>
              <p className="text-gray-300 text-sm">Brand new releases every Friday</p>
            </div>
            <Link href="/premieres" className="text-[#f84464] text-sm font-medium hover:underline">
              See All
            </Link>
          </div>

          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {premieres.map((premiere) => (
                <div key={premiere.id} className="flex-shrink-0 w-[180px] group">
                  <Link href={`/movies/${premiere.id}`}>
                    <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:shadow-xl group-hover:scale-[1.02]">
                      <div className="relative aspect-[2/3] w-full">
                        <Image
                          src={premiere.posterUrl || "/placeholder.svg"}
                          alt={premiere.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-semibold text-white truncate">{premiere.title}</h3>
                      <p className="text-sm text-gray-300">
                        {premiere.language} • {premiere.genre}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 shadow-md transition-all duration-200 transform hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

