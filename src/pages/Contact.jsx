import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "Chennimalai, Erode-638051",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 63807 72424",
    },
    {
      icon: Mail,
      title: "Email",
      info: "tfs2k24@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    {
      icon: Instagram,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with us and let's
              discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group text-center"
              >
                <item.icon className="h-12 w-12 text-cyan-400 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Connect Via Google Meet
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Fill out tha query form to get more details <br />
                    aboput ourself and schedule a Google Meet session <br />
                    with our team. At your flexible time.
                  </p>
                  <br />
                  <motion.a
                    href="/query"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Fill The Form.!!
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Let's{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Why Choose Tech Fusion Studios?
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Expert team with industry grade skills
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Custom solutions tailored to your business needs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      24/7 support and maintenance services
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Transparent pricing and clear communication
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Response Time
                  </h3>
                  <p className="text-gray-400">
                    We typically respond to all inquiries within 2-4 hours
                    during business hours. For urgent matters, please call us
                    directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Project
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Fill out our project inquiry form to get a detailed proposal and
              timeline for your next digital venture.
            </p>
            <motion.a
              href="/query"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
