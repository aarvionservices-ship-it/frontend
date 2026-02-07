
import React from 'react';
import SEO from '../components/common/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';


import PageHero from '../components/common/PageHero';

const Contact: React.FC = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Aarvion Services. Reach out to our offices in Hyderabad or Mainpuri, or send us a message."
            />

            <main>
                {/* Hero */}
                <PageHero
                    title="Contact Us"
                    description="Have a question or want to work together? We'd love to hear from you."
                    image="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920"
                />

                {/* Contact Info Cards */}
                <section className="section-padding bg-background">
                    <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Registered Address */}
                        <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4">Registered Office</h3>
                            <p className="text-text-muted leading-relaxed">
                                Financial District, Hyderabad,<br />
                                Telangana, India - 500008
                            </p>
                        </div>

                        {/* Service Address */}
                        <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4">Service Office</h3>
                            <p className="text-text-muted leading-relaxed">
                                Sheetal Nagar, Mainpuri,<br />
                                Uttar Pradesh - 205001
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4">Contact Info</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-text-muted">
                                    <Phone size={18} className="mr-3 text-primary" /> +91-7060638863
                                </li>
                                <li className="flex items-center text-text-muted">
                                    <Mail size={18} className="mr-3 text-primary" /> info@aarvionservices.com
                                </li>
                                <li className="flex items-center text-text-muted">
                                    <Clock size={18} className="mr-3 text-primary" /> Mon - Fri, 9:00 AM - 6:00 PM
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form & Map Grid */}
                    <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-surface p-8 rounded-2xl border border-border">
                            <h2 className="text-3xl font-bold text-text mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                                        <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                        <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-muted mb-2">Subject</label>
                                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary" placeholder="Write your message here..." />
                                </div>
                                <button type="submit" className="w-full btn-primary">Send Message</button>
                            </form>
                        </div>

                        {/* Map (Placeholder) */}
                        <div className="h-full min-h-[400px] bg-surface rounded-2xl overflow-hidden relative">
                            {/* Create a darker map look using filtering if embedding real map, or just placeholder for now */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.867272216444!2d78.3426!3d17.4183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9380625a690f%3A0x6296155989269785!2sFinancial%20District%2C%20Nanakramguda%2C%20Telangana!5e0!3m2!1sen!2sin!4v1645425678901!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;
