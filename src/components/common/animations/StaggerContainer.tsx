import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerDelay?: number;
    delayChildren?: number;
    className?: string;
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({
    children,
    staggerDelay = 0.1,
    delayChildren = 0,
    className = "",
    ...props
}) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = "",
}) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
