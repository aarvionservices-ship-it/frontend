import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Save, AlertCircle, CheckCircle } from 'lucide-react';

const HRPostJob = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const token = localStorage.getItem('token');

            // Auto-generate slug from title if not provided
            const jobData = {
                ...data,
                slug: data.slug || generateSlug(data.title),
                responsibilities: data.responsibilities ? data.responsibilities.split('\n').filter((r: string) => r.trim()) : [],
                requirements: data.requirements ? data.requirements.split('\n').filter((r: string) => r.trim()) : []
            };

            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(jobData)
            });

            if (res.ok) {
                setSubmitStatus({ type: 'success', message: 'Job posted successfully!' });
                setTimeout(() => navigate('/hr/jobs'), 2000);
            } else {
                const error = await res.json().catch(() => ({}));
                throw new Error(error.message || 'Failed to post job');
            }
        } catch (error: any) {
            console.error("Error posting job", error);
            setSubmitStatus({ type: 'error', message: error.message || 'Failed to post job. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-surface/50 rounded-full text-text transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-text">Post New Job</h1>
                    <p className="text-text-muted">Create a new job opening.</p>
                </div>
            </div>

            {submitStatus && (
                <div className={`p-4 rounded-lg flex items-center gap-2 ${submitStatus.type === 'success' ? 'bg-green-500/10 border border-green-500 text-green-400' : 'bg-red-500/10 border border-red-500 text-red-400'}`}>
                    {submitStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl bg-surface p-8 rounded-xl border border-border space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Job Title *</label>
                        <input
                            {...register('title', { required: 'Title is required' })}
                            className={`w-full bg-background border ${errors.title ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                            placeholder="e.g. Senior Software Engineer"
                        />
                        {errors.title && <span className="text-red-500 text-xs mt-1">{errors.title.message as string}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Slug (URL friendly)</label>
                        <input
                            {...register('slug')}
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary"
                            placeholder="Auto-generated from title"
                        />
                        <p className="text-xs text-text-muted mt-1">Leave empty to auto-generate from title</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Department *</label>
                        <select
                            {...register('department', { required: 'Department is required' })}
                            className={`w-full bg-background border ${errors.department ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        >
                            <option value="">Select Department</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="HR">Human Resources</option>
                            <option value="Finance">Finance</option>
                            <option value="Operations">Operations</option>
                        </select>
                        {errors.department && <span className="text-red-500 text-xs mt-1">{errors.department.message as string}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Job Type *</label>
                        <select
                            {...register('type', { required: 'Type is required' })}
                            className={`w-full bg-background border ${errors.type ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        >
                            <option value="">Select Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                        {errors.type && <span className="text-red-500 text-xs mt-1">{errors.type.message as string}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Work Mode *</label>
                        <select
                            {...register('WorkMode', { required: 'Work Mode is required' })}
                            className={`w-full bg-background border ${errors.WorkMode ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        >
                            <option value="">Select Work Mode</option>
                            <option value="On-Site">On-Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                        {errors.WorkMode && <span className="text-red-500 text-xs mt-1">{errors.WorkMode.message as string}</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Location *</label>
                    <input
                        {...register('location', { required: 'Location is required' })}
                        className={`w-full bg-background border ${errors.location ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        placeholder="e.g. Remote, New York, London, Hyderabad"
                    />
                    {errors.location && <span className="text-red-500 text-xs mt-1">{errors.location.message as string}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Job Description *</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        rows={6}
                        className={`w-full bg-background border ${errors.description ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        placeholder="Detailed job description, company information, role overview..."
                    />
                    {errors.description && <span className="text-red-500 text-xs mt-1">{errors.description.message as string}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Responsibilities (One per line)</label>
                    <textarea
                        {...register('responsibilities')}
                        rows={5}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary"
                        placeholder="- Lead the development team&#10;- Design system architecture&#10;- Review code and mentor juniors"
                    />
                    <p className="text-xs text-text-muted mt-1">Separate each responsibility with a new line.</p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Requirements (One per line) *</label>
                    <textarea
                        {...register('requirements', { required: 'Requirements are required' })}
                        rows={5}
                        className={`w-full bg-background border ${errors.requirements ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary`}
                        placeholder="- 5+ years of experience&#10;- Proficiency in React and Node.js&#10;- Strong communication skills"
                    />
                    {errors.requirements && <span className="text-red-500 text-xs mt-1">{errors.requirements.message as string}</span>}
                    <p className="text-xs text-text-muted mt-1">Separate each requirement with a new line.</p>
                </div>

                <div className="border-t border-border pt-6 flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 border border-border rounded-lg font-bold text-text hover:bg-surface/50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary px-6 py-3 rounded-lg font-bold flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Save size={20} className="mr-2" />
                        {isSubmitting ? 'Posting...' : 'Publish Job'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HRPostJob;
