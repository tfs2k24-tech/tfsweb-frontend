import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Star, X } from "lucide-react";
import axios from "axios";

const API_URL = "https://tfsweb-backend.onrender.com/api/testimonials"; // ⚠️ Use http unless SSL is configured

const TestimonialForm = ({ editingTestimonial, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    rating: 5,
    text: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null); // for modal

  // Fetch testimonials
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(API_URL);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Error fetching testimonials:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Pre-fill form for editing
  useEffect(() => {
    if (editingTestimonial) {
      setFormData(editingTestimonial);
    }
  }, [editingTestimonial]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.text.trim()) newErrors.text = "Testimonial text is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      let response;
      if (editingTestimonial) {
        response = await axios.put(`${API_URL}/${editingTestimonial._id}`, formData);
      } else {
        response = await axios.post(API_URL, formData);
      }

      console.log("Saved successfully:", response.data);
      onSave?.();
      fetchTestimonials(); // refresh grid

      setFormData({ name: "", role: "", company: "", rating: 5, text: "" });
    } catch (err) {
      console.error("Error saving testimonial:", err.response?.data || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {editingTestimonial ? "Update" : "Add"}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Testimonial
              </span>
            </h1>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 mb-16"
          >
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg ${
                  errors.name ? "border-red-500" : "border-gray-700 focus:border-cyan-500"
                }`}
                placeholder="Enter full name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Role */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg ${
                  errors.role ? "border-red-500" : "border-gray-700 focus:border-cyan-500"
                }`}
                placeholder="Enter role"
              />
              {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg ${
                  errors.company ? "border-red-500" : "border-gray-700 focus:border-cyan-500"
                }`}
                placeholder="Enter company"
              />
              {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}>
                    <Star className={`w-8 h-8 ${star <= formData.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-500"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial *</label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg resize-none ${
                  errors.text ? "border-red-500" : "border-gray-700 focus:border-cyan-500"
                }`}
                placeholder="Enter testimonial"
              />
              {errors.text && <p className="text-red-400 text-sm mt-1">{errors.text}</p>}
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full py-4 px-8 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial._id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-xs mb-3">{testimonial.company}</p>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Truncate long text */}
                <p className="text-gray-300 text-sm">
                  {testimonial.text.length > 100
                    ? testimonial.text.slice(0, 100) + "..."
                    : testimonial.text}
                </p>

                {/* Show More button */}
                {testimonial.text.length > 100 && (
                  <button
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="mt-2 text-blue-400 text-sm hover:underline"
                  >
                    Show More
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full testimonial */}
      {selectedTestimonial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold mb-2">{selectedTestimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {selectedTestimonial.role} @ {selectedTestimonial.company}
            </p>
            <div className="flex mb-4">
              {[...Array(selectedTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 whitespace-pre-line">{selectedTestimonial.text}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialForm;
