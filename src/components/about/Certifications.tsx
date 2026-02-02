
import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Awards & Certifications</h2>
                <p className="text-muted mb-12">Recognized for our commitment to quality and security.</p>

                <div className="flex flex-wrap justify-center gap-8">
                    {[1, 2, 3, 4].map((cert) => (
                        <div key={cert} className="bg-background p-8 rounded-2xl flex flex-col items-center border border-white/5 w-64">
                            <div className="text-primary mb-4 p-4 bg-surface rounded-full">
                                {cert % 2 === 0 ? <Award size={32} /> : <ShieldCheck size={32} />}
                            </div>
                            <h3 className="text-white font-bold mb-2">ISO 9001:2015</h3>
                            <p className="text-sm text-muted">Quality Management</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
