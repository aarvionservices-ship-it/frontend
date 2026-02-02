
import React from 'react';

const steps = [
    { number: '01', title: 'Discovery', description: 'We analyze your requirements and goals.' },
    { number: '02', title: 'Planning', description: 'We create a strategic roadmap and design.' },
    { number: '03', title: 'Development', description: 'Our experts build your solution.' },
    { number: '04', title: 'Launch', description: 'We deploy and optimize for performance.' },
];

const Process: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase">How We Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Our Workflow</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 pt-12 border-t border-gray-800 hover:border-primary transition-colors duration-300 group">
                            <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                            <p className="text-muted relative z-10">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
