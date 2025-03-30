import React from "react";
import { motion } from "framer-motion";

const SectionCard = ({title, description, imageSrc,imageAlt,imgLayout,imglayoutStyle, align, buttonText}) => {
  if (align == "right") {
    return (
      <>
        {/* Section 1 - Image Right */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 max-w-7xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {title}
            </h2>
            <p className="text-lg text-gray-700">
              {description}
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
             {buttonText}
            </button>
          </motion.div>

          {/* Image - Cool Cutout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className={imgLayout}
              style={imglayoutStyle}
            />
          </motion.div>
        </section>
      </>
    );
  }
  return (<>
        {/* Section 2 - Image Left */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20 px-6 max-w-7xl mx-auto">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-pink-500">
            {title}
          </h2>
          <p className="text-lg text-gray-700">
            {description}
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all">
            {buttonText}
          </button>
        </motion.div>

        {/* Image - Cool Cutout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className={imgLayout}
            style={imglayoutStyle}
          />
        </motion.div>
      </section>
  </>);
};

export default SectionCard;
