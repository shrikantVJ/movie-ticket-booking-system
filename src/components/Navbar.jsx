"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

const SignInPopup = dynamic(() => import("@/components/ui/SignInPopup"), {
  ssr: false,
});

// Load `gapi` only in the browser
const clientId = "255151939242-cecntcovovrd7b1us9s2o3p5ic0tquhu.apps.googleusercontent.com";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [location, setLocation] = useState("Mumbai");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gapi-script").then(({ gapi }) => {
        function start() {
          gapi.client.init({
            clientId,
            scope: "",
          });
        }
        gapi.load("client:auth2", start);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
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
              <button
                className="hidden md:block bg-[#f84464] hover:bg-[#e23b5b] text-white font-medium py-1 px-4 rounded-md transition-colors"
                onClick={() => setIsSignInOpen(true)}
              >
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
        </div>
      </header>

      {/* Sign-in Popup */}
      <SignInPopup isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
}
