
import React from 'react';
import { Briefcase, ShoppingCart, Activity, BookOpen, Building2, Truck } from 'lucide-react';

const industries = [
    { icon: <Briefcase size={28} />, name: 'Corporate & Finance' },
    { icon: <ShoppingCart size={28} />, name: 'E-Commerce' },
    { icon: <Activity size={28} />, name: 'Healthcare' },
    { icon: <BookOpen size={28} />, name: 'Education' },
    { icon: <Building2 size={28} />, name: 'Real Estate' },
    { icon: <Truck size={28} />, name: 'Logistics' },
];

const Industries: React.FC = () => {
    return (
        <section className="py-20 bg-surface">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Industries We Serve</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Our expertise spans across diverse sectors, delivering tailored solutions that meet specific industry standards and challenges.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-background rounded-xl border border-border flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-muted mb-4 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                {industry.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-text-muted group-hover:text-text transition-colors">{industry.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
