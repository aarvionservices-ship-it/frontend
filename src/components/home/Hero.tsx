import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TextReveal from '../common/animations/TextReveal';
import FadeIn from '../common/animations/FadeIn';
import ScaleHover from '../common/animations/ScaleHover';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: clientX - left, y: clientY - top });
    };

    return (
        <section
            className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020c1b] text-white"
            onMouseMove={handleMouseMove}
        >
            {/* CSS Grid Background */}
            <div className="absolute inset-0 z-0">
                {/* Base Faint Grid (Always Visible) */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
                />

                {/* Interactive Highlight Layer (Revealed on Hover) */}
                <div
                    className="absolute inset-0 z-10 opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `
                            radial-gradient(circle 2px at 0 0, rgba(56, 189, 248, 0.8) 1px, transparent 0),
                            radial-gradient(circle 2px at 25px 0, rgba(56, 189, 248, 0.8) 1px, transparent 0),
                            radial-gradient(circle 2px at 0 25px, rgba(56, 189, 248, 0.8) 1px, transparent 0),
                            radial-gradient(circle 2px at 25px 25px, rgba(56, 189, 248, 0.8) 1px, transparent 0)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                        WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                    }}
                >
                    {/* Interior cross-hatch pattern for texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                {/* Subtle Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-[#020c1b]/80" />

                {/* Glowing Orbs for "Cybersecurity/Tech" vibe */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                        <TextReveal text="Elevate Your Business with" delay={0.2} className="block mb-2 text-slate-200" />
                        <motion.span
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block"
                        >
                            Professional IT Solutions
                        </motion.span>
                    </h1>

                    <FadeIn delay={2.0} direction="up">
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            We deliver practical IT solutions and ongoing support to keep your systems reliable, efficient, and ready to grow.
                        </p>
                    </FadeIn>

                    <FadeIn delay={2.2} direction="up">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ScaleHover>
                                <Link to="/contact" className="px-8 py-3 rounded-full font-semibold transition-all duration-200 bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </ScaleHover>
                            <ScaleHover>
                                <Link to="/services" className="px-8 py-3 rounded-full font-semibold transition-all duration-200 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                                    Explore Services
                                </Link>
                            </ScaleHover>
                        </div>
                    </FadeIn>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
