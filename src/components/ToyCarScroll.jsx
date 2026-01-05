"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const FRAME_COUNT = 40;

const ToyCarScroll = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index (0-39)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload all images
    useEffect(() => {
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/toycar-frames/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImagesLoaded(true);
                }
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, []);

    // Render frame on canvas
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index) => {
            const img = images[index];
            if (img && img.complete) {
                // Set canvas size to match window
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate scaling to cover the screen (object-cover equivalent)
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                // Draw image centered
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        // Render initial frame immediately
        renderFrame(0);

        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(Math.round(latest));
        });

        // Handle resize
        const handleResize = () => renderFrame(Math.round(frameIndex.get()));
        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [frameIndex, images, imagesLoaded]);

    // Text opacity based on scroll progress
    const introOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const feature1Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const feature2Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
    const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[400vh] md:h-[400vh] bg-[#F7F8FA]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!imagesLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#F7F8FA]">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                            <p className="text-slate-600 font-medium">Loading experience...</p>
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Text Overlays */}

                {/* Intro - 0% */}
                <motion.div
                    style={{ opacity: introOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
                >
                    <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-slate-900 mb-4"
                        >
                            Adventure Awaits
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-xl md:text-2xl text-slate-800 max-w-2xl font-bold"
                        >
                            Discover the ultimate electric ride-on jeep for young explorers
                        </motion.p>
                    </div>
                </motion.div>

                {/* Feature 1 - 30% */}
                <motion.div
                    style={{ opacity: feature1Opacity }}
                    className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-lg pointer-events-none"
                >
                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white/50">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
                            Built for Adventure
                        </h2>
                        <p className="text-lg md:text-xl text-slate-800 font-bold">
                            Rugged tires, powerful motor, and authentic off-road design
                        </p>
                    </div>
                </motion.div>

                {/* Feature 2 - 60% */}
                <motion.div
                    style={{ opacity: feature2Opacity }}
                    className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 max-w-lg text-right pointer-events-none"
                >
                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white/50 ml-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">
                            Safe & Fun
                        </h2>
                        <p className="text-lg md:text-xl text-slate-800 font-bold">
                            Parent remote control, safety belt, and smooth speed control
                        </p>
                    </div>
                </motion.div>

                {/* CTA - 90% */}
                <motion.div
                    style={{ opacity: ctaOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <div className="p-10 rounded-3xl shadow-sm">
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
                            Ready to Roll?
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-xl pointer-events-auto mx-auto"
                        >
                            <ShoppingCart className="w-7 h-7" />
                            <span>Shop Now</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ToyCarScroll;
