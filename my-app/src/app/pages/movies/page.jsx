import Link from "next/link"
import MovieBanner from "@/components/MovieBanner"
import MovieFilters from "@/components/MovieFilters"
import MoviesList from "@/components/MoviesList"
import ComingSoonMovies from "@/components/ComingSoonMovies"

export default function MoviesPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Banner Carousel */}
      <MovieBanner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <MovieFilters />
          </div>

          {/* Movies Content */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <h1 className="text-2xl font-bold mb-4">Movies in Mumbai</h1>

            {/* Language Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                English
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Hindi
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Gujarati
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Telugu
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Hinglish
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Malayalam
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Marathi
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-1 text-sm hover:bg-gray-100">
                Tamil
              </button>
            </div>

            {/* Coming Soon Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Coming Soon</h2>
                <Link
                  href="/movies/coming-soon"
                  className="text-[#f84464] text-sm font-medium hover:underline flex items-center"
                >
                  Explore Upcoming Movies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <ComingSoonMovies />
            </div>

            {/* Now Showing Movies */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Now Showing</h2>
                <Link
                  href="/movies/now-showing"
                  className="text-[#f84464] text-sm font-medium hover:underline flex items-center"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <MoviesList />
            </div>

            {/* Popular Movies */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular Movies</h2>
                <Link
                  href="/movies/popular"
                  className="text-[#f84464] text-sm font-medium hover:underline flex items-center"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <MoviesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

