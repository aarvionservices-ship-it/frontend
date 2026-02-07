import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    description?: string;
    image?: string;
    className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    description,
    image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920", // Default corporate/office image
    className = ""
}) => {
    return (
        <section className={`relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Dark Overlay for contrast */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        {description}
                    </motion.p>
                )}
            </div>

            {/* Decorative bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    );
};

export default PageHero;
