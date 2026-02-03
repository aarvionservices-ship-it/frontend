
import React from 'react';
import SEO from '../components/common/SEO';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for Aarvion Services. Learn how we collect, use, and protect your data."
            />

            <main className="pt-20">
                <section className="bg-surface py-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
                    <div className="container-custom relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">Privacy Policy</h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            We are committed to protecting your personal information and your right to privacy.
                        </p>
                        <p className="text-sm text-text-muted mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container-custom max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none text-text-muted space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Shield className="text-primary mr-3" size={24} /> 1. Introduction
                                </h3>
                                <p>
                                    Welcome to Aarvion Services India Pvt. Ltd. ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Eye className="text-primary mr-3" size={24} /> 2. Information We Collect
                                </h3>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                                    <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Lock className="text-primary mr-3" size={24} /> 3. How We Use Your Data
                                </h3>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">4. Data Security</h3>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">5. Your Legal Rights</h3>
                                <p>
                                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">6. Contact Us</h3>
                                <p>
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@aarvionservices.com" className="text-primary hover:underline">info@aarvionservices.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PrivacyPolicy;
