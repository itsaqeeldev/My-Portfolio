
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Database, Smartphone, Globe, Layers, Box, Brain, Github, Flame, Cloud, Send } from 'lucide-react';

const skills = [
    {
        category: "Development Skills",
        items: [
            { name: "Kotlin", icon: <Code2 />, level: 95 },
            { name: "Java", icon: <Code2 />, level: 90 },
            { name: "Flutter", icon: <Smartphone />, level: 92 },
            { name: "MVVM Architecture", icon: <Layers />, level: 88 },
            { name: "Jetpack Components", icon: <Box />, level: 85 },
            { name: "TensorFlow Lite", icon: <Brain />, level: 80 },
            { name: "Room / SQLite", icon: <Database />, level: 90 },
            { name: "Clean Architecture", icon: <Layers />, level: 88 }
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "GitHub", icon: <Github />, level: 95 },
            { name: "Firebase Suite", icon: <Flame />, level: 90 },
            { name: "Firestore", icon: <Database />, level: 88 },
            { name: "Cloud Functions", icon: <Cloud />, level: 85 },
            { name: "Figma", icon: <PenTool />, level: 80 },
            { name: "UI/UX Foundations", icon: <PenTool />, level: 75 },
            { name: "Postman", icon: <Send />, level: 90 },
            { name: "REST APIs", icon: <Globe />, level: 92 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-deep-void relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-electric-violet/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-violet">Arsenal</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">The tools and technologies I use to bring ambitious ideas to life.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative group"
                        >
                            {/* Animated Border Gradient */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-cyan via-electric-violet to-neon-cyan rounded-2xl opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-xy" />

                            <div className="relative h-full bg-deep-navy/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                                    {idx === 0 ? <Code2 size={120} /> : <Database size={120} />}
                                </div>

                                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3 relative z-10">
                                    {idx === 0 ? <Code2 className="text-neon-cyan" /> : <Database className="text-electric-violet" />}
                                    {category.category}
                                </h3>

                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {category.items.map((skill, sIdx) => (
                                        <div key={sIdx} className="group/item flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-300">
                                            {React.cloneElement(skill.icon as React.ReactElement<any>, { className: "w-5 h-5 text-gray-500 group-hover/item:text-neon-cyan transition-colors" })}
                                            <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
