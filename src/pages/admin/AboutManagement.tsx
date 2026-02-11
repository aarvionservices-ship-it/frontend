import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trash2, PlusCircle, User, Award, Calendar, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

type SectionType = 'team' | 'values' | 'timeline' | 'certs';

const AboutManagement = () => {
    const [team, setTeam] = useState<any[]>([]);
    const [values, setValues] = useState<any[]>([]);
    const [timeline, setTimeline] = useState<any[]>([]);
    const [certs, setCerts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<SectionType>('team');
    const { register, handleSubmit, reset } = useForm();
    const { } = useAuth();

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}` };

            const resTeam = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/team`, { headers });
            const resValues = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/values`, { headers });
            const resTimeline = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/timeline`, { headers });
            const resCerts = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/certs`, { headers });

            if (resTeam.ok) setTeam(await resTeam.json());
            if (resValues.ok) setValues(await resValues.json());
            if (resTimeline.ok) setTimeline(await resTimeline.json());
            if (resCerts.ok) setCerts(await resCerts.json());
        } catch (error) {
            console.error("Failed to fetch content", error);
        }
    };

    const handleCreate = async (data: any) => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/${activeTab}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                fetchContent();
                reset();
            }
        } catch (error) {
            console.error(`Failed to create ${activeTab}`, error);
        }
    };

    const handleDelete = async (id: string, type: SectionType) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            const token = localStorage.getItem('token');
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cms/${type}/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchContent();
        } catch (error) {
            console.error(`Failed to delete ${type}`, error);
        }
    };

    const renderForm = () => {
        switch (activeTab) {
            case 'team':
                return (
                    <>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Name</label>
                            <input {...register('name', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Role</label>
                            <input {...register('role', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Bio</label>
                            <textarea {...register('bio')} className="w-full bg-background border border-border rounded p-2 text-text h-24"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Image URL</label>
                            <input {...register('image')} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                    </>
                );
            case 'values':
                return (
                    <>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Title</label>
                            <input {...register('title', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Description</label>
                            <textarea {...register('description', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text h-24"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Icon Name (Lucide)</label>
                            <input {...register('icon')} placeholder="e.g. Heart" className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                    </>
                );
            case 'timeline':
                return (
                    <>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Year</label>
                            <input {...register('year', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Title</label>
                            <input {...register('title', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Description</label>
                            <textarea {...register('description')} className="w-full bg-background border border-border rounded p-2 text-text h-24"></textarea>
                        </div>
                    </>
                );
            case 'certs':
                return (
                    <>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Certification Name</label>
                            <input {...register('name', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Issuer</label>
                            <input {...register('issuer', { required: true })} className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                        <div>
                            <label className="block text-sm text-text-muted mb-1">Date</label>
                            <input {...register('date')} placeholder="e.g. 2023" className="w-full bg-background border border-border rounded p-2 text-text" />
                        </div>
                    </>
                );
        }
    };

    const renderList = () => {
        const items = activeTab === 'team' ? team : activeTab === 'values' ? values : activeTab === 'timeline' ? timeline : certs;

        return (
            <div className="space-y-4">
                {items.length === 0 && <p className="text-text-muted">No items found.</p>}
                {items.map((item: any) => (
                    <div key={item._id} className="bg-surface p-4 rounded-xl border border-border flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-text">{item.name || item.title || item.year}</h4>
                            <p className="text-sm text-text-muted">{item.role || item.description || item.issuer}</p>
                            {item.bio && <p className="text-xs text-text-muted mt-1 line-clamp-2">{item.bio}</p>}
                        </div>
                        <button onClick={() => handleDelete(item._id, activeTab)} className="text-text-muted hover:text-red-500 p-2">
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <Helmet>
                <title>About Management | Admin</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-text">About Page Management</h1>

            <div className="flex flex-wrap gap-2 border-b border-border pb-2">
                {[
                    { id: 'team', label: 'Team', icon: User },
                    { id: 'values', label: 'Core Values', icon: Heart },
                    { id: 'timeline', label: 'Timeline', icon: Calendar },
                    { id: 'certs', label: 'Certifications', icon: Award }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as SectionType)}
                        className={`flex items-center px-4 py-2 font-medium transition-colors rounded-t-lg ${activeTab === tab.id ? 'bg-surface text-primary border-t border-x border-border' : 'text-text-muted hover:text-text hover:bg-white/5'}`}
                    >
                        <tab.icon size={16} className="mr-2" />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* List Section */}
                <div className="lg:col-span-2">
                    {renderList()}
                </div>

                {/* Create Form */}
                <div className="bg-surface p-6 rounded-xl border border-border h-fit">
                    <h3 className="text-xl font-bold text-text mb-4 capitalize">
                        Add New {activeTab === 'certs' ? 'Certification' : activeTab === 'values' ? 'Value' : activeTab === 'team' ? 'Member' : 'Event'}
                    </h3>
                    <form onSubmit={handleSubmit(handleCreate)} className="space-y-4">
                        {renderForm()}
                        <button type="submit" className="w-full btn-primary py-2 rounded font-bold text-black mt-4">
                            <PlusCircle className="inline-block mr-2" size={18} /> Add Item
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutManagement;
