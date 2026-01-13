import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Journey', href: '#journey' },
        { name: 'Track', href: '#track' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-deep-void/80 backdrop-blur-md border-neon-cyan/20 py-4 shadow-[0_0_20px_rgba(0,209,255,0.1)]'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tighter group transition-colors">
                    AQEEL<span className="text-neon-cyan group-hover:text-electric-violet transition-colors duration-300">.DEV</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-cyan to-electric-violet group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-electric-violet text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(123,44,191,0.5)] transition-all duration-300 transform hover:scale-105">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-neon-cyan transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-deep-void/95 backdrop-blur-xl border-b border-neon-cyan/20 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-neon-cyan text-lg font-medium tracking-wide"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="w-full py-3 bg-gradient-to-r from-neon-cyan to-electric-violet text-white font-bold rounded-lg shadow-lg text-center block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
