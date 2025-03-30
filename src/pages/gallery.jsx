import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CampusImages = [
  { images: "/images/school.jpeg" },
  { images: "/images/school.jpeg" },
  { images: "/images/school.jpeg" },
  // Add more images as needed
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Explore Our Gallery 📸
        </motion.h2>

        {/* 🏫 Campus Images - Masonry Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">🏫 Our Beautiful Campus</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CampusImages.map((campus, i) => (
              <motion.img
                key={i}
                src={campus.images}
                alt={`Campus ${i + 1}`}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 md:hover:scale-105"
                onClick={!isMobile ? () => setActiveImage(campus.images) : undefined}
              />
            ))}
          </div>
        </div>

        {/* 🎭 Student Activities - Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">🎭 Student Life & Activities</h3>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="flex overflow-x-auto gap-4">
              {["/images/school.jpeg", "/images/school.jpeg", "/images/school.jpeg"].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Activity ${i + 1}`}
                  className="w-1/3 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 🎉 Events - Hover Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">🎉 Memorable Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["/images/school.jpeg", "/images/school.jpeg", "/images/school.jpeg"].map((img, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <img src={img} alt={`Event ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">View Event</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Modal (if clicked) */}
        {activeImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <motion.img
              src={activeImage}
              alt="Expanded View"
              className="max-w-3xl rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveImage(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
