import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobs } from '../../data/jobs';

const Openings: React.FC = () => {
    return (
        <section className="section-padding bg-transparent relative z-10">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">Current Openings</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="glass-card p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-12 -mt-12 transition-all group-hover:bg-primary/20"></div>

                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 bg-surface/50 backdrop-blur-sm rounded-full text-xs font-medium text-primary mb-4 border border-primary/20">
                                    {job.department}
                                </span>
                                <h3 className="text-xl font-bold text-text mb-2">{job.title}</h3>
                                <div className="text-text-muted text-sm flex flex-wrap gap-y-2">
                                    <span className="mr-3">{job.type}</span>
                                    <span className="mr-3">•</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    to={`/careers/${job.slug}`}
                                    className="inline-flex items-center text-text font-medium hover:text-primary transition-colors"
                                >
                                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Openings;
