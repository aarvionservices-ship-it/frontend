import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ingestEvent, getAnonymousId } from '../services/analyticsService';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import FluidBackground from '../components/common/FluidBackground';

const MainLayout: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Track Active User (Daily)
        const userId = getAnonymousId();
        ingestEvent('active_users', 'global', userId);

        // Track Page View
        ingestEvent('page_view', 'global', userId + ':' + location.pathname);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen relative">
            <FluidBackground />
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;
