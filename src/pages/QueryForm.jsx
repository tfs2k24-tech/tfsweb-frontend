import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';


const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await axios.post('https://tfsweb-backend.onrender.com/api/queries', formData, {
      withCredentials: true
    });

    console.log('Form submitted successfully:', response.data);
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);

  } catch (err) {
    setIsSubmitting(false);

    if (err.response) console.error('Server responded with error:', err.response.data);
    else if (err.request) console.error('No response received:', err.request);
    else console.error('Axios error:', err.message);
  }
};


  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-16 min-h-screen flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-gray-900/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-800 max-w-md mx-4">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-400 leading-relaxed">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="pt-16">
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get a <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and we'll provide you with a detailed proposal.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            {/* Grid for Name/Email/Company/Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:ring-cyan-500/20 focus:border-cyan-500'}`} placeholder="Enter your full name" />
                {errors.name && <div className="flex items-center mt-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4 mr-1" /> {errors.name}</div>}
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:ring-cyan-500/20 focus:border-cyan-500'}`} placeholder="Enter your email address" />
                {errors.email && <div className="flex items-center mt-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4 mr-1" /> {errors.email}</div>}
              </div>
              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800/50 text-amber-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-all duration-300" placeholder="Your company name" />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800/50 text-amber-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-all duration-300" placeholder="Your phone number" />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-3 bg-gray-800/50 text-amber-50 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${errors.subject ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:ring-cyan-500/20 focus:border-cyan-500'}`} placeholder="Brief description of your project" />
              {errors.subject && <div className="flex items-center mt-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4 mr-1" /> {errors.subject}</div>}
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 text-amber-50 focus:outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-700 focus:ring-cyan-500/20 focus:border-cyan-500'}`} placeholder="Tell us more about your project requirements..."></textarea>
              {errors.message && <div className="flex items-center mt-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4 mr-1" /> {errors.message}</div>}
            </div>

            <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25'}`}>
              {isSubmitting ? <><div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
};

export default QueryForm;
