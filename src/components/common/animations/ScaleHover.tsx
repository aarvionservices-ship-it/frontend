import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ScaleHoverProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    scale?: number;
    className?: string;
}

const ScaleHover: React.FC<ScaleHoverProps> = ({
    children,
    scale = 1.05,
    className = "",
    ...props
}) => {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default ScaleHover;
