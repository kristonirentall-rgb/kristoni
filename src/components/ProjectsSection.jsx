import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';

import chairs1 from '../assets/chairs1.jpeg';
import chairs2 from '../assets/chairs2.jpg';
import chairs3 from '../assets/chairs3.jpg';
import tents1 from '../assets/tents1.jpg';
import tents2 from '../assets/tents2.jpg';
import tents3 from '../assets/tents3.jpg';
import tables1 from '../assets/tables1.jpg';
import tables2 from '../assets/tables2.jpg';
import tables3 from '../assets/tables3.jpeg';
import audio1 from '../assets/audio1.jpg';
import audio2 from '../assets/audio2.jpg';
import audio3 from '../assets/audio3.jpg';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import fashion1 from '../assets/fashion1.jpeg';
import fashion2 from '../assets/fashion2.jpeg';
import fashion3 from '../assets/fashion3.jpeg';
import detergent1 from '../assets/detergent1.JPG';
import detergent2 from '../assets/detergent2.JPG';
import detergent3 from '../assets/detergent3.JPG';
import detergent4 from '../assets/detergent4.JPG';
import detergent5 from '../assets/detergent5.JPG';


import produce1 from '../assets/produce1.jpg';
import produce2 from '../assets/produce2.jpg';
import produce3 from '../assets/produce3.jpg';
import poultry1 from '../assets/poultry1.jpg';
import poultry2 from '../assets/poultry2.jpg';
import poultry3 from '../assets/poultry3.jpg';
import equipment1 from '../assets/equipment1.jpg';
import equipment2 from '../assets/equipment2.jpg';
import equipment3 from '../assets/equipment3.jpg';
import vocational1 from '../assets/vocational1.jpg';
import vocational2 from '../assets/vocational2.jpg';
import vocational3 from '../assets/vocational3.jpg';
import digital1 from '../assets/digital1.jpg';
import digital2 from '../assets/digital2.jpg';
import digital3 from '../assets/digital3.jpg';
import greenhouse1 from '../assets/greenhouse1.jpg';
import greenhouse2 from '../assets/greenhouse2.jpg';
import greenhouse3 from '../assets/greenhouse3.jpg';
import hydroponic1 from '../assets/hydroponic1.jpg';
import hydroponic2 from '../assets/hydroponic2.jpg';
import hydroponic3 from '../assets/hydroponic3.jpg';

