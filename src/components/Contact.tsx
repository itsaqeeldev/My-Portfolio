
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <section id="contact" className="py-24 bg-deep-void relative overflow-hidden">
            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-electric-violet/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="glass-panel p-8 md:p-12 rounded-3xl max-w-5xl mx-auto border border-white/5 bg-deep-navy/30 backdrop-blur-xl"
                >
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-electric-violet">Connect</span></h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Ready to start your next project? I'm currently available for freelance work and full-time opportunities.
                                </p>
                            </div>

                            <a href="mailto:hello@itsaqeel.dev" className="flex items-center gap-4 text-gray-300 hover:text-white group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-neon-cyan/30">
                                <div className="w-12 h-12 rounded-full bg-deep-void flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">hello@itsaqeel.dev</span>
                            </a>

                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, href: "https://github.com/itsaqeeldev" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/itsaqeeldev" },
                                    { Icon: Mail, href: "mailto:hello@itsaqeel.dev" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-12 h-12 rounded-full bg-deep-void border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-electric-violet hover:shadow-[0_0_15px_rgba(123,44,191,0.5)] transition-all duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const subject = `Portfolio Contact from ${formData.name}`;
                            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
                            window.location.href = `mailto:hello@itsaqeel.dev?subject=${encodeURIComponent(subject)}&body=${body}`;
                        }} className="space-y-6">
                            <div className="group">
                                <label className="block text-sm font-mono text-neon-cyan mb-2 pl-2 border-l-2 border-neon-cyan">NAME_INPUT</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all placeholder:text-gray-700 font-mono"
                                    placeholder="Ex: John Doe"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-mono text-electric-violet mb-2 pl-2 border-l-2 border-electric-violet">EMAIL_ADDRESS</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-electric-violet focus:outline-none focus:shadow-[0_0_20px_rgba(123,44,191,0.2)] transition-all placeholder:text-gray-700 font-mono"
                                    placeholder="Ex: john@example.com"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-mono text-gray-400 mb-2 pl-2 border-l-2 border-gray-500 group-focus-within:border-white group-focus-within:text-white transition-colors">MESSAGE_BODY</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all resize-none placeholder:text-gray-700 font-mono"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-neon-cyan to-electric-violet text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                <span>INITIALIZE_TRANSMISSION</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>

                <footer className="text-center mt-20 pb-8 text-gray-600 text-sm font-mono">
                    <p>© {new Date().getFullYear()} Aqeel Abbas. <br className="md:hidden" />System Status: <span className="text-green-500">OPERATIONAL</span></p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
