
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Users, Zap, Target } from 'lucide-react';

const Journey = () => {
    const experiences = [
        {
            year: '2024 - Present',
            title: 'Independent Mobile Engineer',
            description: [
                "3 production apps shipped with 10k+ combined installs",
                "Architected offline-first sync solutions using Room + Firestore",
                "Achieved 99% crash-free builds across all releases",
                "Implemented CI/CD pipelines with automated testing"
            ],
            icon: <Rocket className="w-6 h-6 text-neon-cyan" />,
            side: 'left'
        },
        {
            year: '2023',
            title: 'Mobile App Developer Intern',
            description: [
                "Developed Android features using Kotlin, MVVM, and Jetpack.",
                "Implemented and tested Room database modules for reliable offline handling.",
                "Integrated and debugged REST APIs and Firebase services.",
                "Fixed bugs, improved code quality, and optimized UI behavior."
            ],
            icon: <Briefcase className="w-6 h-6 text-electric-violet" />,
            side: 'right'
        },
        {
            year: '2022 - 2026',
            title: 'BS Software Engineering',
            description: [
                "University of Sargodha",
                "Focused on software architecture, algorithms, and mobile computing.",
                "Integrated Machine Learning into mobile applications.",
                "Active member of the university tech society."
            ],
            icon: <GraduationCap className="w-6 h-6 text-neon-cyan" />,
            side: 'left'
        }
    ];

    const metrics = [
        {
            value: '3+',
            label: 'Production Apps',
            icon: <Rocket className="w-5 h-5 text-neon-cyan" />,
            color: 'from-neon-cyan/20 to-blue-500/20'
        },
        {
            value: '10k+',
            label: 'App Installs',
            icon: <Users className="w-5 h-5 text-electric-violet" />,
            color: 'from-electric-violet/20 to-purple-500/20'
        },
        {
            value: '40-60%',
            label: 'Performance Gains',
            icon: <Zap className="w-5 h-5 text-neon-cyan" />,
            color: 'from-neon-cyan/20 to-blue-500/20'
        },
        {
            value: '99%',
            label: 'Crash Free Releases',
            icon: <Target className="w-5 h-5 text-electric-violet" />,
            color: 'from-electric-violet/20 to-purple-500/20'
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden" id="journey">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-violet/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            My Journey
                        </span>
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-cyan to-electric-violet rounded-full blur-sm" />
                </motion.div>

                {/* Timeline */}
                <div className="relative mb-24">
                    {/* Center Line */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent blur-[1px]" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: exp.side === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`flex items-center justify-between w-full flex-row ${exp.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="w-full md:w-5/12 ml-16 md:ml-0 order-2 md:order-none group">
                                    <div className="relative p-6 bg-deep-navy/40 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] group-hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-electric-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-sm font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded">
                                                    {exp.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 ml-1">{exp.title}</h3>
                                            <ul className="list-disc list-outside ml-4 text-gray-400 text-sm leading-relaxed space-y-1">
                                                {exp.description.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-deep-void border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,209,255,0.3)] shrink-0 order-1 md:order-none left-0 md:left-auto">
                                    <div className="absolute inset-0 bg-neon-cyan/20 rounded-full animate-ping opacity-20" />
                                    {exp.icon}
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Metrics Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                    id="track"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            Track Record
                        </span>
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-electric-violet to-neon-cyan rounded-full blur-sm" />
                </motion.div>

                {/* Metrics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-deep-navy/30 backdrop-blur-md border border-white/5 rounded-xl hover:bg-deep-navy/50 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-3 p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-white/10">
                                    {metric.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80">
                                    {metric.value}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium">{metric.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
