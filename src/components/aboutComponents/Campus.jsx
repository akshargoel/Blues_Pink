const OurCampus = () => {
    const images = [
      "/images/school.jpeg",
      "/images/school.jpeg",
      "/images/school.jpeg",
      "/images/school.jpeg",
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Campus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Campus ${index + 1}`} className="rounded-lg shadow-md hover:scale-105 transition duration-300" />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurCampus;
  