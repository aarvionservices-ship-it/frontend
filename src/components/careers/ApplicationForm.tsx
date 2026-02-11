
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

type FormData = {
    name: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    resume: FileList;
    videoResumeLink?: string;
};

const ApplicationForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData();
        formData.append('resume', data.resume[0]);

        try {
            // 1. Upload Resume
            const uploadRes = await fetch('http://localhost:5000/api/upload', {
                method: 'POST',
                body: formData
            });

            if (!uploadRes.ok) throw new Error('Upload failed');
            const uploadData = await uploadRes.json();
            console.log('Resume uploaded:', uploadData.fileUrl);

            const contactRes = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: `Job Application: ${data.position}`,
                    message: `${data.message}\n\nResume Link: ${uploadData.fileUrl || 'Attached'}`
                })
            });

            if (!contactRes.ok) throw new Error('Application submission failed');

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="application-form" className="section-padding bg-transparent relative z-10">
            <div className="container-custom max-w-5xl glass-card p-8 md:p-12">
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-[#BDF300]/10 border border-[#BDF300] rounded-lg flex items-center text-[#BDF300]">
                        <CheckCircle className="mr-2" /> Application submitted successfully!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-center text-red-500">
                        <AlertCircle className="mr-2" /> Something went wrong. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                            <input
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Name must be at least 2 characters'
                                    }
                                })}
                                className={`w-full bg-surface/50 backdrop-blur-sm border ${errors.name ? 'border-red-500' : 'border-border/50'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors`}
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Please enter a valid email address'
                                    }
                                })}
                                className={`w-full bg-surface/50 backdrop-blur-sm border ${errors.email ? 'border-red-500' : 'border-border/50'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors`}
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Phone Number</label>
                            <input
                                {...register('phone')}
                                className="w-full bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                placeholder="+1 234 567 890"
                            />
                            {errors.phone && <span className="text-red-500 text-xs mt-1">Phone is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Position Applied For</label>
                            <select
                                {...register('position', { required: 'Please select a position' })}
                                className={`w-full bg-surface/50 backdrop-blur-sm border ${errors.position ? 'border-red-500' : 'border-border/50'} rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary appearance-none transition-colors`}
                            >
                                <option value="" className="bg-surface text-text">Select a position</option>
                                <option value="Senior React Developer" className="bg-surface text-text">Senior React Developer</option>
                                <option value="UI/UX Designer" className="bg-surface text-text">UI/UX Designer</option>
                                <option value="Digital Marketing Specialist" className="bg-surface text-text">Digital Marketing Specialist</option>
                                <option value="General Application" className="bg-surface text-text">General Application</option>
                            </select>
                            {errors.position && <span className="text-red-500 text-xs mt-1 block">{errors.position.message}</span>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Resume Upload - Smaller */}
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Upload Resume (PDF/DOC)</label>
                            <div className={`relative border-2 border-dashed ${errors.resume ? 'border-red-500' : 'border-border/50'} rounded-lg p-4 text-center hover:border-primary/50 transition-colors bg-surface/20`}>
                                <input
                                    type="file"
                                    {...register('resume', { required: 'Resume is required' })}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept=".pdf,.doc,.docx"
                                />
                                <Upload className="mx-auto text-text-muted mb-1" size={20} />
                                <p className="text-xs text-text-muted">Click or drag file to upload</p>
                            </div>
                            {errors.resume && <span className="text-red-500 text-xs mt-1 block">{errors.resume.message}</span>}
                        </div>

                        {/* Video Resume Link */}
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2 flex items-center gap-2">
                                Video Resume Link (Optional)
                                <div className="group relative">
                                    <HelpCircle size={16} className="text-text-muted cursor-help" />
                                    <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-3 bg-surface border border-border rounded-lg shadow-lg text-xs text-text-muted z-10">
                                        <p className="font-semibold mb-1">How to create a video resume:</p>
                                        <ol className="list-decimal list-inside space-y-1">
                                            <li>Record a 1-2 minute video introducing yourself</li>
                                            <li>Upload to Google Drive</li>
                                            <li>Right-click → Share → Change to "Anyone with the link"</li>
                                            <li>Copy and paste the link here</li>
                                        </ol>
                                    </div>
                                </div>
                            </label>
                            <input
                                {...register('videoResumeLink', {
                                    pattern: {
                                        value: /^https?:\/\/.+/,
                                        message: 'Please enter a valid URL'
                                    }
                                })}
                                className="w-full bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                placeholder="https://drive.google.com/..."
                            />
                            {errors.videoResumeLink && <span className="text-red-500 text-xs mt-1">{errors.videoResumeLink.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Cover Letter / Message</label>
                        <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                            placeholder="Tell us why you're a great fit..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary/30"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ApplicationForm;
