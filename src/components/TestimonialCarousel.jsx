import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import axios from "axios";

const API_URL = "https://tfsweb-backend.onrender.com/api/testimonials"; // ⚠️ Use http if SSL not configured

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch from DB and pick random 5
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(API_URL);
      const allTestimonials = res.data;

      // Shuffle and pick 5
      const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
      setTestimonials(selected);
    } catch (err) {
      console.error("Failed to fetch testimonials:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return <p className="text-center text-gray-400">No testimonials available</p>;
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 md:p-12"
          >
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center md:text-left">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-white mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-cyan-400 font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
