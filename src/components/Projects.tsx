
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Sparkles, TrendingUp, CheckSquare, Terminal } from 'lucide-react';

const projects = [
    {
        title: "Silent Link",
        description: "Real-time ASL recognition using TFLite + MediaPipe for bridging communication gaps. Features gesture detection with 95% accuracy and seamless translation.",
        tags: ["Kotlin", "TFLite", "MediaPipe", "CameraX", "OpenCV"],
        color: "from-blue-500 to-purple-600",
        icon: <Smartphone className="w-full h-full text-white/5" />,
        stat: "95% Accuracy"
    },
    {
        title: "Aether",
        description: "AI-powered weather & outfit insights combining real-time weather data with ML recommendations for perfect daily attire choices.",
        tags: ["Kotlin", "MVVM", "Hilt", "ML Kit", "Retrofit"],
        color: "from-neon-cyan to-blue-500",
        icon: <Sparkles className="w-full h-full text-white/5" />,
        stat: "Real-time ML"
    },
    {
        title: "Investment App",
        description: "ROI automation and MLM workflows with Firebase + Room hybrid data architecture for seamless investment tracking and analytics.",
        tags: ["Kotlin", "MVVM", "Room", "Firestore", "Analytics"],
        color: "from-green-400 to-emerald-600",
        icon: <TrendingUp className="w-full h-full text-white/5" />,
        stat: "Auto ROI"
    },
    {
        title: "Smart Task Manager",
        description: "Productivity app with intelligent task automation, reminder systems, analytics dashboard, and beautiful Material Design UI.",
        tags: ["Kotlin", "Jetpack", "WorkManager", "Firebase", "Material"],
        color: "from-electric-violet to-pink-600",
        icon: <CheckSquare className="w-full h-full text-white/5" />,
        stat: "Smart Sync"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-deep-void relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-electric-violet/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                            Deployed
                        </span> <span className="text-neon-cyan">Units</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-transparent rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-electric-violet rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-md" />

                            <div className="relative h-full bg-deep-navy/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1">

                                {/* Background Watermark Icon */}
                                <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-12 group-hover:rotate-0">
                                    {project.icon}
                                </div>

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/50 transition-colors duration-300">
                                        <Terminal className="w-6 h-6 text-gray-400 group-hover:text-neon-cyan" />
                                    </div>
                                    {project.badge ? (
                                        <span className="font-mono text-xs font-bold text-neon-cyan border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/10 animate-pulse">
                                            {project.badge}
                                        </span>
                                    ) : (
                                        <span className="font-mono text-xs text-gray-500 border border-white/5 px-2 py-1 rounded bg-black/20 group-hover:text-neon-cyan group-hover:border-neon-cyan/30 transition-colors">
                                            SYS.VER.{idx + 1}.0
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                                        {project.description}
                                    </p>

                                    {/* Stat Line */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-gradient-to-r group-hover:from-neon-cyan/50 group-hover:to-transparent transition-all" />
                                        <span className="text-xs font-mono text-electric-violet">{project.stat}</span>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm bg-deep-void/50 border border-white/10 text-gray-400 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
