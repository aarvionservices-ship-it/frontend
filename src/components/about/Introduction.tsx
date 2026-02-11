
import React from 'react';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
                        Delivering Reliable IT and Business Solutions That Work
                    </h2>
                    <p className="text-text-muted text-lg mb-6 leading-relaxed">
                        Aarvion Services India Pvt. Ltd. is a service-focused organization providing dependable, efficient solutions across technology and business operations. We work closely with companies to simplify processes, strengthen systems, and support day-to-day operations with confidence.
                    </p>
                    <p className="text-text-muted text-lg mb-6 leading-relaxed">
                        The company is led by Ravi Shankar Mishra, Founder & CEO, and Akshay Verma, CTO. Together, they bring strong experience in business operations, IT services, and customer support, ensuring every solution is practical, scalable, and aligned with real business needs.

                        Registered in the Financial District of Hyderabad, Telangana, we work with clients and partners across India. Our core services include IT support and outsourcing, back-office operations, financial and accounting services, customer support operations, and university admission help-centre solutions. Across all areas, our focus remains on reliability, clarity, and long-term value.
                    </p>
                </motion.div>
                <div className="relative">
                    <div className="aspect-video bg-surface rounded-2xl overflow-hidden border border-border relative z-10 box-glow">
                        <div className="absolute inset-0 flex items-center justify-center bg-surface">
                            <img src="team.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
