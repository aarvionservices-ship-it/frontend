import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAnalyticsEstimate } from '../../services/analyticsService';
import { Users, Activity } from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(endDate.getDate() - 7); // Last 7 days

            const dates = [];
            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                dates.push(new Date(d));
            }

            const chartData = await Promise.all(dates.map(async (date) => {
                // Approximate "Daily" by querying standard day window
                // For a real system, we might query pre-aggregated daily buckets
                const startOfDay = new Date(date);
                startOfDay.setHours(0, 0, 0, 0);
                const endOfDay = new Date(date);
                endOfDay.setHours(23, 59, 59, 999);

                const dau = await getAnalyticsEstimate('active_users', 'global', startOfDay, endOfDay);

                return {
                    name: date.toLocaleDateString(),
                    DAU: dau
                };
            }));

            setData(chartData);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                Analytics Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-border">
                        <span className="text-text-muted text-sm">Active Users (Today)</span>
                        <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-text">
                        {data.length > 0 ? data[data.length - 1].DAU : '-'}
                    </div>
                </div>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-semibold mb-4 text-text">User Activity Trend (Last 7 Days)</h3>
                <div style={{ width: '100%', height: '400px' }}>
                    {loading ? (
                        <div className="h-full flex items-center justify-center text-text-muted">Loading...</div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                                <XAxis
                                    dataKey="name"
                                    stroke="var(--color-text-secondary)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="var(--color-text-secondary)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    allowDecimals={false}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgb(var(--color-surface))', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: 'var(--color-text-primary)' }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="DAU"
                                    stroke="var(--color-blue)"
                                    strokeWidth={3}
                                    dot={{ fill: 'var(--color-blue)', strokeWidth: 2, r: 4, stroke: 'rgb(var(--color-surface))' }}
                                    activeDot={{ r: 6, fill: 'var(--color-green)' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
