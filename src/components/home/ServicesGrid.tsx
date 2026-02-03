import React from 'react';
import { Code, FileText, TrendingUp, Headphones, GraduationCap } from 'lucide-react';
import StaggerContainer, { StaggerItem } from '../common/animations/StaggerContainer';
import ScaleHover from '../common/animations/ScaleHover';

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
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Expertise</h2>
                    <p className="text-text-muted text-lg">
                        Comprehensive business solutions tailored to meet your unique operational challenges.
                    </p>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
                    {services.map((service, index) => (
                        <StaggerItem key={index} className="h-full">
                            <ScaleHover className="h-full">
                                <div className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                                    <div className="bg-surface w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
                                    <p className="text-text-muted leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </ScaleHover>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default ServicesGrid;
