"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function StreamSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const element = document.getElementById("stream-section")

      if (element) {
        const elementPosition = element.offsetTop

        if (scrollPosition > elementPosition - viewportHeight + 200) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Check on initial load
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="stream-section" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="md:w-1/2">
            <div className="relative w-full aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BookMyShow Stream"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=300"
                  alt="BookMyShow Stream Logo"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f84464]">
              Endless Entertainment. <span className="block md:inline">Anytime. Anywhere!</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Watch the latest movies, TV shows, and exclusive originals on any device, anytime, anywhere.
            </p>
            <Link href="/stream">
              <button className="bg-[#f84464] hover:bg-[#e23b5b] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 transform hover:scale-105">
                Watch Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