export const sectors = [
  {
    id: 1,
    sector: "Event Rentals",
    title: "Folding Chairs",
    description: "Commercial-grade folding chairs for events of all sizes. Stackable, durable, and easy to transport. ",
    images: [chairs1, chairs2, chairs3],
    tags: ["Chairs", "Comfort", "Events"],
    demoUrl: "#",
    colorClass: "bg-blue-100 text-blue-800",
    specifications: {
      material: "Steel frame with padded seat",
      weightCapacity: "300 lbs",
      dimensions: "18W x 18D x 32H inches",
      features: ["Foldable", "Non-slip feet", "Lightweight (8 lbs)"],
    },
    pricing: "₵5.00 for fanbackchair /day and ₵3.50 for plastic chairs. ₵3.00 for rentals above 50 chairs",
    availability: "100 units available",
  },
  {
    id: 2,
    sector: "Event Rentals",
    title: "Canopy Tents",
    description: "Weatherproof 10'x10' pop-up tents with optional side walls for complete weather protection.",
    images: [tents1, tents2, tents3],
    tags: ["Outdoor", "Shelter", "Custom"],
    demoUrl: "#",
    colorClass: "bg-blue-100 text-blue-800",
    specifications: {
      material: "Polyester canopy, aluminum frame",
      dimensions: "10W x 10L x 8H feet",
      features: ["Waterproof", "UV-resistant", "Sidewall compatible"],
    },
    pricing: "₵100 per tent/day",
    availability: "50 units available",
  },
  {
    id: 3,
    sector: "Event Rentals",
    title: "Folding Tables",
    description: "6ft and 8ft rectangular tables with durable laminate surfaces. Foldable for easy storage.",
    images: [tables1, tables2, tables3],
    tags: ["Tables", "Durable", "Versatile"],
    demoUrl: "#",
    colorClass: "bg-blue-100 text-blue-800",
    specifications: {
      material: "Laminate top, steel legs",
      dimensions: "6ft or 8ft options",
      features: ["Foldable legs", "Scratch-resistant", "Seats 6-10"],
    },
    pricing: "₵25 per table/day",
    availability: "50 units available",
  },
  {
    id: 4,
    sector: "Event Rentals",
    title: "Audio Equipment",
    description: "Professional PA systems with microphones, speakers, and mixers for events up to 500 people. NOT AVAILABLE",
    images: [audio1, audio2, audio3],
    tags: ["Sound", "Professional", "Tech"],
    demoUrl: "#",
    colorClass: "bg-blue-100 text-blue-800",
    specifications: {
      components: "2 speakers, 1 mixer, 2 microphones",
      power: "1000W output",
      features: ["Bluetooth connectivity", "Portable", "Clear audio"],
    },
    pricing: "$150 per system/day",
    availability: "20 systems available",
  },
  {
    id: 5,
    sector: "E-Commerce",
    title: "Home Essentials",
    description: "Premium kitchenware, bedding, and home organization products at competitive prices. NOT AVAILABLE",
    images: [home1, home2, home3],
    tags: ["Kitchen", "Decor", "Value"],
    demoUrl: "#",
    colorClass: "bg-purple-100 text-purple-800",
    specifications: {
      products: "Cookware sets, bedding, storage bins",
      material: "Stainless steel, cotton, plastic",
      features: ["Durable", "Eco-friendly options", "Modern designs"],
    },
    pricing: "From $10 to $100",
    availability: "In stock",
  },
  {
    id: 6,
    sector: "E-Commerce",
    title: "Fashion Boutique",
    description: "Trendy clothing and accessories for all. Fresh styles arriving weekly.",
    images: [fashion1, fashion2, fashion3],
    tags: ["Apparel", "Style", "Trends"],
    demoUrl: "#",
    colorClass: "bg-purple-100 text-purple-800",
    specifications: {
      sizes: "M = 50cedis, L = 50cedis, XL = 55cedis, XXL = 70cedis",
      material: "Cotton, polyester, blends",
      features: ["Weekly new arrivals", "Custom fits", "Sustainable fabrics"],
    },
    pricing: "From ₵50 to ₵100",
    availability: "In stock, weekly restocks",
  },
  {
  id: 7,
  sector: "E-Commerce",
  title: "Laundry Essentials",
  description: "High-quality detergents, softeners, and cleaning cloths for a fresh and spotless finish.",
  images: [detergent1, detergent2, detergent3, detergent4, detergent5, ],
  tags: ["Cleaning", "Laundry", "Home Care"],
  demoUrl: "#",
  colorClass: "bg-blue-100 text-blue-800",
  specifications: {
    products: "Liquid detergents, fabric softeners, microfiber cloths",
    features: ["Gentle on fabrics", "Eco-friendly options", "Fresh long-lasting scent"],
  },
  pricing: "From ₵50 for one and for Full set ₵150  ",
  availability: "In stock",
},
  {
    id: 8,
    sector: "Agriculture",
    title: "Organic Produce",
    description: "Fresh, pesticide-free vegetables and fruits delivered weekly from local farms. NOT AVAILABLE",
    images: [produce1, produce2, produce3],
    tags: ["Organic", "Fresh", "Local"],
    demoUrl: "#",
    colorClass: "bg-green-100 text-green-800",
    specifications: {
      types: "Tomatoes, lettuce, apples, etc.",
      certifications: "USDA Organic",
      features: ["Weekly delivery", "Non-GMO", "Locally sourced"],
    },
    pricing: "₵25 per weekly box",
    availability: "Seasonal availability",
  },
  {
    id: 9,
    sector: "Agriculture",
    title: "Poultry Farming",
    description: "Free-range chickens and eggs from our ethically-raised flocks.  NOT AVAILABLE",
    images: [poultry1, poultry2, poultry3],
    tags: ["Chickens", "Eggs", "Farm"],
    demoUrl: "#",
    colorClass: "bg-green-100 text-green-800",
    specifications: {
      types: "Whole chickens, eggs",
      features: ["Free-range", "Hormone-free", "Fresh daily"],
    },
    pricing: "$5 per dozen eggs, $8 per chicken",
    availability: "Daily supply",
  },
  {
    id: 10,
    sector: "Agriculture",
    title: "Farm Equipment",
    description: "Tractors, tillers, and irrigation systems for commercial farming operations. NOT AVAILABLE",
    images: [equipment1, equipment2, equipment3],
    tags: ["Machinery", "Tools", "Heavy"],
    demoUrl: "#",
    colorClass: "bg-green-100 text-green-800",
    specifications: {
      types: "Tractors, tillers, drip irrigation",
      features: ["High durability", "Fuel-efficient", "1-year warranty"],
    },
    pricing: "From $500 to $50,000",
    availability: "In stock, custom orders available",
  },
  {
    id: 11,
    sector: "Education",
    title: "Vocational Training",
    description: "Hands-on courses in construction, automotive repair, and electrical work. NOT AVAILABLE",
    images: [vocational1, vocational2, vocational3],
    tags: ["Skills", "Certification", "Trade"],
    demoUrl: "#",
    colorClass: "bg-orange-100 text-orange-800",
    specifications: {
      courses: "Construction, automotive, electrical",
      duration: "6-12 months",
      features: ["Certified instructors", "Hands-on training", "Job placement support"],
    },
    pricing: "$2,000 per course",
    availability: "Enrolling now",
  },
  {
    id: 12,
    sector: "Education",
    title: "Digital Literacy",
    description: "Beginner to advanced computer classes for all age groups.NOT AVAILABLE",
    images: [digital1, digital2, digital3],
    tags: ["Computers", "Coding", "Tech"],
    demoUrl: "#",
    colorClass: "bg-orange-100 text-orange-800",
    specifications: {
      levels: "Beginner, intermediate, advanced",
      duration: "3-6 months",
      features: ["Online and in-person", "Coding bootcamps", "Certification"],
    },
    pricing: "$500 per course",
    availability: "Enrolling now",
  },
  {
    id: 13,
    sector: "Agriculture",
    title: "Greenhouse Systems",
    description: "Advanced greenhouse solutions for year-round crop production with climate control. NOT AVAILABLE",
    images: [greenhouse1, greenhouse2, greenhouse3],
    tags: ["Greenhouse", "Climate Control", "Sustainable"],
    demoUrl: "#",
    colorClass: "bg-green-100 text-green-800",
    specifications: {
      types: "Polycarbonate and glass greenhouses",
      dimensions: "10W x 20L x 8H feet to 50W x 100L x 12H feet",
      features: ["Automated ventilation", "UV-resistant panels", "Modular design"],
    },
    pricing: "$5,000 to $50,000 per unit",
    availability: "In stock, custom builds available",
  },
  {
    id: 14,
    sector: "Agriculture",
    title: "Hydroponic Kits",
    description: "Complete hydroponic systems for soil-less farming, ideal for urban and commercial growers. NOT AVAILABLE",
    images: [hydroponic1, hydroponic2, hydroponic3],
    tags: ["Hydroponics", "Urban Farming", "Efficient"],
    demoUrl: "#",
    colorClass: "bg-green-100 text-green-800",
    specifications: {
      types: "NFT and deep water culture systems",
      capacity: "10 to 100 plants per kit",
      features: ["Nutrient delivery system", "LED grow lights", "Water recycling"],
    },
    pricing: "$200 to $2,000 per kit",
    availability: "In stock",
  },
];
const Tag = ({ label, colorClass }) => (
  <span
    className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass} transition-opacity duration-300`}
  >
    {label}
  </span>
);

const DetailsModal = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${item.id}`}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-card rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
             <button
  onClick={onClose}
  className="absolute top-4 right-4 p-2 text-red-500 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
  aria-label="Close modal"
