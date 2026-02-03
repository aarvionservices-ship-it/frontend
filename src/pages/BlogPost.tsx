
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../components/blog/BlogGrid';
import CTA from '../components/home/CTA';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-20 container-custom text-text text-center">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Aarvion Services</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <main className="pt-24 pb-20">
                <article className="container-custom max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-text-muted hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-8">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-text-muted space-x-6 border-b border-border pb-8">
                            <span className="flex items-center"><User size={18} className="mr-2" /> {post.author}</span>
                            <span className="flex items-center"><Calendar size={18} className="mr-2" /> {post.date}</span>
                        </div>
                    </div>

                    <div className="aspect-video bg-surface rounded-2xl mb-12 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                            Article Cover Image
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-text-muted">
                        <p className="lead text-xl text-text mb-6 font-medium">
                            {post.excerpt}
                        </p>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h2 className="text-2xl font-bold text-text mt-10 mb-4">Looking Ahead</h2>
                        <p className="mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-primary my-8">
                            "Innovation is the ability to see change as an opportunity - not a threat."
                        </blockquote>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border">
                        <h3 className="text-text font-bold mb-4">Tags</h3>
                        <div className="flex gap-2">
                            {['Technology', 'Business', 'Growth'].map(tag => (
                                <span key={tag} className="bg-surface px-3 py-1 rounded text-sm text-text-muted flex items-center">
                                    <Tag size={12} className="mr-1" /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                <CTA />
            </main>
        </>
    );
};

export default BlogPost;
