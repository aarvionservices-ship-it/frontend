import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TextReveal from '../common/animations/TextReveal';
import FadeIn from '../common/animations/FadeIn';
import ScaleHover from '../common/animations/ScaleHover';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradient/Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
                {/* Abstract shapes or video background could go here */}
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-text mb-6 leading-tight">
                        <TextReveal text="Elevate Your Business with" delay={0.2} className="block mb-2" />
                        <motion.span
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 inline-block"
                        >
                            Professional Solutions
                        </motion.span>
                    </h1>

                    <FadeIn delay={2.0} direction="up">
                        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                            We deliver premium back-office support, financial services, and operational strategies designed to scale your organization efficiently.
                        </p>
                    </FadeIn>

                    <FadeIn delay={2.2} direction="up">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <ScaleHover>
                                <Link to="/contact" className="btn-primary flex items-center group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </ScaleHover>
                            <ScaleHover>
                                <Link to="/services" className="btn-outline">
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
