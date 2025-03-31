"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample carousel data
const carouselItems = [
  {
    id: 1,
    imageUrl: "/images/1382563.jpg",
    title: "Deadpool & Wolverine",
    link: "/movies/deadpool-wolverine",
  },
  {
    id: 2,
    imageUrl: "/images/maxresdefault.jpg",
    title: "Joker: Folie à Deux",
    link: "/movies/joker-2",
  },
  {
    id: 3,
    imageUrl: "/images/wp14473267.jpg",
    title: "Venom 3",
    link: "/movies/venom-3",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef(null)
  const totalSlides = carouselItems.length

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    autoPlayRef.current = nextSlide
  }, [])

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <Image
              src={item.imageUrl || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

