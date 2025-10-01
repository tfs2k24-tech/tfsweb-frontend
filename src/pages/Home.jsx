import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Cloud, Users, Star, Cctv, Computer, PcCase, Server, Pen, PenTool } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies.',
    },
    {
      icon: PenTool,
      title: 'Grapgic Design',
      description: 'Modern graphic design for print and digital.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
    },
    {
      icon: PcCase,
      title: 'Custom PC Builds',
      description: 'Tailored Workstations for Gaming, Design, and Development.',
    },
    {
      icon: Cctv,
      title: 'CCTV Installation',
      description: 'Smart Surveillance Systems with Remote Monitoring.',
    },
    {
      icon: Server,
      title: 'POS Installation',
      description: 'End-to-End POS Installation and Setup Services.',
    },
  ];

  const stats = [
    { number: '100%', label: 'Customer Support' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Projects Delivered On-Time' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tech Fusion
            </span>
            <br />
            <span className="text-white">Studios</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transforming ideas into digital reality with cutting-edge technology and innovative design solutions
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/query"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:border-cyan-500 transition-all duration-300"
            >
              View Portfolio
            </Link>
            
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Services Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        We offer comprehensive digital solutions to help your business thrive in the modern world
      </p>
    </motion.div>

    {/* First Row - 4 services */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {services.slice(0, 4).map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
        >
          <service.icon className="h-12 w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>

    {/* Second Row - 2 services centered */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
      {services.slice(4).map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
        >
          <service.icon className="h-12 w-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>
          
          <TestimonialCarousel />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;