"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function MovieFilters() {
  const [expandedSections, setExpandedSections] = useState({
    languages: true,
    genres: false,
    format: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const [selectedLanguages, setSelectedLanguages] = useState([])

  const toggleLanguage = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language))
    } else {
      setSelectedLanguages([...selectedLanguages, language])
    }
  }

  const clearLanguages = () => {
    setSelectedLanguages([])
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Languages Section */}
      <div className="mb-4 border-b pb-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("languages")}>
          <h3 className="font-semibold">Languages</h3>
          <button className="text-gray-500">
            {expandedSections.languages ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expandedSections.languages && (
          <div className="mt-3">
            <div className="flex justify-end mb-2">
              <button className="text-xs text-gray-500 hover:text-[#f84464]" onClick={clearLanguages}>
                Clear
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["English", "Hindi", "Gujarati", "Telugu", "Hinglish", "Malayalam", "Marathi", "Tamil"].map(
                (language) => (
                  <button
                    key={language}
                    className={`px-3 py-1 text-sm rounded-md border ${
                      selectedLanguages.includes(language)
                        ? "bg-[#f84464] text-white border-[#f84464]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => toggleLanguage(language)}
                  >
                    {language}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>

      {/* Genres Section */}
      <div className="mb-4 border-b pb-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("genres")}>
          <h3 className="font-semibold">Genres</h3>
          <div className="flex items-center">
            <button className="text-gray-500">
              {expandedSections.genres ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        {expandedSections.genres && (
          <div className="mt-3">
            <div className="flex justify-end mb-2">
              <button className="text-xs text-gray-500 hover:text-[#f84464]">Clear</button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Action", "Adventure", "Comedy", "Drama", "Horror", "Thriller", "Romance", "Sci-Fi"].map((genre) => (
                <button
                  key={genre}
                  className="px-3 py-1 text-sm rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Format Section */}
      <div className="mb-4 border-b pb-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("format")}>
          <h3 className="font-semibold">Format</h3>
          <button className="text-gray-500">
            {expandedSections.format ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expandedSections.format && (
          <div className="mt-3">
            <div className="flex justify-end mb-2">
              <button className="text-xs text-gray-500 hover:text-[#f84464]">Clear</button>
            </div>

            <div className="flex flex-wrap gap-2">
              {["2D", "3D", "4DX", "IMAX 2D", "IMAX 3D", "MX4D"].map((format) => (
                <button
                  key={format}
                  className="px-3 py-1 text-sm rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Browse by Cinemas Button */}
      <button className="w-full py-2 border border-[#f84464] text-[#f84464] rounded-md hover:bg-[#f84464]/5 transition-colors">
        Browse by Cinemas
      </button>
    </div>
  )
}

