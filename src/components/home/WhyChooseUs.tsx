
import React from 'react';
import { CheckCircle } from 'lucide-react';
import FadeIn from '../common/animations/FadeIn';
import ScaleHover from '../common/animations/ScaleHover';
import StaggerContainer, { StaggerItem } from '../common/animations/StaggerContainer';

const reasons = [
    "Expert Professional Team",
    "Proven Track Record",
    "Tailored Business Solutions",
    "24/7 Support",
    "Efficient Processes",
    "Competitive Pricing"
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                        Why Choose Aarvion Services?
                    </h2>
                    <p className="text-text-muted text-lg mb-8 leading-relaxed">
                        We don't just provide services; we build partnerships. Our commitment to excellence, integrity, and customer satisfaction sets us apart in the industry.
                    </p>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reasons.map((reason, index) => (
                            <StaggerItem key={index}>
                                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-surface/50 transition-colors">
                                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                    <span className="text-text-muted">{reason}</span>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                    <ScaleHover className="relative" scale={1.02}>
                        <div className="aspect-square bg-surface rounded-2xl overflow-hidden border border-border relative z-10 shadow-2xl">
                            {/* Placeholder for an image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                                <span className="text-text-muted font-bold tracking-widest uppercase">Excellence</span>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl z-0" />
                    </ScaleHover>
                </FadeIn>
            </div>
        </section>
    );
};

export default WhyChooseUs;
