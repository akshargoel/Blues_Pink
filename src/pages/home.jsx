import { motion } from "framer-motion";
import ImageContainer from "../components/ImageCards/ImageContainer";
import SectionCard from "../components/ImageCards/SectionCard";
import MirrorCard from "../components/ImageCards/MirrorCard";

const home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <div
        className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/school.jpeg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg text-center"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            "Education is the most powerful weapon you can use to change the
            world."
          </h1>
        </motion.div>
      </div>

      {/* Image Collage */}
      <ImageContainer />

      {/* Section 1 */}
      <SectionCard
        title="Education is the Most Powerful Weapon!"
        description="Our school is dedicated to nurturing young minds with excellence in
            education and values that prepare them for a bright future."
        imageSrc="/images/school.jpeg"
        imageAlt="school"
        imgLayout="w-[350px] h-[350px] object-cover rounded-full shadow-xl border-4 border-blue-600"
        align="right"
        buttonText="Learn More"
      />

      {/* Setion 2 */}
      <SectionCard
        title="Learning Today, Leading Tomorrow!"
        description="We believe in empowering children with knowledge and creativity to
            help them grow into future leaders of tomorrow."
        imageSrc="/images/school.jpeg"
        imageAlt="school"
        imgLayout="w-[350px] h-[350px] object-cover shadow-xl border-4 border-pink-500 rounded-tr-[50%] rounded-bl-[50%]"
        align="left"
        buttonText="Learn More"
      />

      {/* Section 3 */}
      <SectionCard
        title="Innovation in Learning!"
        description=" We foster creativity and critical thinking to prepare students for a
            dynamic future."
        imageSrc="/images/school.jpeg"
        imageAlt="school"
        imgLayout="w-[350px] h-[350px] object-cover shadow-xl border-4 border-pink-500 clip-path-star"
        align="right"
        imglayoutStyle={{
          clipPath:
            " polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
        buttonText="Learn More"
      />

      {/* Section 4 */}
      <SectionCard
        title="Healthy Mind, Healthy Body!"
        description="  Physical education is essential for a well-rounded education. We
            encourage students to stay active and embrace teamwork through
            various sports activities."
        imageSrc="/images/school.jpeg"
        imageAlt="school"
        imgLayout="w-[350px] h-[350px] object-cover shadow-xl border-4 border-pink-500 clip-path-blob"
        imglayoutStyle={{
          clipPath:
            "polygon(40% 0%, 80% 10%, 100% 40%, 90% 80%, 60% 100%, 20% 90%, 0% 50%, 10% 20%)",
        }}
        align="left"
        buttonText="Learn More"
      />
      <MirrorCard />
    </div>
  );
};
export default home;
