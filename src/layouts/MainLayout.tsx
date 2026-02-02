import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import FluidBackground from '../components/common/FluidBackground';

const MainLayout: React.FC = () => {
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