>
  <X size={24} />
</button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={item.images[0]}
                    alt={`${item.title} - ${item.sector}`}
                    className="w-full h-64 object-cover rounded-lg"
                    loading="lazy"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h2
                    id={`modal-title-${item.id}`}
                    className="text-2xl font-bold text-foreground"
                  >
                    {item.title}
                  </h2>
                  <span
                    className={`inline-block px-3 py-1 ${item.colorClass} rounded-full text-sm font-medium`}
                  >
                    {item.sector}
                  </span>
                  <p className="text-muted-foreground">{item.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Specifications
                      </h3>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {Object.entries(item.specifications).map(([key, value]) => (
                          <li key={key}>
                            <span className="font-medium capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>{" "}
                            {Array.isArray(value) ? value.join(", ") : value}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Pricing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.pricing}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Availability
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.availability}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <Tag key={idx} label={tag} colorClass={item.colorClass} />
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={item.demoUrl}
                      className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
                      aria-label={`View full details for ${item.title}`}
                    >
                      Full Details
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe4ix2RwcLIAkC9fjn_3CbOQ4UCrLhCYBEg82PCw67uiIzxOg/viewform?usp=dialog"
                      className="flex-1 text-center px-4 py-2 bg-background border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                      aria-label={`Request a quote for ${item.title}`}
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const QuickViewModal = ({ isOpen, onClose, item }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isOpen || !item) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % item.images.length);
    }, 4000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [isOpen, item]);

  if (!item) return null;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % item.images.length);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`quickview-title-${item.id}`}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-card rounded-2xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground rounded-full hover:bg-primary/10 transition-colors z-10"
                aria-label="Close quick view modal"
              >
                <X size={24} />
              </button>

              {/* Image Carousel */}
              <div className="relative h-[50vh] md:h-[60vh]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={item.images[currentImage]}
                    alt={`${item.title} - Image ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    loading="lazy"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {item.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full ${
                        currentImage === idx ? "bg-primary" : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Minimal Text Content */}
              <div className="p-6 text-center">
                <h2
                  id={`quickview-title-${item.id}`}
                  className="text-2xl font-bold text-foreground mb-2"
                >
                  {item.title}
                </h2>
                <span
                  className={`inline-block px-3 py-1 ${item.colorClass} rounded-full text-sm font-medium`}
                >
                  {item.sector}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [detailsItem, setDetailsItem] = useState(null);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const filteredSectors = activeFilter === "All"
    ? sectors
    : sectors.filter((item) => item.sector === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Diverse Offerings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our wide range of premium products and services across multiple industries, tailored to meet your needs.
          </motion.p>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            "All",
            "Event Rentals",
            "E-Commerce",
            "Agriculture",
            "Education",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border hover:bg-primary/10"}
              `}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" layout>
            {filteredSectors.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                role="article"
                aria-labelledby={`project-title-${item.id}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={`${item.title} - ${item.sector}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                  <span className="absolute bottom-2 left-2 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                    {item.sector}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, idx) => (
                      <Tag key={idx} label={tag} colorClass={item.colorClass} />
                    ))}
                  </div>

                  <h3
                    id={`project-title-${item.id}`}
                    className="text-xl font-bold mb-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center gap-2">
                    <button
                      onClick={() => setDetailsItem(item)}
                      className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label={`View details for ${item.title}`}
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setQuickViewItem(item)}
                      className="flex-1 text-center px-4 py-2 bg-background border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                      aria-label={`Quick view for ${item.title}`}
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-16">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4ix2RwcLIAkC9fjn_3CbOQ4UCrLhCYBEg82PCw67uiIzxOg/viewform?usp=dialog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
            aria-label="Get a custom quote"
          >
            Get Custom Quote <ArrowRight className="ml-2" size={18} />
          </motion.a>
        </div>

        <DetailsModal
          isOpen={!!detailsItem}
          onClose={() => setDetailsItem(null)}
          item={detailsItem}
        />
        <QuickViewModal
          isOpen={!!quickViewItem}
          onClose={() => setQuickViewItem(null)}
          item={quickViewItem}
        />
      </div>
    </section>
  );
};