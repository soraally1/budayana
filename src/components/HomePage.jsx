import { motion } from "framer-motion";
import BannerHero from "../assets/BannerHero.png";
import CloudBanner from "../assets/CloudBanner.jpeg";
import BudayanaLogo from "../assets/Budayana.png";
import Cloud from "../assets/Cloud.png";
import TariTraditional from "../assets/TariTraditional.png";
import Drama from "../assets/Drama.png";
import MusikTraditional from "../assets/MusikTraditional.png";
import NariImg from "../assets/Nari.jpeg";
import DramaImg from "../assets/Drama.jpeg";
import MusikImg from "../assets/Musik.jpeg";
import Community from "./Section/Community";
import Footer from "./Section/Footer";
import Anna from "./Section/Anna";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Animation variants for consistent reuse
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const floatingCloud = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingCloudSlow = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingCloudFast = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[400px] sm:h-[500px] ipad-mini:h-[550px] ipad-air:h-[580px] lg:h-[600px] pt-20">
        {/* Cloud Background */}
        <div className="absolute inset-0 p-4 sm:p-8 ipad-mini:p-12 ipad-air:p-14 lg:p-16">
          <img
            src={CloudBanner}
            alt="Cloud Background"
            className="w-full h-[300px] sm:h-[350px] ipad-mini:h-[380px] ipad-air:h-[400px] rounded-3xl object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between p-10 sm:p-8 ipad-mini:p-12 ipad-air:p-14 lg:p-16">
          {/* Left Side - Character */}
          <div
            className="w-[280px] sm:w-[400px] ipad-mini:w-[420px] ipad-air:w-[480px] lg:w-[580px] 
                         -mt-8 sm:mt-0"
          >
            <img src={BannerHero} alt="Character" className="w-full h-auto" />
          </div>

          {/* Right Side - Logo and Text */}
          <div
            className="flex flex-col items-center lg:items-end 
                         lg:pr-16 
                         gap-2 sm:gap-3 lg:gap-4 
                         max-w-[300px] sm:max-w-[450px] ipad-mini:max-w-[480px] lg:max-w-[600px] 
                         mt-4 lg:mt-0"
          >
            <img
              src={BudayanaLogo}
              alt="Budayana Logo"
              className="w-full h-auto"
            />
            <p
              className="font-fuzzy text-white text-base sm:text-lg ipad-mini:text-xl
                         font-bold text-stroke-thick text-center lg:text-right"
            >
              Temukan event budaya kamu, Di Budayana!
            </p>
            <button
              className="font-fuzzy bg-brown-800 text-white 
             px-6 sm:px-8 
             py-2 sm:py-2.5 
             rounded-full hover:bg-brown-900 transition-all 
             text-xs sm:text-sm ipad-mini:text-base 
             font-medium text-stroke-thick
             hover:scale-105 transform duration-200
             hover:shadow-lg
             flex items-center justify-center space-x-2"
            >
              <Link to="/tickets" className="flex items-center">
                <span>Cari Tiket!</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Cloud Gate Group */}
      <div className="relative w-full overflow-hidden px-4 sm:px-8 ipad-mini:px-12 ipad-air:px-14 lg:px-16 mt-20 sm:mt-24 lg:mt-32">
        <div className="flex justify-between items-center max-w-[2400px] h-[450px] mx-auto">
          {/* Left Cloud Group */}
          <div className="relative w-[160px] xs:w-[180px] sm:w-[240px] lg:w-[400px]">
            {/* Main left cloud */}
            <motion.img
              variants={floatingCloud}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Left Cloud Main"
              className="w-full h-auto transform -scale-x-100"
            />
            {/* Additional left clouds */}
            <motion.img
              variants={floatingCloudSlow}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Left Cloud Top"
              className="absolute -top-8 sm:-top-12 
                         -left-20 xs:-left-24 sm:-left-32 lg:-left-40 
                         w-[80%] sm:w-[90%] h-auto 
                         transform -scale-x-100"
            />
            <motion.img
              variants={floatingCloudFast}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Left Cloud Bottom"
              className="absolute -bottom-6 sm:-bottom-10 
                         -right-8 sm:-right-16 
                         w-[60%] sm:w-[70%] h-auto 
                         transform -scale-x-100"
            />
            <motion.img
              variants={floatingCloud}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Left Cloud Back"
              className="absolute top-1/4 
                         -left-16 xs:-left-20 sm:-left-28 lg:-left-32 
                         w-[85%] sm:w-[95%] h-auto 
                         transform -scale-x-100"
            />
          </div>

          {/* Right Cloud Group */}
          <div className="relative w-[160px] xs:w-[180px] sm:w-[240px] lg:w-[400px]">
            {/* Main right cloud */}
            <motion.img
              variants={floatingCloud}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Right Cloud Main"
              className="w-full h-auto"
            />
            {/* Additional right clouds */}
            <motion.img
              variants={floatingCloudSlow}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Right Cloud Top"
              className="absolute -top-8 sm:-top-12 
                         -right-20 xs:-right-24 sm:-right-32 lg:-right-40 
                         w-[80%] sm:w-[90%] h-auto"
            />
            <motion.img
              variants={floatingCloudFast}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Right Cloud Bottom"
              className="absolute -bottom-6 sm:-bottom-10 
                         -left-8 sm:-left-16 
                         w-[60%] sm:w-[70%] h-auto"
            />
            <motion.img
              variants={floatingCloud}
              initial="initial"
              animate="animate"
              src={Cloud}
              alt="Right Cloud Back"
              className="absolute top-1/4 
                         -right-16 xs:-right-20 sm:-right-28 lg:-right-32 
                         w-[85%] sm:w-[95%] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Event Section */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 mt-16 sm:mt-20 md:mt-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="font-fuzzy text-[#4A3427] text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-12 sm:mb-16"
          >
            Jelajahi Event Budaya!
          </motion.h1>

          {/* Cards Container */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-16 sm:gap-8 md:gap-12 lg:gap-16 justify-center items-end mt-8"
          >
            {/* Traditional Dance Card */}
            <Link to="/tickets?category=tari-tradisional" className="block">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative w-[220px] xs:w-[240px] sm:w-[220px] md:w-[240px] lg:w-[280px] mx-auto sm:mx-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[3/5] rounded-[32px] overflow-hidden bg-[#F5F5F5] shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={NariImg}
                    alt="Traditional Dance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="bg-[#4A3427] rounded-full px-2 sm:px-3 py-1">
                      <span className="text-white text-xs sm:text-sm font-fuzzy">
                        Cek Event!
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 sm:-bottom-5 right-16 sm:right-20 pr-4 sm:pr-5"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={TariTraditional}
                    alt="Tari Traditional"
                    className="w-[150%] sm:w-[160%] max-w-[500px] mx-auto"
                  />
                </motion.div>
              </motion.div>
            </Link>

            {/* Drama Card - Larger */}
            <Link to="/tickets?category=drama-tradisional" className="block">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative w-[260px] xs:w-[280px] sm:w-[260px] md:w-[280px] lg:w-[350px] sm:-mb-6 mx-auto sm:mx-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[3/5] rounded-[32px] overflow-hidden bg-[#F5F5F5] shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={DramaImg}
                    alt="Drama"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="bg-[#4A3427] rounded-full px-2 sm:px-3 py-1">
                      <span className="text-white text-xs sm:text-sm font-fuzzy">
                        Cek Event!
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 sm:-bottom-8 left-0 right-0"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={Drama}
                    alt="Drama"
                    className="w-[90%] sm:w-[100%] max-w-[320px] mx-auto"
                  />
                </motion.div>
              </motion.div>
            </Link>

            {/* Traditional Music Card */}
            <Link to="/tickets?category=musik-tradisional" className="block">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative w-[220px] xs:w-[240px] sm:w-[220px] md:w-[240px] lg:w-[280px] mx-auto sm:mx-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[3/5] rounded-[32px] overflow-hidden bg-[#F5F5F5] shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={MusikImg}
                    alt="Traditional Music"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <div className="bg-[#4A3427] rounded-full px-2 sm:px-3 py-1">
                      <span className="text-white text-xs sm:text-sm font-fuzzy">
                        Cek Event!
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 sm:-bottom-8 right-12 sm:right-16 pr-4 sm:pr-5"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={MusikTraditional}
                    alt="Musik Traditional"
                    className="w-[150%] sm:w-[160%] max-w-[400px] mx-auto"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="font-fuzzy text-[#4A3427] text-base xs:text-lg sm:text-xl text-center max-w-[800px] mx-auto mt-20 sm:mt-24 md:mt-28"
          >
            Di Indonesia, ada ratusan event budaya menarik yang sayang untuk
            dilewatkan!
          </motion.p>
        </div>
      </div>

      {/* Anna Section */}
      <div className="relative py-20">
        <Anna />
      </div>
      <Community />
      <Footer />
    </>
  );
};

export default HomePage;
