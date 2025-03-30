import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WhyChooseUs from "../components/aboutComponents/WhyChoose";
import OurCampus from "../components/aboutComponents/Campus";
import AchievementsEvents from "../components/aboutComponents/Achievements";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Cover Image */}
      <motion.div
        className="relative h-[50vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-cover-image.jpg')" }}
        animate={{ y: scrollY * 0.3 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </motion.div>

      {/* Description Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 text-transparent bg-clip-text">
            Welcome to Blues&Pink
          </h2>
          <p className="text-lg text-gray-700">
            At Blues&Pink , we embrace innovation, creativity, and the digital
            era. Our mission is to provide a dynamic learning experience that
            empowers students with modern skills and knowledge, preparing them
            for a rapidly evolving world.
          </p>
        </motion.div>
      </section>

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* Campus */}
      <OurCampus />

      {/* Achievements */}
      <AchievementsEvents />
    </div>
  );
};

export default About;
