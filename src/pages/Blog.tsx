
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogGrid from '../components/blog/BlogGrid';
import CTA from '../components/home/CTA';

const Blog: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Blog | Aarvion Services</title>
                <meta name="description" content="Insights, trends, and news from the world of business services and operations." />
            </Helmet>

            <main className="pt-20">
                <div className="bg-surface py-20 text-center relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="container-custom relative z-10">
                        <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Our Blog</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Latest Insights</h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Expert thoughts on technology, design, and business strategy.
                        </p>
                    </div>
                </div>

                <BlogGrid />
                <CTA />
            </main>
        </>
    );
};

export default Blog;
