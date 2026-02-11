
import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import AboutPreview from '../components/home/AboutPreview';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Aarvion Services delivers top-tier Back Office Support, Financial Services, and IT Outsourcing solutions to transform your business operations."
            />

            <main>
                <Hero />
                <AboutPreview />
                {/* <Clients /> */}
                <ServicesGrid />
                {/* <Testimonials /> */}
                <CTA />
            </main>
        </>
    );
};

export default Home;
