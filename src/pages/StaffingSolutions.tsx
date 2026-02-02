
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, HeartPulse, Globe, UserCheck } from 'lucide-react';
import CTA from '../components/home/CTA';

const staffingSolutions = [
    {
        title: "IT Staffing",
        slug: "it-staffing",
        icon: <Users size={32} />,
        description: "Connecting you with top-tier IT professionals for development, infrastructure, and specialized tech roles."
    },
    {
        title: "Professional Staffing",
        slug: "professional-staffing",
        icon: <Briefcase size={32} />,
        description: "Sourcing administrative, finance, legal, and engineering experts for your business needs."
    },
    {
        title: "Healthcare Staffing",
        slug: "healthcare-staffing",
        icon: <HeartPulse size={32} />,
        description: "Providing qualified healthcare professionals including nurses, doctors, and allied health staff."
    },
    {
        title: "Recruitment & Account Management",
        slug: "recruitment-account-management",
        icon: <UserCheck size={32} />,
        description: "End-to-end recruitment process outsourcing and dedicated account management services."
    },
    {
        title: "Global Payrolling",
        slug: "global-payrolling",
        icon: <Globe size={32} />,
        description: "Simplifying global workforce management with compliant payroll and HR solutions."
    }
];

const StaffingSolutions: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Staffing Solutions | Aarvion Services</title>
                <meta name="description" content="Comprehensive staffing solutions including IT, Professional, Healthcare, and Global Payrolling services." />
            </Helmet>

            <main className="pt-20">
                {/* Hero */}
                <section className="bg-surface py-20 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                    <div className="container-custom relative z-10">
                        <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Talent Solutions</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Staffing Solutions</h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            We help you build high-performing teams with our specialized staffing and recruitment services.
                        </p>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {staffingSolutions.map((solution, idx) => (
                                <Link
                                    to={`/staffing/${solution.slug}`}
                                    key={idx}
                                    className="block p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 p-4 bg-background rounded-full w-fit group-hover:scale-110 transition-transform">
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                                    <p className="text-muted leading-relaxed">
                                        {solution.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
        </>
    );
};

export default StaffingSolutions;
