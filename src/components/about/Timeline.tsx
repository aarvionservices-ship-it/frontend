
import React from 'react';
import { Calendar } from 'lucide-react';

const milestones = [
    { year: '2020', title: 'Inception', description: 'Aarvion Services was founded with a small team of 3 developers.' },
    { year: '2021', title: 'First Major Client', description: 'Secured our first enterprise contract with a leading logistics firm.' },
    { year: '2022', title: 'Expansion', description: 'Opened a second office and expanded team to 20+ members.' },
    { year: '2023', title: 'Global Reach', description: 'Started serving clients in the US and Europe.' },
    { year: '2024', title: 'Innovation Award', description: 'Received industry recognition for our custom ERP solutions.' },
];

const Timeline: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
                    <p className="text-muted">A timeline of our growth and achievements.</p>
                </div>

                <div className="relative">
                    {/* Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-5/12" />
                                <div className="z-10 bg-primary rounded-full p-2 mb-4 md:mb-0 box-glow">
                                    <Calendar className="text-black" size={24} />
                                </div>
                                <div className="w-full md:w-5/12 bg-surface p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                                    <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
