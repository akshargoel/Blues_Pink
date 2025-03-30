import { motion } from "framer-motion";

const ContactPage = () => {
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
          Get in Touch 💬
        </motion.h2>

        {/* 📌 Contact Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 📩 Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="bg-white shadow-lg p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Your Message" className="w-full px-4 py-3 border rounded-md h-32 focus:ring-2 focus:ring-blue-500"></textarea>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full bg-gradient-to-r from-blue-500 to-pink-600 text-white py-3 rounded-md font-semibold shadow-lg hover:opacity-90 transition"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* 📸 Contact Image with CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="relative rounded-xl overflow-hidden"
          >
            <img src="/images.school.jpeg" alt="Contact Us" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-3xl font-bold">Have Questions?</h3>
              <p className="text-lg mt-2">Reach out to us for any queries or support.</p>
              <motion.a 
                href="tel:+917678466800" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition duration-300"
              >
                Call Now 📞
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 📍 Location & Quick Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="mt-16 bg-gradient-to-r from-blue-500 to-pink-600 text-white text-center py-12 rounded-xl"
        >
          <h3 className="text-3xl font-bold">Visit Our Campus 📍</h3>
          <p className="text-lg mt-2">Uttam nagar, India</p>
          <p className="mt-1">📧 Email: goelakshar1212@gmail.com | 📞 Phone: +917678466800</p>
          <motion.a 
            href="https://maps.google.com" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="mt-4 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Open in Maps 🗺️
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
