"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={`/pages/movie/${movie.id}`}>
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
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-[#f84464] stroke-[#f84464] mr-1" />
              <span className="font-bold">{movie.rating}/10</span>
              <span className="ml-2 text-xs text-gray-300">{movie.votes} Votes</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold text-gray-900 truncate">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.genres.join("/")}</p>
        </div>
      </Link>
      {isHovered && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg z-10 w-48 text-center animate-fadeIn">
          <p className="text-sm font-medium">Click to book tickets</p>
        </div>
      )}
    </div>
  )
}

