import { motion } from "framer-motion";

const AchievementsEvents = () => {
  const events = [
    { year: "2024", title: "🏆 Best Tech-Enabled School ", desc: "Recognized for our cutting-edge digital learning platform." },
    { year: "2024", title: "🌍 blah blah blah ", desc: "blah blah." },
    { year: "2025", title: "🎨yo yo", desc: "hihihi" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12">Our Achievements & Events</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-2xl font-bold text-blue-600">{event.year}</div>
              <h3 className="text-xl font-semibold mt-3">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsEvents;
