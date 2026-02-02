
import React from 'react';
import { Code, FileText, TrendingUp, Headphones, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FileText size={32} />,
        title: 'Back Office Support',
        description: 'End-to-end back-office operations: data entry, reconciliation, document processing and record management.'
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Financial Services',
        description: 'Loan assistance, insurance processing support, KYC facilitation and liaison with financial institutions.'
    },
    {
        icon: <Headphones size={32} />,
        title: 'Customer Support',
        description: 'Omni-channel customer support solutions — phone, email, chat and ticketing systems with SLA-driven delivery.'
    },
    {
        icon: <GraduationCap size={32} />,
        title: 'Admission Help Centre',
        description: 'End-to-end student admission support for universities including application processing, counselling and follow-ups.'
    },
    {
        icon: <Code size={32} />,
        title: 'IT Support & Outsourcing',
        description: 'Managed IT services, technical support, helpdesk outsourcing, and remote infrastructure management.'
    }
];

const ServicesGrid: React.FC = () => {
    return (
        <section className="section-padding bg-surface">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
                    <p className="text-muted text-lg">
                        Comprehensive business solutions tailored to meet your unique operational challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="bg-surface w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
