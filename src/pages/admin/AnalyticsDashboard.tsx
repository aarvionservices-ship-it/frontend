import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAnalyticsEstimate } from '../../services/analyticsService';
import { Calendar, Users, Activity } from 'lucide-react';

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
                <Activity className="h-6 w-6 text-blue-600" />
                Analytics Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                        <span className="text-gray-500 text-sm">Active Users (Today)</span>
                        <Users className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold">
                        {data.length > 0 ? data[data.length - 1].DAU : '-'}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">User Activity Trend (Last 7 Days)</h3>
                <div className="h-[400px]">
                    {loading ? (
                        <div className="h-full flex items-center justify-center text-gray-400">Loading...</div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="name"
                                    stroke="#6B7280"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#6B7280"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    allowDecimals={false}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1F2937' }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="DAU"
                                    stroke="#2563EB"
                                    strokeWidth={3}
                                    dot={{ fill: '#2563EB', strokeWidth: 2, r: 4, stroke: '#fff' }}
                                    activeDot={{ r: 6, fill: '#1D4ED8' }}
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
