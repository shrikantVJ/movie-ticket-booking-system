import HeroSection from "@/components/HeroSection"
import RecommendedMovies from "@/components/RecommendedMovies"
import PremieresSection from "@/components/PremieresSection"
// import EventsSection from "@/components/EventsSection"
import StreamSection from "@/components/StreamSection"
import MovieFilters from "@/components/MovieFilters"

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
       <MovieFilters />
        <RecommendedMovies />
        <PremieresSection />
        {/* <EventsSection /> */}
      </div>
      <StreamSection />
    </div>
  )
}

