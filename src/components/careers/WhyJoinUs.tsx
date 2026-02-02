
import React from 'react';
import { Smile, Coffee, Zap, Award } from 'lucide-react';

const perks = [
    { icon: <Smile />, title: "Great Culture", desc: "A supportive, inclusive, and fun work environment." },
    { icon: <Coffee />, title: "Work-Life Balance", desc: "Flexible hours and remote work options." },
    { icon: <Zap />, title: "Growth", desc: "Continuous learning and career development opportunities." },
    { icon: <Award />, title: "Recognition", desc: "We value and reward hard work and innovation." }
];

const WhyJoinUs: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Join Aarvion?</h2>
                    <p className="text-muted">More than just a job, it's a place to grow.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perks.map((perk, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-surface border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-primary mb-4 flex justify-center">{perk.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
                            <p className="text-muted">{perk.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;
