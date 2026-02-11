import React, { useState, useMemo } from 'react';
import { ArrowRight, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobs } from '../../data/jobs';

const Openings: React.FC = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [visibleCount, setVisibleCount] = useState(6);
    const [filters, setFilters] = useState({
        department: 'all',
        type: 'all',
        workMode: 'all'
    });

    const getRelativeTime = (date: Date) => {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0 || diffDays === 1 && now.getDate() === date.getDate()) {
            return 'Today';
        } else if (diffDays === 1) {
            return 'Yesterday';
        } else if (diffDays > 1 && diffDays < 7) {
            return `${diffDays} days ago`;
        } else if (diffDays >= 7 && diffDays < 14) {
            return '1 week ago';
        } else if (diffDays >= 14 && diffDays < 21) {
            return '2 weeks ago';
        } else if (diffDays >= 21 && diffDays < 28) {
            return '3 weeks ago';
        } else {
            return '1 month ago';
        }
    };

    // Get unique values for filters
    const departments = ['all', ...Array.from(new Set(jobs.map(job => job.department)))];
    const types = ['all', ...Array.from(new Set(jobs.map(job => job.type)))];
    const workModes = ['all', ...Array.from(new Set(jobs.map(job => job.WorkMode)))];

    // Filter jobs
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            if (filters.department !== 'all' && job.department !== filters.department) return false;
            if (filters.type !== 'all' && job.type !== filters.type) return false;
            if (filters.workMode !== 'all' && job.WorkMode !== filters.workMode) return false;
            return true;
        });
    }, [filters]);

    // Visible jobs based on pagination
    const visibleJobs = filteredJobs.slice(0, visibleCount);
    const hasMore = visibleCount < filteredJobs.length;

    return (
        <section className="section-padding bg-transparent relative z-10">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 text-center">Current Openings</h2>

                {/* Filters and View Toggle */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    {/* Filter Controls */}
                    <div className="flex flex-wrap gap-3">
                        <select
                            value={filters.department}
                            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                            className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                            <option value="all">All Departments</option>
                            {departments.filter(d => d !== 'all').map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>

                        <select
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                            className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                            <option value="all">All Types</option>
                            {types.filter(t => t !== 'all').map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>

                        <select
                            value={filters.workMode}
                            onChange={(e) => setFilters({ ...filters, workMode: e.target.value })}
                            className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 text-text text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                            <option value="all">All Work Modes</option>
                            {workModes.filter(w => w !== 'all').map(mode => (
                                <option key={mode} value={mode}>{mode}</option>
                            ))}
                        </select>
                    </div>

                    {/* View Toggle */}
                    <div className="flex gap-2 bg-surface/50 backdrop-blur-sm border border-border/50 rounded p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-1 rounded transition-colors ${viewMode === 'grid' ? 'bg-primary text-black' : 'text-text-muted hover:text-text'}`}
                            aria-label="Grid view"
                        >
                            <Grid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1 rounded transition-colors ${viewMode === 'list' ? 'bg-primary text-black' : 'text-text-muted hover:text-text'}`}
                            aria-label="List view"
                        >
                            <List size={20} />
                        </button>
                    </div>
                </div>

                {/* Jobs Display */}
                <div className={viewMode === 'grid'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }>
                    {visibleJobs.map((job) => (
                        <div
                            key={job.id}
                            className={`glass-card p-8 flex flex-col hover:border-primary/50 transition-all duration-300 group relative overflow-hidden ${viewMode === 'list' ? 'md:flex-row md:items-center md:justify-between' : ''
                                }`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-12 -mt-12 transition-all group-hover:bg-primary/20"></div>

                            <div className={`mb-6 ${viewMode === 'list' ? 'md:mb-0 md:flex-1' : ''}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-block px-3 py-1 bg-surface/50 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/20">
                                        {job.department}
                                    </span>
                                    <span className="text-xs text-text-muted font-medium bg-surface/30 px-2 py-1 rounded">
                                        {getRelativeTime(job.createdAt)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-text mb-2">{job.title}</h3>
                                <div className="text-text-muted text-sm flex flex-wrap gap-y-2">
                                    <span className="mr-3">{job.type}</span>
                                    <span className="mr-3">•</span>
                                    <span className="mr-3">{job.location}</span>
                                    <span className="mr-3">•</span>
                                    <span>{job.WorkMode}</span>
                                </div>
                            </div>

                            <div className={`mt-auto ${viewMode === 'list' ? 'md:mt-0' : ''}`}>
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

                {/* Load More Button */}
                {hasMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="btn-primary px-8 py-3"
                        >
                            Load More Jobs
                        </button>
                    </div>
                )}

                {/* No Results Message */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-text-muted text-lg">No jobs found matching your filters.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Openings;
