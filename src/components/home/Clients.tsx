
import React from 'react';

const Clients: React.FC = () => {
    return (
        <section className="py-10 bg-background border-b border-border">
            <div className="container-custom">
                <p className="text-center text-sm text-text-muted mb-6 uppercase tracking-widest">Trusted By</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Replace with actual SVGs or Images */}
                    {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((client, idx) => (
                        <div key={idx} className="text-xl font-bold text-text-muted">{client}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
