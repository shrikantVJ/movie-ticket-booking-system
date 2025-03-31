"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

// Sample movie data
const movies = [
  {
    id: 1,
    title: "Sikandar",
    posterUrl: "/placeholder.svg?height=450&width=300",
    rating: "6.1",
    votes: "5.8K",
    certificate: "UA",
    languages: ["Hindi"],
    genres: ["Action", "Drama"],
  },
  {
    id: 2,
    title: "L2: Empuraan",
    posterUrl: "/placeholder.svg?height=450&width=300",
    rating: "8.1",
    votes: "64.8K",
    certificate: "UA",
    languages: ["Malayalam", "Hindi", "Telugu", "Tamil", "Kannada"],
    genres: ["Action", "Crime", "Thriller"],
  },
  {
    id: 3,
    title: "Chhaava",
    posterUrl: "/placeholder.svg?height=450&width=300",
    rating: "9.2",
    votes: "332K",
    certificate: "UA",
    languages: ["Hindi", "Telugu", "Tamil"],
    genres: ["Action", "Drama", "Historical"],
  },
  {
    id: 4,
    title: "The Diplomat",
    posterUrl: "/placeholder.svg?height=450&width=300",
    rating: "8.8",
    votes: "20.2K",
    certificate: "A",
    languages: ["English"],
    genres: ["Action", "Thriller"],
  },
]

export default function MoviesList() {
  const [hoveredMovie, setHoveredMovie] = useState(null)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="group"
          onMouseEnter={() => setHoveredMovie(movie.id)}
          onMouseLeave={() => setHoveredMovie(null)}
        >
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
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-[#f84464] stroke-[#f84464] mr-1" />
                    <span className="font-bold">{movie.rating}/10</span>
                    <span className="ml-2 text-xs text-gray-300">{movie.votes} Votes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-gray-900 truncate">{movie.title}</h3>
              <p className="text-xs text-gray-600">
                {movie.certificate} • {movie.languages.join(", ")}
              </p>
            </div>
          </Link>
          {hoveredMovie === movie.id && (
            <div className="mt-2">
              <button className="w-full bg-[#f84464] hover:bg-[#e23b5b] text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                Book tickets
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

