
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import CTA from '../components/home/CTA';

const serviceData: Record<string, any> = {
    'it-support-outsourcing': {
        title: 'IT Support & Outsourcing',
        description: 'Empower your business with top-tier IT support and outsourcing solutions. We manage your infrastructure and provide technical expertise for development and security.',
        features: ['Managed IT Services', 'Technical Support', 'Helpdesk Outsourcing', 'Remote Infrastructure Management', 'Cybersecurity'],
        benefits: ['Access to Global Talent', 'Technology Optimization', 'Secure Infrastructure'],
        process: ['Requirement Analysis', 'Solution Design', 'Development/Deployment', 'Maintenance']
    },
    'back-office-support': {
        title: 'Back Office Support',
        description: 'We provide comprehensive back-office support services to streamline your operations and improve efficiency. From data entry to document processing, we handle the details so you can focus on growth.',
        features: ['Data Entry & Management', 'Reconciliation Services', 'Document Processing', 'Record Management'],
        benefits: ['Operational Efficiency', 'Cost Reduction', 'Accuracy & Compliance'],
        process: ['Needs Assessment', 'Process Mapping', 'Implementation', 'Quality Assurance']
    },
    'financial-services': {
        title: 'Financial Services',
        description: 'Our financial services support helps institutions and businesses manage complex financial processes with ease. We assist with loan processing, insurance, and KYC compliance.',
        features: ['Loan Assistance', 'Insurance Processing Support', 'KYC Facilitation', 'Financial Institution Liaison'],
        benefits: ['Faster Turnaround', 'Regulatory Compliance', 'Customer Satisfaction'],
        process: ['Data Collection', 'Verification', 'Processing', 'Approval Support']
    },
    'customer-support': {
        title: 'Customer Support',
        description: 'Deliver exceptional customer experiences with our omni-channel support services. We provide dedicated agents for phone, email, chat, and ticketing systems.',
        features: ['Inbound & Outbound Call Support', 'Email & Chat Support', 'Ticketing System Management', '24/7 Availability'],
        benefits: ['Improved Customer Loyalty', 'Scalable Support', 'Real-time Resolution'],
        process: ['Training & Onboarding', 'Integration', 'Live Support', 'Performance Monitoring']
    },
};

import PageHero from '../components/common/PageHero';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Default to back-office-support if not found, or handle 404
    const service = serviceData[id || ''] || serviceData['back-office-support'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{service.title} | Aarvion Services</title>
                <meta name="description" content={service.description} />
            </Helmet>

            <main>
                {/* Hero */}
                <PageHero
                    title={service.title}
                    description={service.description}
                    image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
                />
                <div className="container-custom pt-8">
                    <Link to="/services" className="inline-flex items-center text-text-muted hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
                    </Link>
                </div>

                {/* Overview & Features */}
                <section className="section-padding bg-background">
                    <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-text mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-text-muted">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-text mb-6">Business Benefits</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit: string, idx: number) => (
                                    <li key={idx} className="bg-surface p-4 rounded-lg border border-border text-text-muted">
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Simple Process Visualization */}
                <section className="py-20 bg-surface">
                    <div className="container-custom">
                        <h2 className="text-3xl font-bold text-text mb-12 text-center">Development Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {service.process.map((step: string, idx: number) => (
                                <div key={idx} className="relative p-6 bg-background rounded-xl border border-border text-center">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold mx-auto mb-4">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-text font-semibold">{step}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
        </>
    );
};

export default ServiceDetail;
