import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    { name: "Multi-Sector Expertise", level: 95, color: "from-blue-500 to-blue-700" },
    { name: "Customer Satisfaction", level: 92, color: "from-green-500 to-green-700" },
    { name: "Timely Delivery & Support", level: 90, color: "from-purple-500 to-purple-700" },
    { name: "Affordability & Accessibility", level: 88, color: "from-red-500 to-red-700" },
    { name: "Innovation & Growth", level: 85, color: "from-yellow-500 to-yellow-700" },
    { name: "Community Impact", level: 90, color: "from-teal-500 to-teal-700" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-white"
        >
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Choose us</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {values.map((item, key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="relative bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700/50 backdrop-blur-sm group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="text-left mb-4">
                <h3 className="font-semibold text-xl text-white">{item.name}</h3>
              </div>
              <div className="w-full bg-gray-700/50 h-3 rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-3 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.level}%` } : {}}
                  transition={{ duration: 1.5, ease: "easeOut", delay: key * 0.2 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-[shine_2s_infinite]" />
                </motion.div>
              </div>
              <div className="text-right mt-2">
                <span className="text-sm font-medium text-gray-300">{item.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};