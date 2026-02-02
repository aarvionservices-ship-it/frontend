
import React from 'react';
import { CheckCircle } from 'lucide-react';

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
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Choose Aarvion Services?
                    </h2>
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                        We don't just provide services; we build partnerships. Our commitment to excellence, integrity, and customer satisfaction sets us apart in the industry.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                <span className="text-gray-300">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-surface rounded-2xl overflow-hidden border border-white/10 relative z-10">
                        {/* Placeholder for an image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                            <span className="text-muted">Image Placeholder</span>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl z-0" />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
