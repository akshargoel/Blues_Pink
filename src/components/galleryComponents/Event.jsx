import React from 'react'
import { motion } from 'framer-motion';
const Event = () => {
  return (
    <>
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
        
    </>
  )
}

export default Event