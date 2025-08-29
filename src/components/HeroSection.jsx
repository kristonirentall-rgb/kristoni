import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import images from assets folder
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

export const HeroSection = () => {
  const slideshowRef = useRef(null);

  // GSAP Slideshow Animation
  useEffect(() => {
    const images = slideshowRef.current.querySelectorAll(".slideshow-image");
    gsap.set(images, { opacity: 0, scale: 1.1 });

    const tl = gsap.timeline({ repeat: -1 });
    images.forEach((image, index) => {
      tl.to(image, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      })
        .to(image, {
          opacity: 1,
          duration: 4,
        })
        .to(image, {
          opacity: 0,
          scale: 1.1,
          duration: 2,
          ease: "power2.in",
        }, `+=${index * 6}`);
    });

    return () => tl.kill(); // Cleanup on unmount
  }, []);

  // Framer Motion variants for text and button animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0" ref={slideshowRef}>
        <div className="slideshow">
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image2})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image4})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image5})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image6})`,
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage: `url(${image7})`,
            }}
          ></div>
        </div>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              Kristoni Holdings
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Empowering communities through rentals, e-commerce, farming, and education. 
            A one-stop platform for growth, innovation, and opportunity.
          </motion.p>

          <motion.div className="pt-6" variants={itemVariants}>
            <motion.a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-primary rounded-full shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                Explore Our Services
              </span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-sm text-white/80 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>

      {/* Inline CSS for slideshow */}
      <style jsx>{`
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slideshow-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};