import React from 'react'

const ImageContainer = () => {
  return (
    <>
    {/* Image Container */}
    {/* Image Collage Section */}
    <div className="relative bg-gradient-to-r from-blue-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-16 px-4 sm:px-8 rounded-3xl shadow-lg">
        <div className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Snapshots of Innovation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            A glimpse into the vibrant energy of our school.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative flex justify-center items-center gap-2 sm:gap-4 md:gap-6 py-10 max-w-screen-sm sm:max-w-screen-md mx-auto">
          {/* Image 1 (Front-Left) */}
          <img
            src="/images/school.jpeg"
            className="w-32 h-32 xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-xl z-10 hover:scale-105 transition-transform duration-300"
          />

          {/* Image 2 (Center, Slightly Behind Others) */}
          <img
            src="/images/school.jpeg"
            className="w-40 h-40 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-xl shadow-xl -ml-4 xs:-ml-6 sm:-ml-10 md:-ml-16 z-0 hover:scale-105 transition-transform duration-300"
          />

          {/* Image 3 (Front-Right) */}
          <img
            src="/images/school.jpeg"
            className="w-28 h-28 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 object-cover rounded-xl shadow-xl -ml-3 xs:-ml-5 sm:-ml-8 md:-ml-12 z-20 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>

  )
}

export default ImageContainer