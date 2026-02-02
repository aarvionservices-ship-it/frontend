
import React from 'react';
import SEO from '../components/common/SEO';
import { FileText, Gavel, AlertCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <>
            <SEO
                title="Terms of Service"
                description="Terms of Service for Aarvion Services. Please read these terms carefully before using our services."
            />

            <main className="pt-20">
                <section className="bg-surface py-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
                    <div className="container-custom relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Please read these terms and conditions carefully before using appropriate services.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container-custom max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <FileText className="text-primary mr-3" size={24} /> 1. Agreement to Terms
                                </h3>
                                <p>
                                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Aarvion Services India Pvt. Ltd. (“we,” “us” or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <Gavel className="text-primary mr-3" size={24} /> 2. Intellectual Property Rights
                                </h3>
                                <p>
                                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">3. User Representations</h3>
                                <p>
                                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <AlertCircle className="text-primary mr-3" size={24} /> 4. Limitations of Liability
                                </h3>
                                <p>
                                    In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">5. Governing Law</h3>
                                <p>
                                    These Terms shall be governed by and defined following the laws of India. Aarvion Services India Pvt. Ltd. and yourself irrevocably consent that the courts of Hyderabad, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">6. Contact Us</h3>
                                <p>
                                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:info@aarvionservices.com" className="text-primary hover:underline">info@aarvionservices.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default TermsOfService;
