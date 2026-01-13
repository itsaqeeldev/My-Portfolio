import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ParticleField } from './ParticleField';
import { ChevronDown, Code, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ["Developer", "Builder", "Innovator"];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="relative w-full bg-deep-void overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <ParticleField />
                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-void/50 to-deep-void z-[2]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-24 lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Interactive Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 bg-deep-navy/40 backdrop-blur-md"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                            </span>
                            <span className="text-neon-cyan font-mono text-sm tracking-wider">SYSTEM ONLINE</span>
                        </motion.div>

                        {/* Main Title with Glitch Effect */}
                        <div className="relative group">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-2"
                            >
                                <span className="inline-block hover:animate-glitch transition-all duration-300">Aqeel</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-violet hover:animate-glitch">Abbas</span>
                            </motion.h1>
                            {/* Decorative line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100px" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="h-1 bg-gradient-to-r from-neon-cyan to-electric-violet"
                            />
                        </div>

                        {/* Dynamic Role Typewriter */}
                        <div className="h-12 overflow-hidden relative">
                            <motion.p
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl md:text-3xl text-gray-400 font-light flex items-center gap-3"
                            >
                                <span className="text-electric-violet">&gt;</span>
                                {roles[roleIndex]}
                                <span className="animate-pulse text-neon-cyan">_</span>
                            </motion.p>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-electric-violet/30 pl-6"
                        >
                            Forging resilient digital experiences with <span className="text-white font-medium">Android</span> and <span className="text-white font-medium">Flutter</span>.
                            Turning complex problems into elegant, high-performance code.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a href="#projects" className="group relative px-8 py-3 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 font-bold group-hover:translate-x-1 transition-transform inline-block">VIEW WORK</span>
                                <div className="absolute inset-0 bg-neon-cyan/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                            </a>
                            <a href="#contact" className="px-8 py-3 border border-white/10 text-white hover:border-electric-violet hover:text-electric-violet transition-colors duration-300">
                                CONTACT_ME
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side - Living Geometric Orb */}
                    <div className="flex items-center justify-center relative perspective-1000 mt-10 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{ duration: 1.2 }}
                            className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                        >
                            {/* Central Core */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-neon-cyan to-electric-violet rounded-full blur-2xl opacity-50 animate-pulse" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black border border-neon-cyan rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(0,209,255,0.3)]">
                                <Code className="w-10 h-10 text-white animate-pulse" />
                            </div>

                            {/* Rotating Rings */}
                            <div className="absolute inset-0 rounded-full border border-neon-cyan/20 animate-spin-slow" style={{ borderStyle: 'dashed' }} />
                            <div className="absolute inset-12 rounded-full border border-electric-violet/20 animate-spin-reverse-slow" style={{ borderStyle: 'dotted', borderWidth: '2px' }} />
                            <div className="absolute inset-24 rounded-full border border-white/10 animate-spin-slow duration-[15s]" />

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-20 bg-deep-navy/80 p-3 rounded-lg border border-neon-cyan/30 backdrop-blur"
                            >
                                <Terminal className="w-6 h-6 text-neon-cyan" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-10 bg-deep-navy/80 p-3 rounded-lg border border-electric-violet/30 backdrop-blur"
                            >
                                <Cpu className="w-6 h-6 text-electric-violet" />
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs tracking-[0.2em] font-light">SCROLL</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>
        </section>
    );
};

export default Hero;
