import React from 'react';

const FluidBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Top Right Blob */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[100px] mix-blend-screen animate-fade-in opacity-70"></div>

            {/* Bottom Left Blob */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-green/10 blur-[120px] mix-blend-screen animate-fade-in opacity-60"></div>

            {/* Center/Random Blob */}
            <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[90px] mix-blend-screen animate-pulse opacity-50"></div>

            {/* Noise Texture Overlay (Optional for texture) */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
        </div>
    );
};

export default FluidBackground;
