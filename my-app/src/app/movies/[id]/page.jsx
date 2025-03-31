"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, Share, ChevronRight } from "lucide-react";
import MovieCast from "@/components/MovieCast";
import MovieCrew from "@/components/MovieCrew";
import MovieReviews from "@/components/MovieReviews";

// Sample data for demo (In real app, fetch from an API)
const movies = [
  {
    id: 1,
    title: "Sikandar",
    posterUrl: "/images/sikandar.jpg",
    backdropUrl: "/images/sikandar-bg.jpg",
    rating: "6.1",
    votes: "5.8K",
    genres: ["Action", "Drama"],
    releaseDate: "30 Mar, 2025",
    duration: "2h 30m",
    about: "Sikandar follows the journey of a man overcoming hurdles...",
    formats: ["2D", "IMAX"],
    languages: ["Hindi", "English"],
    certificate: "UA",
    trailerCount: 3,
    cast: [],
    crew: []
  },
  {
    id: 2,
    title: "L2: Empuraan",
    posterUrl: "/images/l2.jpg",
    backdropUrl: "/images/l2-bg.jpg",
    rating: "8.1",
    votes: "64.8K",
    genres: ["Action", "Crime", "Thriller"],
    releaseDate: "15 Aug, 2025",
    duration: "2h 20m",
    about: "L2: Empuraan is an action-packed crime thriller...",
    formats: ["2D", "3D"],
    languages: ["Malayalam", "Tamil", "Hindi"],
    certificate: "A",
    trailerCount: 2,
    cast: [],
    crew: []
  },

  {
    id: 3,
    title: "Chhaava",
    posterUrl: "/images/chhaava.jpg",
    backdropUrl: "/images/chhaava-bg.jpg",
    rating: "7.5",
    votes: "12.3K",
    genres: ["Historical", "Drama"],
    releaseDate: "10 Dec, 2025",
    duration: "2h 40m",
    about: "Chhaava tells the story of a legendary warrior and his journey...",
    formats: ["2D"],
    languages: ["Marathi"],
    certificate: "U",
    trailerCount: 2,
    cast: [],
    crew: []
  },
  {
    id: 4,
    title: "The Diplomat",
    posterUrl: "/images/diplomat.jpg",
    backdropUrl: "/images/diplomat-bg.jpg",
    rating: "8.3",
    votes: "25.7K",
    genres: ["Thriller", "Drama"],
    releaseDate: "22 Nov, 2025",
    duration: "2h 10m",
    about: "The Diplomat is a political thriller about global conflicts...",
    formats: ["2D", "IMAX"],
    languages: ["English"],
    certificate: "UA",
    trailerCount: 3,
    cast: [],
    crew: []
  },
  {
    id: 5,
    title: "Snow White",
    posterUrl: "/images/snow-white.jpg",
    backdropUrl: "/images/snowwhite-bg.jpg",
    rating: "7.0",
    votes: "18.9K",
    genres: ["Fantasy", "Adventure"],
    releaseDate: "5 Jul, 2025",
    duration: "2h 15m",
    about: "A magical retelling of the classic Snow White story...",
    formats: ["2D", "3D"],
    languages: ["English"],
    certificate: "U",
    trailerCount: 2,
    cast: [],
    crew: []
  },
  {
    id: 6,
    title: "Deadpool & Wolverine",
    posterUrl: "/images/1382563.jpg",
    backdropUrl: "/images/deadpool-wolverine-bg.jpg",
    rating: "9.2",
    votes: "120.4K",
    genres: ["Action", "Comedy", "Superhero"],
    releaseDate: "26 Jul, 2025",
    duration: "2h 25m",
    about: "Deadpool teams up with Wolverine in a hilarious and action-packed adventure...",
    formats: ["2D", "IMAX", "3D"],
    languages: ["English"],
    certificate: "A",
    trailerCount: 3,
    cast: [],
    crew: []
  },
  {
    id: 7,
    title: "Joker: Folie à Deux",
    posterUrl: "/images/joker1.jpg",
    backdropUrl: "/images/joker2-bg.jpg",
    rating: "9.0",
    votes: "98.2K",
    genres: ["Drama", "Thriller", "Musical"],
    releaseDate: "4 Oct, 2025",
    duration: "2h 30m",
    about: "Joker returns in a dark and haunting musical psychological drama...",
    formats: ["2D", "IMAX"],
    languages: ["English"],
    certificate: "A",
    trailerCount: 2,
    cast: [],
    crew: []
  }
];

export default function MovieDetailsPage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div className="text-center py-10 text-white">Movie not found!</div>;

  return (
    <div>
      {/* Hero Section with Backdrop */}
      <div className="relative bg-black">
        {/* Backdrop Image with Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <Image src={movie.backdropUrl || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Movie Poster */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-[2/3] w-full">
                  <Image src={movie.posterUrl} alt={movie.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
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
                  <span key={format} className="bg-white/20 px-3 py-1 rounded-md text-sm">{format}</span>
                ))}
                {movie.languages.map((language) => (
                  <span key={language} className="bg-white/20 px-3 py-1 rounded-md text-sm">{language}</span>
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
      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-300 leading-relaxed mb-8">{movie.about}</p>

        {/* Cast, Crew, Reviews */}
        <MovieCast cast={movie.cast} />
        <MovieCrew crew={movie.crew} />
        <MovieReviews movieId={movie.id} />
      </div>
    </div>
  );
}