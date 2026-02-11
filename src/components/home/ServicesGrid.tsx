import React from 'react';
import { Code, FileText, TrendingUp, Headphones, Users2 } from 'lucide-react';
import StaggerContainer, { StaggerItem } from '../common/animations/StaggerContainer';

const services = [
    {
        icon: <Code size={32} />,
        title: 'IT Support & Outsourcing',
        description: 'Managed IT services, technical support, helpdesk outsourcing, and remote infrastructure management.',
        image: '/office.png'
    },
    {
        icon: <FileText size={32} />,
        title: 'Back Office Support',
        description: 'End-to-end back-office operations: data entry, reconciliation, document processing and record management.',
        image: 'https://plus.unsplash.com/premium_photo-1661573764813-a6ae0ea91e37?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Financial Services',
        description: 'Loan assistance, insurance processing support, KYC facilitation and liaison with financial institutions.',
        image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        icon: <Headphones size={32} />,
        title: 'Customer Support',
        description: 'Omni-channel customer support solutions — phone, email, chat and ticketing systems with SLA-driven delivery.',
        image: 'https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        icon: <Users2 size={32} />,
        title: 'Staffing Options',
        description: 'Recruitment, payroll and HR services for IT, professional and healthcare roles.',
        image: '/office.png'
    },
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

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                    {services.map((service, index) => (
                        <StaggerItem key={index} className="h-[250px]">
                            <div className="group relative h-full w-full overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
                                {/* Background Image with Zoom Effect */}
                                <div className="absolute inset-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/70" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <div className="mb-3 text-primary bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>

                                        {/* Description - Hidden by default, shown on hover */}
                                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-[200px] group-hover:opacity-100 ease-in-out">
                                            <p className="text-gray-200 mt-2 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default ServicesGrid;
