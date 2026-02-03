import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    delay?: number;
    className?: string;
    mode?: 'word' | 'char';
}

const TextReveal: React.FC<TextRevealProps> = ({
    text,
    delay = 0,
    className = "",
    mode = 'word'
}) => {
    const items = mode === 'word' ? text.split(" ") : text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: mode === 'word' ? 0.05 : 0.02,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(5px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9] as const,
            },
        },
    };

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={`inline-block ${className}`}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={itemVariants}
                    className="inline-block mr-[0.2em] last:mr-0"
                >
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
