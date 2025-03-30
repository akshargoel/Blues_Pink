import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 bg-opacity-80 backdrop-blur-lg bg-white shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + School Name */}
        <div className="flex items-center space-x-3">
          {/* Logo Image with Hover Effect */}
          <img 
            src="/logo.png" 
            alt="Blues&Pink Logo" 
            className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
          />
          
          {/* Gradient Text with Hover Effect */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-150 hover:scale-105 hover:drop-shadow-lg">
            <Link to="/">Blues&Pink</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          <NavItem to="/gallery" text="Gallery" />
          <NavItem to="/contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-blue-600 transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X size={28} className="animate-pulse" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Stylish & Non-Fullscreen */}
      <div 
        className={`absolute right-4 top-16 w-48 bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <NavItem to="/" text="Home" mobile />
          <NavItem to="/about" text="About" mobile />
          <NavItem to="/gallery" text="Gallery" mobile />
          <NavItem to="/contact" text="Contact" mobile />
        </div>
      </div>
    </nav>
  );
}

// Nav Item Component with Hover Effects
const NavItem = ({ to, text, mobile }) => (
  <Link
    to={to}
    className={`relative px-4 py-2 font-medium transition-all duration-300 ${
      mobile 
        ? "text-lg block text-blue-600 hover:text-pink-500 hover:scale-105 hover:font-bold transition-all" 
        : "group text-blue-600 hover:text-pink-500 transform hover:scale-110 transition-transform"
    }`}
  >
    {text}
    {!mobile && (
      <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
    )}
  </Link>
);
