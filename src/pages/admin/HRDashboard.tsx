import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { BarChart3, Briefcase, Users } from 'lucide-react';

const HRDashboard = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState({ jobs: 0, applications: 0, views: 0 });

    useEffect(() => {
        // Fetch simple stats
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/jobs/my-jobs`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setStats(prev => ({ ...prev, jobs: data.length }));
                }
            } catch (error) {
                console.error("Failed to fetch stats", error);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-text">HR Dashboard</h1>
                    <p className="text-text-muted">Welcome back, {user?.name}.</p>
                </div>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <Briefcase className="text-primary" size={24} />
                        <span className="text-2xl font-bold text-text">{stats.jobs}</span>
                    </div>
                    <p className="text-text-muted text-sm">Active Job Postings</p>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <Users className="text-primary" size={24} />
                        <span className="text-2xl font-bold text-text">{stats.applications}</span>
                    </div>
                    <p className="text-text-muted text-sm">Total Applications</p>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <BarChart3 className="text-primary" size={24} />
                        <span className="text-2xl font-bold text-text">{stats.views}</span>
                    </div>
                    <p className="text-text-muted text-sm">Total Views</p>
                </div>
            </div>

            <div className="p-8 text-center border-t border-border">
                <p className="text-text-muted">Select "My Jobs" or "Post New Job" from the sidebar to manage listings.</p>
            </div>
        </div>
    );
};

export default HRDashboard;
