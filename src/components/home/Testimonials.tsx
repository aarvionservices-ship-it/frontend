
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Aarvion Services completely transformed our business operations. Their team is professional, skilled, and incredibly responsive.",
        author: "Jane Doe",
        position: "CEO, TechStart"
    },
    {
        quote: "The web application they built for us has streamlined our operations and increased efficiency by 40%. Highly recommended!",
        author: "John Smith",
        position: "Director, BuildCorp"
    },
    {
        quote: "Outstanding service and design. They understood our brand vision perfectly and delivered beyond our expectations.",
        author: "Sarah Johnson",
        position: "Marketing Lead, CreativeCo"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-16">Client Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testim, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl relative border border-border hover:border-primary/20 transition-all">
                            <Quote className="text-primary opacity-20 absolute top-6 right-6" size={40} />
                            <p className="text-text-muted mb-6 italic relative z-10">"{testim.quote}"</p>
                            <div>
                                <h4 className="text-text font-semibold">{testim.author}</h4>
                                <span className="text-sm text-text-muted">{testim.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
