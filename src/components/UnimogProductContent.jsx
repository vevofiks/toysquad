"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Gauge,
  Battery,
  Sliders,
  Radio,
  Ruler,
  Users,
  Lightbulb,
  Music,
  Disc,
  Package,
  Wrench,
  CheckCircle,
  Truck,
  ArrowRight,
  ChevronDown,
  Star,
  ShoppingCart,
  Eye,
  Lock,
  RefreshCw,
  Award,
  Heart,
  HelpCircle,
  Sparkles,
  FileText,
  Hammer,
  Settings,
  Cpu,
} from "lucide-react";

const UnimogProductContent = () => {
  // Age Guide Tab State (Section 04)
  const [selectedAgeTab, setSelectedAgeTab] = useState("3-5");

  // FAQ Accordion State (Section 09)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Products Data for Section 02 Collection
  const collectionProducts = [
    {
      id: "unimog-4wd",
      name: "Mercedes-Benz Unimog 4WD",
      tagline: "Official Heavy-Duty Off-Roader",
      price: "₹41,999",
      originalPrice: "₹49,999",
      rating: 4.9,
      reviewsCount: 128,
      age: "Ages 3 – 8 Yrs",
      voltage: "24V 7Ah SLA Battery",
      speed: "8.0 km/h (Dual Speed)",
      remote: "2.4G Parent Remote Included",
      motors: "Dual 200W (400W Peak)",
      image: "/frames/horizontal/ezgif-frame-050.jpg",
      badge: "Flagship Bestseller",
      badgeColor: "bg-blue-600 text-white",
    },
    {
      id: "expedition-jeep",
      name: "ToySquad Off-Road Expedition Jeep",
      tagline: "Rugged All-Terrain Explorer",
      price: "₹34,999",
      originalPrice: "₹39,999",
      rating: 4.8,
      reviewsCount: 94,
      age: "Ages 3 – 7 Yrs",
      voltage: "12V 10Ah Battery",
      speed: "6.5 km/h",
      remote: "2.4G Remote Included",
      motors: "Dual 45W Motors",
      image: "/frames/horizontal/ezgif-frame-035.jpg",
      badge: "Customer Choice",
      badgeColor: "bg-emerald-600 text-white",
    },
    {
      id: "super-convertible",
      name: "GT Super Sports Convertible",
      tagline: "Sleek Aerodynamic Roadster",
      price: "₹29,999",
      originalPrice: "₹34,999",
      rating: 4.7,
      reviewsCount: 82,
      age: "Ages 2 – 6 Yrs",
      voltage: "12V 7Ah Battery",
      speed: "5.0 km/h",
      remote: "2.4G Remote Included",
      motors: "Dual 35W Motors",
      image: "/frames/horizontal/ezgif-frame-020.jpg",
      badge: "Popular City Cruiser",
      badgeColor: "bg-purple-600 text-white",
    },
    {
      id: "executive-sedan",
      name: "Executive Luxury Cruise Sedan",
      tagline: "Comfort Ride with Soft Suspension",
      price: "₹27,999",
      originalPrice: "₹31,999",
      rating: 4.6,
      reviewsCount: 65,
      age: "Ages 2 – 5 Yrs",
      voltage: "12V 7Ah Battery",
      speed: "4.5 km/h",
      remote: "2.4G Remote Included",
      motors: "Dual 35W Motors",
      image: "/frames/horizontal/ezgif-frame-010.jpg",
      badge: "Smooth Starter Ride",
      badgeColor: "bg-slate-700 text-white",
    },
  ];

  // Age Guide Data for Section 04
  const ageGuides = {
    "1-3": {
      title: "Toddler Starter Rides (Ages 1 – 3)",
      recommendedVoltage: "12V Low-Speed Configuration",
      maxSpeed: "3.0 km/h Safe Limit",
      safetyFeature: "100% Parent Remote Priority Control",
      description:
        "Designed for toddlers developing motor coordination. Features ultra-soft acceleration curves, comfortable 5-point seat harness, and instant remote brake override.",
      recommendedModel: "Executive Luxury Cruiser",
    },
    "3-5": {
      title: "Junior Adventurer Range (Ages 3 – 5)",
      recommendedVoltage: "12V 10Ah Heavy-Duty Battery",
      maxSpeed: "5.5 km/h Dual Speed",
      safetyFeature: "Parent Speed Lockout & Remote Sync",
      description:
        "Perfect balance of independence and safety. Equipped with working LED headlights, integrated MP3 Bluetooth audio, and durable EVA rubber tires.",
      recommendedModel: "GT Super Sports Convertible",
    },
    "5-7": {
      title: "All-Terrain Explorers (Ages 5 – 7)",
      recommendedVoltage: "24V High-Capacity System",
      maxSpeed: "7.0 km/h High Gear",
      safetyFeature: "Coil Suspension & Steering Locks",
      description:
        "High-momentum vehicles engineered for grass, unpaved dirt, and gravel driveways. Twin motors provide ample torque for incline climbing.",
      recommendedModel: "ToySquad Expedition Jeep",
    },
    "7+": {
      title: "Flagship 4WD Performance (Ages 7+)",
      recommendedVoltage: "24V 400W Peak Dual Motor",
      maxSpeed: "8.0 km/h Sport Mode",
      safetyFeature: "60 kg Payload & 2-Seater Cockpit",
      description:
        "Our most powerful vehicle platform. Heavy-duty steel sub-frame, puncture-proof 14\" EVA tires, and dual leatherette seats for shared adventures.",
      recommendedModel: "Mercedes-Benz Unimog 4WD",
    },
  };

  // FAQ Data for Section 09
  const faqList = [
    {
      q: "What age range is suitable for ToySquad kids electric cars?",
      a: "Our vehicles cater to children aged 1 to 8 years. Models range from low-speed 12V starter cars for toddlers (ages 1–3) up to 24V dual-motor 4WD vehicles like the Mercedes Unimog for older kids (ages 3–8).",
    },
    {
      q: "How does the parent remote control safety feature work?",
      a: "Every ToySquad vehicle includes a 2.4G wireless parent remote control with up to 30 meters of range. The remote has absolute priority over the pedal—parents can steer, change speed modes, or instantly press the emergency brake button at any time.",
    },
    {
      q: "How long does the battery last on a single charge?",
      a: "Depending on rider weight, speed mode, and terrain, our 24V battery systems provide 60 to 90 minutes of continuous drive time per charge.",
    },
    {
      q: "How long does it take to fully charge the vehicle battery?",
      a: "Initial charging takes approximately 8 to 10 hours using the included fast-charge wall adapter. Regular maintenance recharges take 6 to 8 hours.",
    },
    {
      q: "Is delivery available across all locations in India?",
      a: "Yes! We offer express crate shipping to all major pincodes across India. Vehicles arrive pre-assembled in heavy-duty protective packaging.",
    },
    {
      q: "What warranty coverage is included with my purchase?",
      a: "All ToySquad electric ride-ons include a 1-Year Manufacturer Warranty covering motors, battery, motherboard wiring, and the parent remote controller, with doorstep service support.",
    },
  ];

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#0F172A] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* ========================================================================= */}
      {/* SECTION 01 — BRAND / INTRODUCTION                                         */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Text & Feature Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Redefining Kids Electric Mobility
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Redefining Electric Play <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200 bg-clip-text text-transparent">
                For Young Explorers.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              ToySquad crafts premium electric ride-on vehicles engineered with real steel sub-frames, official automotive licensing, dual high-torque motors, and complete parental remote safety control.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-200">Safe for Kids</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Radio className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-200">Parent Remote</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Gauge className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-200">Realistic Design</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-slate-200">Premium Build</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Cutout Product Image with Ground Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-indigo-900/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 w-full bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm text-center">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-4">
                <img
                  src="/frames/horizontal/ezgif-frame-050.jpg"
                  alt="ToySquad Premium Electric Ride-On"
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                <span className="text-blue-400 font-bold">MERCEDES-BENZ UNIMOG 4WD</span>
                <span className="text-white font-bold">₹41,999 INR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW: CAR ASSEMBLY & ENGINEERING GUIDE (MATCHING REFERENCE DESIGN)         */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
            // PRECISION CAR ASSEMBLY
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Engineered for Simple, Tool-Free Parent Assembly
          </h3>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Pre-wired steel sub-frame and quick-connect terminals mean your child's electric vehicle is unboxed and ready for the trail in under 25 minutes.
          </p>
        </div>

        {/* Top 4-Column Step Card Grid (Mirrored from Reference) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-950 mb-5 overflow-hidden border border-slate-800/80 p-2 flex items-center justify-center">
                <img src="/frames/horizontal/ezgif-frame-005.jpg" alt="Unbox and Steel Subframe" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">01 / Unbox & Inspect Frame</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                The heavy-duty tubular steel sub-frame comes 85% pre-assembled straight out of the protective shipping crate.
              </p>
            </div>
            <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer">
              Step 01 Details
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-950 mb-5 overflow-hidden border border-slate-800/80 p-2 flex items-center justify-center">
                <img src="/frames/horizontal/ezgif-frame-018.jpg" alt="Mount EVA Tires" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">02 / Mount Heavy EVA Tires</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Slide the 14" puncture-proof EVA rubber tires onto front and rear steel axles, securing with quick-lock cotter pins.
              </p>
            </div>
            <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer">
              Step 02 Details
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-950 mb-5 overflow-hidden border border-slate-800/80 p-2 flex items-center justify-center">
                <img src="/frames/horizontal/ezgif-frame-032.jpg" alt="Connect 24V Battery Harness" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">03 / Connect 24V Battery</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Plug the color-coded quick-connect terminals under the dual leatherette seat into the sealed 24V battery unit.
              </p>
            </div>
            <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer">
              Step 03 Details
            </button>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all shadow-xl">
            <div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-950 mb-5 overflow-hidden border border-slate-800/80 p-2 flex items-center justify-center">
                <img src="/frames/horizontal/ezgif-frame-048.jpg" alt="Pair Parent Remote Controller" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">04 / Pair Parent Remote</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Hold the sync button on the 2.4G parent remote for 3 seconds until the blue LED locks. Ready for ignition!
              </p>
            </div>
            <button className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer">
              Step 04 Details
            </button>
          </motion.div>
        </motion.div>

        {/* Middle Alternating Detailed Feature Rows (Mirrored from Reference) */}
        <div className="space-y-16">
          {/* Row 1: Chassis & Motor Engineering */}
          <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
              <img src="/frames/horizontal/ezgif-frame-015.jpg" alt="Pre-wired Steel Subframe" className="w-full h-full object-contain" />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
                // HEAVY-DUTY SUB-FRAME
              </span>
              <h4 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Pre-Wired Tubular Steel Chassis & Twin Motors
              </h4>
              <p className="text-sm md:text-base text-slate-300/80 leading-relaxed">
                Every ToySquad electric vehicle arrives with main drive gearboxes and steering linkages pre-torqued from the factory. Parents never need to handle complex internal wiring or motor mounts.
              </p>

              <ul className="space-y-2.5 text-xs md:text-sm font-mono text-slate-300">
                <li className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4" /> <span>Factory-torqued motor & gearbox mounting bolts</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4" /> <span>Color-coded error-proof wiring harness terminals</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4" /> <span>Quick-lock stainless steel axle retention pins</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2: Electronics & Remote Pairing */}
          <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
                // 3-MINUTE REMOTE PAIRING
              </span>
              <h4 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Seamless Electrical Harness & 2.4G Remote Sync
              </h4>
              <p className="text-sm md:text-base text-slate-300/80 leading-relaxed">
                Plug in the 24V battery terminal, snap on the steering wheel, and sync the parent remote controller. The entire electrical system is protected by automatic thermal circuit breakers.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer">
                  <span>View Step-by-Step Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs font-mono uppercase tracking-wider border border-slate-700 flex items-center gap-2 cursor-pointer">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Download Assembly PDF 📄</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-4">
              <img src="/frames/horizontal/ezgif-frame-035.jpg" alt="Electrical Harness and Parent Remote" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — OUR COLLECTION                                               */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-2">
              // CURATED CATALOGUE
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Our Electric Vehicle Collection
            </h3>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Engineered with high-capacity batteries, parental remote safety overrides, and authentic detailing.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {collectionProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 shadow-xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Badge & Image */}
                <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-950 mb-6 flex items-center justify-center p-3 overflow-hidden">
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Rating & Title */}
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono mb-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewsCount} reviews)</span>
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-400 mb-4">{product.tagline}</p>

                {/* Specs List */}
                <div className="space-y-2 py-3 border-y border-slate-800/80 text-xs font-mono text-slate-300 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-500">AGE:</span>
                    <span className="font-bold text-white">{product.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">BATTERY:</span>
                    <span className="text-slate-300">{product.voltage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">SPEED:</span>
                    <span className="text-blue-400 font-bold">{product.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">REMOTE:</span>
                    <span className="text-emerald-400 font-bold">2.4G Included</span>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-mono text-2xl font-black text-white">
                    {product.price}
                  </span>
                  <span className="font-mono text-xs text-slate-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer">
                    <Eye className="w-3.5 h-3.5" /> Details
                  </button>
                  <button className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-lg cursor-pointer">
                    <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — WHY CHOOSE US                                                */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 bg-slate-950/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
              // PEACE OF MIND FOR PARENTS
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Why Parents Trust ToySquad
            </h3>
            <p className="text-slate-400 text-base">
              Engineered with uncompromised safety standards, premium long-lasting materials, and dedicated India customer support.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20 w-fit mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Child Safety Certified</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Constructed with non-toxic, lead-free materials and fitted with 5-point safety seatbelts and automatic soft-brake functions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 w-fit mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Parent Remote Control</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                2.4G remote controller gives parents complete override authority—allowing steering, speed adjustments, and instant emergency stop.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 w-fit mb-6">
                <Battery className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Extended Battery Runtime</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Heavy-duty rechargeable 12V and 24V battery packs deliver up to 90 minutes of continuous trail adventure per charge.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-amber-600/10 text-amber-400 border border-amber-500/20 w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Comfortable Dual Seating</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Spacious leatherette seats designed for growing kids, offering ample legroom and ergonomic posture support.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-purple-600/10 text-purple-400 border border-purple-500/20 w-fit mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Durable Construction</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Reinforced steel chassis sub-frames and puncture-proof EVA rubber wheels designed to handle lawn, dirt, and gravel.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <div className="p-3.5 rounded-2xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 w-fit mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">1-Year Warranty & Support</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every vehicle includes 1-year warranty coverage on motors and electronics with fast doorstep spare parts support across India.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — AGE / PRODUCT GUIDE                                          */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            // FIND THE RIGHT MATCH
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Age & Model Selection Guide
          </h3>
          <p className="text-slate-400 text-base">
            Select your child's age group below to view recommended speed limits, motor specs, and recommended vehicle models.
          </p>
        </div>

        {/* Age Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {["1-3", "3-5", "5-7", "7+"].map((ageKey) => (
            <button
              key={ageKey}
              onClick={() => setSelectedAgeTab(ageKey)}
              className={`px-6 py-3 rounded-2xl font-mono text-sm font-bold transition-all cursor-pointer ${
                selectedAgeTab === ageKey
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {ageKey === "7+" ? "Ages 7+ Yrs" : `Ages ${ageKey} Yrs`}
            </button>
          ))}
        </div>

        {/* Active Age Content Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950 text-blue-400 border border-blue-500/30">
                RECOMMENDED SPECIFICATION
              </span>
              <h4 className="text-2xl font-bold text-white">
                {ageGuides[selectedAgeTab].title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {ageGuides[selectedAgeTab].description}
              </p>
            </div>

            <div className="space-y-3 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">VOLTAGE:</span>
                <span className="font-bold text-white">{ageGuides[selectedAgeTab].recommendedVoltage}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">MAX SPEED:</span>
                <span className="font-bold text-blue-400">{ageGuides[selectedAgeTab].maxSpeed}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">SAFETY:</span>
                <span className="font-bold text-emerald-400">{ageGuides[selectedAgeTab].safetyFeature}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500">TOP PICK:</span>
                <span className="font-bold text-amber-400">{ageGuides[selectedAgeTab].recommendedModel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — HOW IT WORKS                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-2">
            // EASY 4-STEP PROCESS
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How It Works
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="font-mono text-3xl font-black text-blue-500 block mb-4">
                01
              </span>
              <h4 className="text-xl font-bold text-white mb-2">Choose Your Car</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Browse our curated collection of 12V and 24V models by age, voltage, and terrain needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="font-mono text-3xl font-black text-blue-500 block mb-4">
                02
              </span>
              <h4 className="text-xl font-bold text-white mb-2">Place Your Order</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enjoy transparent pricing in INR with zero hidden fees. Checkout via secure UPI or Credit Card.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="font-mono text-3xl font-black text-blue-500 block mb-4">
                03
              </span>
              <h4 className="text-xl font-bold text-white mb-2">Fast Express Delivery</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your pre-assembled vehicle is dispatched in heavy crate packaging directly to your doorstep.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="font-mono text-3xl font-black text-blue-500 block mb-4">
                04
              </span>
              <h4 className="text-xl font-bold text-white mb-2">Enjoy The Ride</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Plug the battery, pair the parent remote control in 3 seconds, and start exploring!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — TRUST / BENEFITS STRIP                                      */}
      {/* ========================================================================= */}
      <section className="py-12 px-6 bg-blue-950/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center font-mono text-xs font-bold text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>QUALITY CHECKED</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>NON-TOXIC SAFE MATERIALS</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-400" />
            <span>FAST DELIVERY ACROSS INDIA</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>1-YEAR WARRANTY</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span>SECURE PAYMENT</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — FEATURED CAR SHOWCASE                                        */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold uppercase">
                FLAGSHIP SHOWCASE
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Mercedes-Benz Unimog 4WD
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Featuring dual 200W high-torque motors, 24V SLA battery pack, 14" EVA all-terrain tires, and complete 2.4G parent remote safety control.
              </p>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-800 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block">PEAK OUTPUT:</span>
                  <span className="font-bold text-white text-sm">400W Dual Motor</span>
                </div>
                <div>
                  <span className="text-slate-500 block">TOP SPEED:</span>
                  <span className="font-bold text-blue-400 text-sm">8.0 km/h</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="font-mono text-3xl font-black text-white">
                  ₹41,999 <span className="text-xs text-slate-500 font-normal">INR</span>
                </div>
                <button className="py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg flex items-center gap-2 cursor-pointer">
                  <span>Order Unimog 4WD</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 p-4 border border-slate-800 flex items-center justify-center">
                <img
                  src="/frames/horizontal/ezgif-frame-048.jpg"
                  alt="Mercedes Unimog Showcase"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — CUSTOMER REVIEWS                                             */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            // VERIFIED FEEDBACK
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Loved by Parents Across India
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "The 24V Unimog 4WD is astonishing. My 5-year-old drives it on our lawn easily, and the parent remote override gives me complete peace of mind."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold text-xs flex items-center justify-center border border-blue-500/30">
                VS
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Vikram Sharma</h5>
                <span className="text-xs text-slate-500 font-mono">Bought Mercedes Unimog 4WD</span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "Delivery was super fast to Bengaluru. Setup took less than 20 minutes. Battery lasts over 80 minutes of continuous driving."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                AM
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Ananya Mehta</h5>
                <span className="text-xs text-slate-500 font-mono">Bought Expedition Jeep</span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "Solid build quality! Rubber EVA tires are silent compared to plastic wheels. Highly recommended for any parent wanting a top-quality car."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 text-purple-400 font-bold text-xs flex items-center justify-center border border-purple-500/30">
                RP
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Rohan Patel</h5>
                <span className="text-xs text-slate-500 font-mono">Bought GT Convertible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — FAQ (ACCORDION INTERACTION)                                  */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto border-b border-slate-800/80">
        <div className="mb-16 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            // FREQUENTLY ASKED QUESTIONS
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Got Questions? We Have Answers.
          </h3>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-200 hover:text-white cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — FINAL CTA                                                   */}
      {/* ========================================================================= */}
      <section className="py-28 md:py-36 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
              // READY FOR THE TRAIL
            </span>
            <h3 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Find Their First Ride.
            </h3>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Choose a kids electric car engineered for maximum fun, comfort, and ultimate parental peace of mind.
            </p>

            <div className="pt-4">
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200 inline-flex items-center gap-3 cursor-pointer">
                <span>Explore Our Cars</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnimogProductContent;
