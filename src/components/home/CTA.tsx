
import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container-custom relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">Ready to Start Your Project?</h2>
                <p className="text-xl mb-10 text-text-muted max-w-2xl mx-auto font-medium">
                    Let's collaborate to build something amazing. Our team is ready to turn your vision into reality.
                </p>
                <Link
                    to="/contact"
                    className="inline-block btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-primary/30"
                >
                    Get in Touch Today
                </Link>
            </div>
        </section>
    );
};

export default CTA;
