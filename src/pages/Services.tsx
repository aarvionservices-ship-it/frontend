import React from 'react';
import SEO from '../components/common/SEO';
import { Code, ArrowRight, FileText, TrendingUp, Headphones, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/home/CTA';

const services = [
    {
        id: 'back-office-support',
        icon: <FileText size={40} />,
        title: 'Back Office Support',
        description: 'End-to-end back-office operations: data entry, reconciliation, document processing and record management.',
        features: ['Data Entry', 'Reconciliation', 'Document Processing']
    },
    {
        id: 'financial-services',
        icon: <TrendingUp size={40} />,
        title: 'Financial Services',
        description: 'Loan assistance, insurance processing support, KYC facilitation and liaison with financial institutions.',
        features: ['Loan Assistance', 'Insurance Processing', 'KYC Facilitation']
    },
    {
        id: 'customer-support',
        icon: <Headphones size={40} />,
        title: 'Customer Support',
        description: 'Omni-channel customer support solutions — phone, email, chat and ticketing systems with SLA-driven delivery.',
        features: ['Phone Support', 'Email & Chat', 'Ticketing Systems']
    },
    {
        id: 'admission-help-centre',
        icon: <GraduationCap size={40} />,
        title: 'Admission Help Centre',
        description: 'End-to-end student admission support for universities including application processing, counselling and follow-ups.',
        features: ['Application Processing', 'Counselling', 'University Liaison']
    },
    {
        id: 'it-support-outsourcing',
        icon: <Code size={40} />,
        title: 'IT Support & Outsourcing',
        description: 'Managed IT services, technical support, helpdesk outsourcing, and remote infrastructure management to keep your business running smoothly.',
        features: ['Technical Support', 'Helpdesk Outsourcing', 'Infrastructure Management']
    }
];

const Services: React.FC = () => {
    return (
        <>
            <SEO
                title="Our Services"
                description="Explore our comprehensive range of services including Back Office Support, Financial Services, and IT Outsourcing."
            />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-surface py-20 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="container-custom relative z-10">
                        <span className="text-primary font-bold tracking-wider uppercase mb-4 block">What We Do</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">Our Expertise</h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            We combine technology and creativity to deliver solutions that drive real results.
                        </p>
                    </div>
                </section>

                {/* Services List */}
                <section className="section-padding bg-background">
                    <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="group p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text mb-4">{service.title}</h3>
                                <p className="text-text-muted mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="mb-8 space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-text-muted">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="inline-flex items-center text-text font-semibold hover:text-primary transition-colors group-hover:translate-x-2 duration-300"
                                >
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <CTA />
            </main>
        </>
    );
};

export default Services;
