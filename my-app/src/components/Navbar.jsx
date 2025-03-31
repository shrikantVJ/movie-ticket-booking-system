"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [location, setLocation] = useState("Mumbai")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
<div className="flex items-center">
  <Link href="/" className="flex-shrink-0">
    <div className="relative w-36 h-10">
      <img 
        src="/images/ticket-dada.png" 
        alt="BookMyShow Logo" 
        width="115" 
        height="33"
        className="object-contain"
      />
    </div>
  </Link>
</div>


          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-4 relative">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
              />
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center mr-4">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                {location}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <button className="hidden md:block bg-[#f84464] hover:bg-[#e23b5b] text-white font-medium py-1 px-4 rounded-md transition-colors">
              Sign in
            </button>
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="flex justify-between">
            <ul className="flex space-x-8 px-4 py-2">
              <li>
                <Link href="//movies" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Anime
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Series
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Sports
                </Link>
              </li>
             {/*  <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Plays
                </Link>
              </li> 
               <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Activities
                </Link>
              </li> */}
            </ul>
            <ul className="flex space-x-8 px-4 py-2">
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  ListYourShow
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Corporates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#f84464] transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <button className="flex items-center text-sm font-medium text-gray-700">
                {location}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <ul className="px-4 py-2 space-y-3">
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Stream
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Plays
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  ListYourShow
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Corporates
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="block text-sm font-medium text-gray-700">
                  Gift Cards
                </Link>
              </li>
            </ul>
            <div className="px-4 py-3 border-t border-gray-200">
              <button className="w-full bg-[#f84464] hover:bg-[#e23b5b] text-white font-medium py-2 px-4 rounded-md transition-colors">
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

