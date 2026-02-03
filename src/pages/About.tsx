
import React from 'react';
import SEO from '../components/common/SEO';
import Introduction from '../components/about/Introduction';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import Leadership from '../components/about/Leadership';
import Timeline from '../components/about/Timeline';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const About: React.FC = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about Aarvion Services, our mission, vision, and the team dedicated to your operational success."
            />

            <main className="pt-20">
                <div className="bg-surface py-20 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                    <div className="container-custom relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">About Us</h1>
                        <p className="text-xl text-text-muted">Building the future of business services, one partner at a time.</p>
                    </div>
                </div>

                <Introduction />
                <MissionVision />
                <CoreValues />
                <Leadership />
                <Timeline />
                <Testimonials />
                <CTA />
            </main>
        </>
    );
};

export default About;
