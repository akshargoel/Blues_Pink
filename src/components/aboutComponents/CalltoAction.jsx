import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-[url('/cta-bg.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl inline-block"
        >
          <h2 className="text-5xl font-extrabold mb-4">Be Part of the Future 🚀</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">Join Gen-Z School today and experience a revolutionary approach to education.</p>
          <motion.a 
            href="/apply"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
