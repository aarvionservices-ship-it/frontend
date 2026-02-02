import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Users, Briefcase, Globe, HeartPulse, UserCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Defined types for staffing data
interface StaffingData {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    benefits: string[];
    overview: string;
}

const staffingData: Record<string, StaffingData> = {
    'it-staffing': {
        title: 'IT Staffing',
        description: 'Connect with top-tier IT talent to drive your technology initiatives forward.',
        icon: <Users size={48} />,
        overview: 'In the fast-paced world of technology, having the right team is crucial. Our IT Staffing solutions provide you with access to a vast network of skilled professionals, from software developers and data scientists to cybersecurity experts and network engineers. We understand the nuances of the tech industry and match you with candidates who fit both your technical requirements and company culture.',
        features: ['Contract Staffing', 'Permanent Placement', 'Contract-to-Hire', 'Project-Based Staffing', 'Remote & On-site Talent'],
        benefits: ['Reduced Time-to-Hire', 'Access to Specialized Skills', 'Flexible Workforce Scaling', 'Cost-Effective Recruitment']
    },
    'professional-staffing': {
        title: 'Professional Staffing',
        description: 'Expert recruitment for finance, accounting, HR, and administrative roles.',
        icon: <Briefcase size={48} />,
        overview: 'Our Professional Staffing services cover a wide range of non-IT roles essential for your business operations. Whether you need seasoned accountants, HR specialists, legal professionals, or administrative support, we ensure you get candidates with the right expertise and experience to contribute immediately to your success.',
        features: ['Executive Search', 'Mid-Level Management', 'Administrative Support', 'HR & Legal Staffing', 'Finance & Accounting'],
        benefits: ['Industry-Specific Expertise', 'Thorough Candidate Vetting', 'Seamless Onboarding Support', 'Long-Term Retention Focus']
    },
    'healthcare-staffing': {
        title: 'Healthcare Staffing',
        description: 'Reliable staffing solutions for hospitals, clinics, and healthcare facilities.',
        icon: <HeartPulse size={48} />,
        overview: 'The healthcare industry demands precision, dedication, and reliability. We specialize in providing qualified healthcare professionals, including nurses, allied health experts, and administrative staff. Our rigorous screening process ensures that every candidate meets the highest standards of patient care and regulatory compliance.',
        features: ['Nursing Staff', 'Allied Health Professionals', 'Medical Administration', 'Locum Tenens', 'Per Diem Staffing'],
        benefits: ['Credentialing & Compliance', '24/7 Staffing Support', 'Quality Patient Care', 'Rapid Response to Shortages']
    },
    'recruitment-account-management': {
        title: 'Recruitment & Account Management',
        description: 'End-to-end recruitment process outsourcing and dedicated account management services.',
        icon: <UserCheck size={48} />,
        overview: 'Our Recruitment and Account Management services provide a comprehensive solution for your hiring needs. We act as an extension of your HR team, managing the entire recruitment lifecycle from sourcing to onboarding. Our dedicated account managers ensure clear communication, streamlined processes, and consistent delivery of top talent.',
        features: ['RPO (Recruitment Process Outsourcing)', 'Vendor Management', 'Talent Pipeline Development', 'Employer Branding', 'Onboarding Support'],
        benefits: ['Streamlined Hiring Process', 'Improved Candidate Quality', 'Enhanced Employer Brand', 'Cost Savings']
    },
    'global-payrolling': {
        title: 'Global Payrolling',
        description: 'Simplify your global workforce management with compliant payroll solutions.',
        icon: <Globe size={48} />,
        overview: 'Expanding your business globally shouldn’t be complicated by payroll and compliance hurdles. Our Global Payrolling services manage the entire payroll process for your international teams, ensuring full compliance with local tax laws, labor regulations, and social security requirements. Focus on your growth while we handle the complexities of global employment.',
        features: ['Multi-Country Payroll', 'Tax & Compliance Management', 'Employee Benefits Administration', 'Currency Conversion', 'Legal Employer of Record'],
        benefits: ['Risk Mitigation', 'Operational Efficiency', 'Consistent Global Experience', 'Real-Time Reporting']
    }
};

const StaffingDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Redirect or show 404 if slug is missing or invalid
    if (!slug || !staffingData[slug]) {
        return <Navigate to="/staffing" replace />;
    }

    const data = staffingData[slug];

    return (
        <>
            <Helmet>
                <title>{`${data.title} | Aarvion Services`}</title>
                <meta name="description" content={data.description} />
            </Helmet>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-surface py-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px]" />
                    <div className="container-custom relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <Link to="/staffing" className="inline-flex items-center text-primary hover:text-white transition-colors mb-6 group">
                                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Staffing Solutions
                            </Link>
                            <div className="text-primary mb-6">{data.icon}</div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {data.title}
                            </h1>
                            <p className="text-xl text-muted leading-relaxed max-w-2xl">
                                {data.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="section-padding bg-background">
                    <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                                <p className="text-muted leading-relaxed text-lg">
                                    {data.overview}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="bg-surface p-8 rounded-2xl border border-white/5">
                                <h2 className="text-2xl font-bold text-white mb-6">Key Offerings</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3"
                                        >
                                            <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                            <span className="text-gray-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our {data.title}?</h2>
                                <div className="space-y-4">
                                    {data.benefits.map((benefit, index) => (
                                        <div key={index} className="flex p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-colors">
                                            <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full text-primary">
                                                <ArrowRight size={16} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{benefit}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* CTA Card */}
                            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                                <h3 className="text-2xl font-bold text-white mb-4">Need {data.title}?</h3>
                                <p className="text-gray-300 mb-6">
                                    Let us help you find the perfect talent for your organization. Contact us today for a consultation.
                                </p>
                                <Link
                                    to="/contact"
                                    className="block w-full text-center bg-primary text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                                >
                                    Get in Touch
                                </Link>
                            </div>

                            {/* Other Services Navigation */}
                            <div className="bg-surface p-8 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-4">Other Solutions</h3>
                                <div className="space-y-2">
                                    {Object.entries(staffingData).map(([key, value]) => (
                                        key !== slug && (
                                            <Link
                                                key={key}
                                                to={`/staffing/${key}`}
                                                className="block p-3 rounded-lg hover:bg-white/5 text-muted hover:text-white transition-colors flex items-center justify-between group"
                                            >
                                                <span>{value.title}</span>
                                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default StaffingDetail;
