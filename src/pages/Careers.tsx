
import React from 'react';
import SEO from '../components/common/SEO';
import WhyJoinUs from '../components/careers/WhyJoinUs';
import Openings from '../components/careers/Openings';

import PageHero from '../components/common/PageHero';

const Careers: React.FC = () => {
    return (
        <>
            <SEO
                title="Careers"
                description="Join our team at Aarvion Services and build the future of business operations and support."
            />

            <main>
                <PageHero
                    title="Join Our Team"
                    description="Be part of a culture that empowers you to create, innovate, and grow."
                    image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920"
                />

                <WhyJoinUs />
                <Openings />
            </main>
        </>
    );
};

export default Careers;
