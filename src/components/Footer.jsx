import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/tfs_2k24?igsh=OHF3dzRnamFrczd3', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/917598503596', label: 'WhatsApp' }, // ✅ WhatsApp link
    { icon: MdAddCall, href: 'tel:+916380772424', label: 'Call' }, // ✅ Call works
    { 
  icon: Mail, 
  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tfs2k24@gmail.com&su=Hello%20Tech%20Fusion%20Studios&body=Hi%20Team,', 
  label: 'Email' 
}

  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="logo" className='w-20 h-20 mx-2 my-2'/>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tech Fusion Studios
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into digital reality with cutting-edge technology and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_self"   // ✅ ensures mailto works properly
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>UI/UX Design</li>
              <li>Custom PC Build</li>
              <li>CCTV Installation</li>
              <li>POS Installation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:tfs2k24@gmail.com" className="hover:text-cyan-400">
                  tfs2k24@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916380772424" className="hover:text-cyan-400">
                  +91 6380772424
                </a>
              </li>
              <li>Cennimalai, Erode - 638051</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>2025 Tech Fusion Studios.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
