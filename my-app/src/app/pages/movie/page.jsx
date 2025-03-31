import Image from "next/image"
import { Star, Share, ChevronRight } from "lucide-react"
import MovieCast from "@/components/MovieCast"
import MovieCrew from "@/components/MovieCrew"
import MovieReviews from "@/components/MovieReviews"

// Sample movie data - in a real app, this would come from an API
const getMovieDetails = (id) => {
  return {
    id: id,
    title: "Sikandar",
    posterUrl: "/placeholder.svg?height=450&width=300",
    backdropUrl: "/placeholder.svg?height=600&width=1200",
    rating: "6.2",
    votes: "5.9K",
    formats: ["2D", "IMAX 2D"],
    languages: ["Hindi"],
    duration: "2h 30m",
    genres: ["Action", "Drama"],
    certificate: "UA13+",
    releaseDate: "30 Mar, 2025",
    trailerCount: 2,
    about:
      "Sikandar follows the journey of a man who overcomes all hurdles that life throws his way just so that he can alleviate the plight of the less fortunate and those in need of his help. His transition from a nonchalant man to a selfless man, inspired by his wife, makes him emerge as a beacon of hope for those ensnared in darkness.",
    cast: [
      {
        id: 1,
        name: "Salman Khan",
        role: "as Sikandar",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Rashmika Mandanna",
        role: "Actor",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Sathyaraj",
        role: "Actor",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Sharman Joshi",
        role: "Actor",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 5,
        name: "Kajal Aggarwal",
        role: "Actor",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 6,
        name: "Prateik Babbar",
        role: "Actor",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
    ],
    crew: [
      {
        id: 1,
        name: "A.R. Murugadoss",
        role: "Director",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Sajid Nadiadwala",
        role: "Producer",
        imageUrl: "/placeholder.svg?height=100&width=100",
      },
    ],
  }
}

export default function MovieDetailsPage({ params }) {
  const movie = getMovieDetails(params.id)

  return (
    <div>
      {/* Hero Section with Backdrop */}
      <div className="relative bg-black">
        {/* Backdrop Image with Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={movie.backdropUrl || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Movie Poster */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={movie.posterUrl || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white text-sm font-medium">Trailers ({movie.trailerCount})</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center text-white text-sm">In cinemas</div>
            </div>

            {/* Movie Details */}
            <div className="md:w-3/4 lg:w-4/5 text-white">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>
                <button className="flex items-center gap-2 text-white/80 hover:text-white">
                  <Share className="w-5 h-5" />
                  <span className="hidden md:inline">Share</span>
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#f84464] stroke-[#f84464]" />
                  <span className="font-bold">{movie.rating}/10</span>
                  <span className="text-white/70">({movie.votes} Votes)</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-md text-sm font-medium hover:bg-white/90 transition-colors">
                  Rate now
                </button>
              </div>

              {/* Format & Language */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.formats.map((format) => (
                  <span key={format} className="bg-white/20 px-3 py-1 rounded-md text-sm">
                    {format}
                  </span>
                ))}
                {movie.languages.map((language) => (
                  <span key={language} className="bg-white/20 px-3 py-1 rounded-md text-sm">
                    {language}
                  </span>
                ))}
              </div>

              {/* Movie Info */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80 mb-6">
                <span>{movie.duration}</span>
                <span>•</span>
                <span>{movie.genres.join(", ")}</span>
                <span>•</span>
                <span>{movie.certificate}</span>
                <span>•</span>
                <span>{movie.releaseDate}</span>
              </div>

              {/* Book Tickets Button */}
              <div className="mt-4">
                <button className="bg-[#f84464] hover:bg-[#e23b5b] text-white font-bold py-3 px-8 rounded-md transition-colors">
                  Book tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the Movie */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-700 leading-relaxed mb-8">{movie.about}</p>

        {/* Cast */}
        <MovieCast cast={movie.cast} />

        {/* Crew */}
        <MovieCrew crew={movie.crew} />

        {/* Reviews */}
        <MovieReviews movieId={movie.id} />
      </div>
    </div>
  )
}

