
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Discover the latest technologies and methodologies shaping the web development landscape this year.",
        author: "Anand Kumar",
        date: "Jan 15, 2024",
        category: "Technology",
        image: "" // Placeholder logic in CSS
    },
    {
        id: 2,
        title: "Mastering Digital Marketing: Strategies for Growth",
        excerpt: "Learn how to leverage SEO, social media, and content marketing to scale your business.",
        author: "Rahul Sharma",
        date: "Feb 02, 2024",
        category: "Marketing",
        image: ""
    },
    {
        id: 3,
        title: "Why Cyber Security is Critical for Your Business",
        excerpt: "Protecting your digital assets is more important than ever. Here is what you need to know.",
        author: "Priya Singh",
        date: "Feb 20, 2024",
        category: "Security",
        image: ""
    }
];

const BlogGrid: React.FC = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl">
                            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gray-700 animate-pulse" /> {/* Placeholder Image */}
                                <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-muted mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-muted text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-white font-semibold hover:text-primary transition-colors group">
                                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
