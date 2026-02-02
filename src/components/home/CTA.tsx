
import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container-custom relative z-10 text-center text-secondary">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Ready to Start Your Project?</h2>
                <p className="text-xl mb-10 text-gray-900 max-w-2xl mx-auto font-medium">
                    Let's collaborate to build something amazing. Our team is ready to turn your vision into reality.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-xl"
                >
                    Get in Touch Today
                </Link>
            </div>
        </section>
    );
};

export default CTA;
