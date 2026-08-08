"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, Volume2, VolumeX } from "lucide-react";

const TOTAL_FRAMES = 50;

const ToyCarScroll = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);

    // Audio Context & State Refs
    const audioCtxRef = useRef(null);
    const lastFrameRef = useRef(-1);
    const startSoundPlayedRef = useRef(false);
    const lastScrollTimeRef = useRef(Date.now());
    const lastScrollYRef = useRef(0);

    // Scroll progress from 0 to 1 over container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index 0 .. 49
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Initialize Web Audio Context on user gesture
    const getAudioContext = useCallback(() => {
        if (!audioCtxRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtxRef.current = new AudioContext();
            }
        }
        if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    }, []);

    // Car Assembly Sound Effect (played on scroll frame steps)
    const playAssemblySound = useCallback((frameIdx, velocity) => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        try {
            const now = ctx.currentTime;

            // 1. Heavy Metallic Part Snap & Lock
            const snapOsc = ctx.createOscillator();
            const snapGain = ctx.createGain();
            snapOsc.type = frameIdx % 3 === 0 ? "sawtooth" : "square";
            snapOsc.frequency.setValueAtTime(320 + (frameIdx * 15), now);
            snapOsc.frequency.exponentialRampToValueAtTime(60, now + 0.04);

            snapGain.gain.setValueAtTime(0.14, now);
            snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

            snapOsc.connect(snapGain);
            snapGain.connect(ctx.destination);
            snapOsc.start(now);
            snapOsc.stop(now + 0.04);

            // 2. Power Tool / Impact Drill Whir (layered on every 4th frame or fast scroll)
            if (frameIdx % 4 === 0 || velocity > 1.5) {
                const drillOsc = ctx.createOscillator();
                const drillGain = ctx.createGain();
                drillOsc.type = "sawtooth";
                drillOsc.frequency.setValueAtTime(800 + Math.random() * 200, now);
                drillOsc.frequency.linearRampToValueAtTime(1400, now + 0.06);

                drillGain.gain.setValueAtTime(0.08, now);
                drillGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

                drillOsc.connect(drillGain);
                drillGain.connect(ctx.destination);
                drillOsc.start(now);
                drillOsc.stop(now + 0.06);
            }
        } catch (e) {}
    }, [isMuted, getAudioContext]);

    // Car Starting Sound Effect (Ignition Crank + Engine Rev + Horn)
    const playCarStartSound = useCallback(() => {
        if (isMuted) return;
        const ctx = getAudioContext();
        if (!ctx) return;

        try {
            const now = ctx.currentTime;

            // Step 1: Starter Crank (Cranks the engine)
            const starterOsc = ctx.createOscillator();
            const starterGain = ctx.createGain();
            starterOsc.type = "sawtooth";
            starterOsc.frequency.setValueAtTime(50, now);
            starterOsc.frequency.linearRampToValueAtTime(120, now + 0.25);

            const lfo = ctx.createOscillator();
            const lfoGain = ctx.createGain();
            lfo.frequency.value = 16;
            lfoGain.gain.value = 40;
            lfo.connect(starterOsc.frequency);
            lfo.start(now);
            lfo.stop(now + 0.25);

            starterGain.gain.setValueAtTime(0.12, now);
            starterGain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

            starterOsc.connect(starterGain);
            starterGain.connect(ctx.destination);
            starterOsc.start(now);
            starterOsc.stop(now + 0.25);

            // Step 2: Engine Rev Rumble
            const revTime = now + 0.25;
            const engineOsc1 = ctx.createOscillator();
            const engineOsc2 = ctx.createOscillator();
            const engineGain = ctx.createGain();

            engineOsc1.type = "sawtooth";
            engineOsc2.type = "square";

            engineOsc1.frequency.setValueAtTime(90, revTime);
            engineOsc1.frequency.exponentialRampToValueAtTime(360, revTime + 0.4);
            engineOsc1.frequency.exponentialRampToValueAtTime(160, revTime + 0.9);

            engineOsc2.frequency.setValueAtTime(45, revTime);
            engineOsc2.frequency.exponentialRampToValueAtTime(180, revTime + 0.4);
            engineOsc2.frequency.exponentialRampToValueAtTime(80, revTime + 0.9);

            engineGain.gain.setValueAtTime(0.01, revTime);
            engineGain.gain.linearRampToValueAtTime(0.25, revTime + 0.2);
            engineGain.gain.exponentialRampToValueAtTime(0.001, revTime + 0.9);

            engineOsc1.connect(engineGain);
            engineOsc2.connect(engineGain);
            engineGain.connect(ctx.destination);

            engineOsc1.start(revTime);
            engineOsc2.start(revTime);
            engineOsc1.stop(revTime + 0.9);
            engineOsc2.stop(revTime + 0.9);

            // Step 3: Car Horn Honk ("Beep Beep!")
            setTimeout(() => {
                if (isMuted) return;
                try {
                    const hornTime = ctx.currentTime;
                    const hOsc1 = ctx.createOscillator();
                    const hOsc2 = ctx.createOscillator();
                    const hGain = ctx.createGain();

                    hOsc1.type = "triangle";
                    hOsc2.type = "sine";

                    hOsc1.frequency.setValueAtTime(370, hornTime);
                    hOsc2.frequency.setValueAtTime(466, hornTime);

                    hGain.gain.setValueAtTime(0.12, hornTime);
                    hGain.gain.setValueAtTime(0.12, hornTime + 0.12);
                    hGain.gain.exponentialRampToValueAtTime(0.001, hornTime + 0.18);

                    hOsc1.connect(hGain);
                    hOsc2.connect(hGain);
                    hGain.connect(ctx.destination);

                    hOsc1.start(hornTime);
                    hOsc2.start(hornTime);
                    hOsc1.stop(hornTime + 0.18);
                    hOsc2.stop(hornTime + 0.18);
                } catch (e) {}
            }, 850);

        } catch (e) {}
    }, [isMuted, getAudioContext]);

    // Check viewport width (< 768px is mobile)
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile((prev) => (prev !== mobile ? mobile : prev));
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Preload image sequence based on orientation
    useEffect(() => {
        let isSubscribed = true;
        const loadedImages = [];
        let count = 0;
        setIsLoading(true);
        setLoadedCount(0);

        const folder = isMobile ? "vertical" : "horizontal";

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, "0");
            img.src = `/frames/${folder}/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                if (!isSubscribed) return;
                count++;
                setLoadedCount(count);
                if (count === TOTAL_FRAMES) {
                    setIsLoading(false);
                }
            };

            img.onerror = () => {
                if (!isSubscribed) return;
                count++;
                setLoadedCount(count);
                if (count === TOTAL_FRAMES) {
                    setIsLoading(false);
                }
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);

        return () => {
            isSubscribed = false;
        };
    }, [isMobile]);

    // Render frame to canvas
    const renderCanvas = useCallback(
        (index) => {
            const canvas = canvasRef.current;
            if (!canvas || !images.length) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const clampedIndex = Math.min(
                TOTAL_FRAMES - 1,
                Math.max(0, Math.round(index))
            );
            const img = images[clampedIndex];

            if (!img || !img.complete || img.naturalWidth === 0) return;

            // Scroll velocity calculation
            const nowTime = Date.now();
            const dt = Math.max(1, nowTime - lastScrollTimeRef.current);
            const dy = Math.abs(window.scrollY - lastScrollYRef.current);
            const velocity = dy / dt;
            lastScrollTimeRef.current = nowTime;
            lastScrollYRef.current = window.scrollY;

            // Trigger assembly or starting sound effects
            if (clampedIndex !== lastFrameRef.current) {
                playAssemblySound(clampedIndex, velocity);
                lastFrameRef.current = clampedIndex;

                if (clampedIndex >= TOTAL_FRAMES - 2 && !startSoundPlayedRef.current) {
                    playCarStartSound();
                    startSoundPlayedRef.current = true;
                } else if (clampedIndex < TOTAL_FRAMES - 5) {
                    startSoundPlayedRef.current = false;
                }
            }

            const dpr = window.devicePixelRatio || 1;
            const displayWidth = window.innerWidth;
            const displayHeight = window.innerHeight;

            if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
                canvas.width = displayWidth * dpr;
                canvas.height = displayHeight * dpr;
            }

            ctx.save();
            ctx.scale(dpr, dpr);

            // Clean background fill
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, displayWidth, displayHeight);

            // Cover scale calculation
            const scale = Math.max(
                displayWidth / img.naturalWidth,
                displayHeight / img.naturalHeight
            );

            const x = (displayWidth - img.naturalWidth * scale) / 2;
            const y = (displayHeight - img.naturalHeight * scale) / 2;

            ctx.drawImage(
                img,
                0,
                0,
                img.naturalWidth,
                img.naturalHeight,
                x,
                y,
                img.naturalWidth * scale,
                img.naturalHeight * scale
            );

            ctx.restore();
        },
        [images, playAssemblySound, playCarStartSound]
    );

    // Subscribe to scroll updates
    useEffect(() => {
        if (isLoading || !images.length) return;

        let animationFrameId;

        const updateFrame = () => {
            renderCanvas(frameIndex.get());
        };

        updateFrame();

        const unsubscribe = frameIndex.on("change", (latest) => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => renderCanvas(latest));
        });

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(updateFrame);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isLoading, images, frameIndex, renderCanvas]);

    // Fade out scroll hint
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-white text-slate-900 select-none">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Preloader */}
                {isLoading && (
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-500">
                        <div className="w-full max-w-xs px-6 text-center space-y-4">
                            <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-full mb-2">
                                <Sparkles className="w-8 h-8 animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-slate-900">
                                Assembling ToySquad Ride-On
                            </h3>
                            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-200"
                                    style={{ width: `${loadPercentage}%` }}
                                ></div>
                            </div>
                            <p className="text-sm font-medium text-slate-500">
                                Loading frames... {loadPercentage}%
                            </p>
                        </div>
                    </div>
                )}

                {/* HTML5 Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover block"
                />

                {/* Sound Control Toggle */}
                <button
                    onClick={() => {
                        getAudioContext();
                        setIsMuted(!isMuted);
                    }}
                    className="absolute top-24 right-6 z-30 p-3 bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/80 text-slate-700 hover:text-slate-900 transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-semibold cursor-pointer"
                    title={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
                >
                    {isMuted ? (
                        <>
                            <VolumeX className="w-4 h-4 text-slate-400" />
                            <span>Sound Off</span>
                        </>
                    ) : (
                        <>
                            <Volume2 className="w-4 h-4 text-blue-600 animate-pulse" />
                            <span>Sound On</span>
                        </>
                    )}
                </button>

                {/* Scroll Hint */}
                <motion.div
                    style={{ opacity: scrollHintOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none text-slate-400"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Scroll to Assemble</span>
                    <ArrowDown className="w-4 h-4 animate-bounce text-blue-600" />
                </motion.div>
            </div>
        </div>
    );
};

export default ToyCarScroll;
