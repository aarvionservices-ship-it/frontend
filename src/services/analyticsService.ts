import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface AnalyticsData {
    metric: string;
    dimension: string;
    start: string;
    end: string;
    count: number;
}

export const getAnalyticsEstimate = async (
    metric: string,
    dimension: string,
    start: Date,
    end: Date
): Promise<number> => {
    try {
        const response = await axios.get(`${API_URL}/analytics/query`, {
            params: {
                metric,
                dimension,
                start: start.toISOString(),
                end: end.toISOString()
            }
        });
        return response.data.count;
    } catch (error) {
        console.error("Failed to fetch analytics:", error);
        return 0;
    }
};

export const ingestEvent = async (metric: string, dimension: string, value: string) => {
    try {
        await axios.post(`${API_URL}/analytics/event`, {
            metric,
            dimension,
            value
        });
    } catch (error) {
        console.error("Failed to ingest event:", error);
    }
};

export const getAnonymousId = (): string => {
    let id = localStorage.getItem('analytics_anon_id');
    if (!id) {
        id = Math.random().toString(36).substring(2) + Date.now().toString(36);
        localStorage.setItem('analytics_anon_id', id);
    }
    return id;
};
