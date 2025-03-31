"use client";

import { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, Plus, Minus, Heart, Info } from 'lucide-react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTheater, setSelectedTheater] = useState(null);
  
  const theaters = [
    {
      name: "Cinepolis: Nexus Seawoods",
      location: "Navi Mumbai",
      shows: [
        { time: "09:45 PM", price: "₹150", type: "DOLBY 7.1" }
      ],
      amenities: ["M-Ticket", "Food & Beverage"]
    },
    {
      name: "INOX: Megaplex, Inorbit Mall",
      location: "Malad",
      shows: [
        { time: "10:15 PM", price: "₹180", type: "KOTAK INSIGNIA" }
      ],
      amenities: ["M-Ticket", "Food & Beverage"]
    },
    {
      name: "G7 Multiplex",
      location: "Bandra (W)",
      shows: [
        { time: "07:00 PM", price: "₹200", type: "GEM" }
      ],
      amenities: ["M-Ticket"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Bookings - (Hindi)
            <span className="text-sm font-normal bg-gray-100 px-2 py-1 rounded">UA16+</span>
          </h1>
          <div className="flex gap-2 mt-2">
            {["Action", "Drama", "Historical"].map((genre) => (
              <span key={genre} className="text-sm border rounded-full px-3 py-1">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="bg-white mt-4 shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(7)].map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              const isToday = i === 0;
              const isSelected = selectedDate === i;
              
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className={`flex flex-col items-center min-w-[80px] p-2 ${
                    isSelected ? 'text-red-500' : ''
                  }`}
                >
                  <span className="text-xs uppercase">
                    {isToday ? 'TODAY' : date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span className="text-xl font-semibold">{date.getDate()}</span>
                  <span className="text-xs uppercase">
                    {date.toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white mt-4 shadow-sm">
        <div className="max-w-7xl mx-auto p-4 flex gap-4">
          <select className="border rounded px-4 py-2 bg-white">
            <option>Hindi - 2D</option>
          </select>
          <select className="border rounded px-4 py-2 bg-white">
            <option>Price Range</option>
          </select>
          <select className="border rounded px-4 py-2 bg-white">
            <option>Preferred Time</option>
          </select>
        </div>
      </div>

      {/* Theaters List */}
      <div className="max-w-7xl mx-auto p-4">
        {theaters.map((theater, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm mb-4 p-6 animate-fadeIn">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold">{theater.name}</h2>
                  <Heart className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                  <Info className="w-5 h-5 text-gray-400 cursor-pointer" />
                </div>
                <p className="text-sm text-gray-500">{theater.location}</p>
              </div>
              <div className="flex gap-2">
                {theater.amenities.map((amenity, i) => (
                  <span key={i} className="text-xs text-green-600 border border-green-600 rounded px-2 py-1">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {theater.shows.map((show, i) => (
                <div key={i} className="text-center">
                  <button 
                    className="px-6 py-2 border-2 rounded hover:border-green-500 hover:text-green-500 transition-all duration-300"
                    onClick={() => setSelectedTheater(theater.name)}
                  >
                    <div className="font-semibold">{show.time}</div>
                    <div className="text-xs text-gray-500">{show.type}</div>
                  </button>
                  <p className="text-xs mt-2">Cancellation available</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto p-4 flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          AVAILABLE
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          FAST FILLING
        </div>
        <div className="flex items-center gap-2 border rounded px-2 py-1">
          LAR
          <span className="text-xs">SUBTITLES LANGUAGE</span>
        </div>
      </div>
    </main>
  );
}