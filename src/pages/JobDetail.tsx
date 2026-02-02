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
                        <Link to="/careers" className="inline-flex items-center text-muted hover:text-white transition-colors mb-8 group">
                            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Careers
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 border border-primary/20">
                                {job.department}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {job.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-muted text-base">
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
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="section-padding bg-background">
                    <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Job Info */}
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">About the Role</h3>
                                <p className="text-muted leading-relaxed text-lg">
                                    {job.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Responsibilities</h3>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-muted">
                                            <CheckCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
                                <ul className="space-y-3">
                                    {job.requirements.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-muted">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / Apply Form */}
                        <div className="lg:col-span-1">
                            <div className="bg-surface rounded-2xl p-6 border border-white/5 sticky top-24">
                                <h3 className="text-xl font-bold text-white mb-2">Apply for this position</h3>
                                <p className="text-muted text-sm mb-6">Complete the form below to submit your application.</p>
                                {/* We can pass the job title as a prop if we update ApplicationForm in the future. 
                                    For now users can select it from dropdown or we rely on 'Subject' line if we tweak it. 
                                    Ideally, we pass a prop `defaultPosition={job.title}`. 
                                    Let's verify ApplicationForm props or assume standard usage for now. */}
                                <ApplicationForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default JobDetail;
