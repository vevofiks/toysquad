"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks, footerSections } from "../data";
import { Mail, MapPin, Phone, Sparkles, Heart, ArrowUp } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className={`absolute w-4 h-4  opacity-30 ${i % 4 === 0
              ? "bg-blue-400"
              : i % 4 === 1
                ? "bg-cyan-400"
                : i % 4 === 2
                  ? "bg-indigo-400"
                  : "bg-sky-400"
              }`}
            style={{
              top: `${(i * 8.33) % 100}%`,
              left: `${(i * 13.7) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Features Section */}
      <div className="relative z-10 border-b border-blue-200/30"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 ">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                <div className="items-center">
                  <Image
                    src="/logo.png"
                    alt="Toysquad Logo"
                    width={80}
                    height={80}
                  />
                </div>
              </motion.div>
              <div>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>

            <p className="text-gray-600 leading-relaxed">
              Creating magical moments and inspiring young minds through
              carefully curated toys that educate, entertain, and bring families
              together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                <span>123 Toy Street, Playtown, PT 12345</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>+91 6282022424</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>hello@toysquad.com</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 ${social.color} ${social.bg}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4 mt-10 gap-5 ">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="font-bold text-blue-600 text-lg/4"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-2 text-md">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#2563eb" }} // blue-600
                      className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1, x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="w-3 h-3 text-blue-400" />
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-blue-200/30 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600"
            >
              <span>© 2025 ToySquad. All rights reserved.</span>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
