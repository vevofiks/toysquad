"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);

  // Track scroll position to keep navbar completely transparent during hero scroll animation
  useEffect(() => {
    const handleScroll = () => {
      // 400vh hero section height check (~3.8 * innerHeight)
      const heroThreshold = window.innerHeight * 3.8;
      setIsHeroActive(window.scrollY < heroThreshold);
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar - 100% Transparent while scroll trigger animation is active */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isHeroActive
            ? "bg-transparent border-none shadow-none"
            : scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={85}
                height={85}
                className="object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 rounded-full text-sm font-bold text-slate-900 hover:text-blue-600 transition-all duration-200"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-2.5 rounded-full bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-white/95 backdrop-blur-xl text-slate-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    onClick={toggleMenu}
                    className="block w-full p-4 rounded-xl font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
