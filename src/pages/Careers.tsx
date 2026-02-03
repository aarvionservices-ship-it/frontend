
import React from 'react';
import SEO from '../components/common/SEO';
import WhyJoinUs from '../components/careers/WhyJoinUs';
import Openings from '../components/careers/Openings';

const Careers: React.FC = () => {
    return (
        <>
            <SEO
                title="Careers"
                description="Join our team at Aarvion Services and build the future of business operations and support."
            />

            <main className="pt-20">
                <div className="bg-surface py-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                    <div className="container-custom relative z-10">
                        <span className="text-primary font-bold uppercase tracking-wider mb-2 block">We Are Hiring</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">Join Our Team</h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            Be part of a culture that empowers you to create, innovate, and grow.
                        </p>
                    </div>
                </div>

                <WhyJoinUs />
                <Openings />
            </main>
        </>
    );
};

export default Careers;
