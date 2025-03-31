import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#333338] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Customer Care */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-[#f84464] p-3 rounded-full mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                  fill="white"
                />
                <path
                  d="M15 14C16.6569 14 18 12.6569 18 11C18 9.34315 16.6569 8 15 8C13.3431 8 12 9.34315 12 11C12 12.6569 13.3431 14 15 14Z"
                  fill="white"
                />
                <path
                  d="M9 14C10.6569 14 12 12.6569 12 11C12 9.34315 10.6569 8 9 8C7.34315 8 6 9.34315 6 11C6 12.6569 7.34315 14 9 14Z"
                  fill="white"
                />
                <path
                  d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
                  fill="white"
                />
                <path
                  d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
                  fill="white"
                />
                <path
                  d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z"
                  fill="white"
                />
                <path
                  d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">24/7 CUSTOMER CARE</h3>
            </div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-[#f84464] p-3 rounded-full mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 13 12 13C11.6357 13 11.2787 12.8934 10.97 12.7L2 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">RESEND BOOKING CONFIRMATION</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#f84464] p-3 rounded-full mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">SUBSCRIBE TO THE NEWSLETTER</h3>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Movies By Genre</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Action Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Comedy Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Drama Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Horror Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Romantic Movies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Movies By Language</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Hindi Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  English Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Marathi Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Tamil Movies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Telugu Movies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Popular Cinemas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  PVR Cinemas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  INOX
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Cinepolis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Carnival Cinemas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Miraj Cinemas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Events in Mumbai</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Comedy Shows
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Music Concerts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Kids Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Current Offers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-gray-400 font-semibold mb-4 uppercase text-sm">Download Our Apps</h4>
              <div className="flex space-x-4">
                <Link href="#">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8">
          <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p className="mt-2">
            The content and images used on this site are copyright protected and copyrights vests with the respective
            owners.
          </p>
        </div>
      </div>
    </footer>
  )
}

