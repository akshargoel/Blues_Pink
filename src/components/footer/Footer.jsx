import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";
const footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* School Branding */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
            Blues&Pink
          </h2>
          <p className="text-gray-300 mt-3">
            Learning today, leading tomorrow. Where creativity meets innovation. 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-pink-300">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-pink-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-400 transition">About</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-pink-400 transition">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-blue-300">Stay Connected</h3>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-gray-300 hover:text-pink-400 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-400 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-400 transition text-2xl">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Love Section */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Blues&Pink. All rights reserved.</p>
        <p className="mt-2">
          Made with ❤️ by <span className="text-pink-400">Blues&Pink</span>.
        </p>
      </div>
    </footer>
  )
}

export default footer