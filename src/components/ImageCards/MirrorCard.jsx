import React from 'react'

const MirrorCard = () => {
  return (
    <>
    {/* Mirror Image Section */}
    <div className="relative bg-gradient-to-r from-pink-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-6 sm:px-12 rounded-3xl shadow-lg mt-16">
        <div className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Reflecting the Future
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Where creativity meets technology.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative group">
            <img
              src="/mirror1.jpg"
              className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay with text */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                group-focus-within:opacity-100 group-active:opacity-100"
            >
              <p className="text-white text-xl font-semibold">
                Creativity Starts Here
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <img
              src="/mirror2.jpg"
              className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay with text */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                group-focus-within:opacity-100 group-active:opacity-100"
            >
              <p className="text-white text-xl font-semibold">
                Building the Future
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MirrorCard