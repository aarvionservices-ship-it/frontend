import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound: React.FC = () => {
    return (
        <>
            <SEO title="Page Not Found" description="The page you are looking for might have been removed or is temporarily unavailable." />

            <main className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-background">
                {/* Background Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none select-none">404</h1>
                    <div className="relative -mt-16 md:-mt-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Page Not Found</h2>
                        <p className="text-xl text-text-muted max-w-lg mx-auto mb-8">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <Link to="/" className="btn-primary inline-flex items-center">
                            <Home className="mr-2" size={20} />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NotFound;
