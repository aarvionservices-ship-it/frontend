import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, MapPin, Clock, Briefcase } from 'lucide-react';
import { jobs } from '../data/jobs';
import ApplicationForm from '../components/careers/ApplicationForm';

const JobDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const job = jobs.find(j => j.slug === slug);

    if (!job) {
        return <Navigate to="/careers" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{`${job.title} - Careers | Aarvion Services`}</title>
                <meta name="description" content={`Join Aarvion Services as a ${job.title}. ${job.description.substring(0, 150)}...`} />
            </Helmet>

            <main className="pt-20">
                {/* Header */}
                <div className="bg-surface py-20 relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
                    <div className="container-custom relative z-10">
                        <Link to="/careers" className="inline-flex items-center text-text-muted hover:text-text transition-colors mb-8 group">
                            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Careers
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                {job.department}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
                                {job.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-text-muted text-base">
                                <div className="flex items-center">
                                    <Briefcase size={18} className="mr-2 text-primary" />
                                    {job.type}
                                </div>
                                <div className="flex items-center">
                                    <MapPin size={18} className="mr-2 text-primary" />
                                    {job.location}
                                </div>
                                <div className="flex items-center">
                                    <Clock size={18} className="mr-2 text-primary" />
                                    Posted recently
                                </div>
                                <div className="flex items-center">
                                    <Briefcase size={18} className="mr-2 text-primary" />
                                    {job.WorkMode}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="section-padding bg-background">
                    <div className="container-custom max-w-4xl mx-auto space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-text mb-4">About the Role</h3>
                            <p className="text-text-muted leading-relaxed text-lg">
                                {job.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-text mb-4">Responsibilities</h3>
                            <ul className="space-y-3">
                                {job.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-text-muted">
                                        <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-text mb-4">Requirements</h3>
                            <ul className="space-y-3">
                                {job.requirements.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-text-muted">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="bg-surface/30 border-t border-border/50">
                    <div className="container-custom py-12 text-center">
                        <h2 className="text-3xl font-bold text-text mb-4">Ready to apply?</h2>
                        <p className="text-text-muted max-w-2xl mx-auto mb-8">
                            Fill out the form below to submit your application for the {job.title} position.
                        </p>
                    </div>
                </div>

                <ApplicationForm />
            </main>
        </>
    );
};

export default JobDetail;
