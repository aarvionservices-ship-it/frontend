import React from 'react';
import SEO from '../components/common/SEO';
import { Shield, Lock, Eye } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | Aarvion Services Pvt. Ltd."
                description="Privacy Policy of Aarvion Services Pvt. Ltd. in accordance with the Digital Personal Data Protection Act, 2023."
            />

            <main>
                <PageHero
                    title="Privacy Policy"
                    description="Aarvion Services Pvt. Ltd. • Effective Date: 1 Feb 2026"
                    image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
                />

                <section className="section-padding bg-background">
                    <div className="container-custom max-w-4xl">
                        <div className="prose prose-invert prose-lg max-w-none text-text-muted space-y-10">

                            <p>
                                <strong>Aarvion Services Pvt. Ltd.</strong> (“We”, “Us”, “Our”, or “Aarvion”)
                                is committed to protecting your privacy and personal data in accordance
                                with the Digital Personal Data Protection Act, 2023 (DPDP Act).
                                This Privacy Policy explains how we collect, use, disclose, store,
                                and safeguard personal data when you access or use our websites,
                                products, applications, and services.
                            </p>

                            {/* 1 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Eye className="text-primary mr-3" size={24} />
                                    1. Information We Collect
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                    <li>Basic personal details such as name, email address, phone number, and postal address</li>
                                    <li>Professional or organizational information</li>
                                    <li>Device, browser, IP address, and usage-related information</li>
                                    <li>Information voluntarily provided through forms, communications, or service usage</li>
                                </ul>
                            </div>

                            {/* 2 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Lock className="text-primary mr-3" size={24} />
                                    2. How We Use Personal Data
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                    <li>Providing, operating, and managing our products and services</li>
                                    <li>Creating and administering user accounts</li>
                                    <li>Responding to inquiries and providing customer support</li>
                                    <li>Improving our services, systems, and user experience</li>
                                    <li>Complying with legal, regulatory, and contractual obligations</li>
                                    <li>Protecting our rights, property, and preventing fraud or misuse</li>
                                </ul>
                            </div>

                            {/* 3 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4 flex items-center">
                                    <Shield className="text-primary mr-3" size={24} />
                                    3. Consent
                                </h3>
                                <p>
                                    Where required under applicable law, we process personal data
                                    based on free, specific, informed, unconditional, and unambiguous
                                    consent. You may withdraw your consent at any time. Withdrawal
                                    shall not affect the legality of processing carried out prior
                                    to such withdrawal.
                                </p>
                            </div>

                            {/* 4 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    4. Data Sharing
                                </h3>
                                <p>
                                    Personal data may be shared internally on a strict need-to-know
                                    basis. We may also disclose personal data to government authorities,
                                    regulators, or law enforcement agencies where required under
                                    applicable Indian law.
                                </p>
                            </div>

                            {/* 5 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    5. Data Security and Retention
                                </h3>
                                <p>
                                    We maintain reasonable administrative, technical, and organizational
                                    safeguards to protect personal data against unauthorized access,
                                    disclosure, alteration, or loss. Personal data is retained only
                                    for as long as necessary to fulfill the purpose for which it was
                                    collected or as required under applicable law.
                                </p>
                            </div>

                            {/* 6 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    6. Rights of Data Principals (India)
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                    <li>Access information about your personal data processed by us</li>
                                    <li>Request correction of inaccurate or misleading personal data</li>
                                    <li>Request erasure of personal data, subject to legal obligations</li>
                                    <li>Withdraw consent</li>
                                    <li>Nominate another individual to exercise rights in the event of death or incapacity</li>
                                    <li>Seek grievance redressal</li>
                                </ul>
                            </div>

                            {/* 7 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    7. Grievance Redressal
                                </h3>
                                <p>
                                    If you have any questions, concerns, or grievances regarding this
                                    Privacy Policy or the processing of personal data, please contact
                                    our Grievance Redressal Officer at:
                                </p>
                                <p>
                                    <strong>Email:</strong>{' '}
                                    <a
                                        href="mailto:support@arvionservices.com"
                                        className="text-primary hover:underline"
                                    >
                                        support@arvionservices.com
                                    </a>
                                </p>
                            </div>

                            {/* 8 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    8. Governing Law and Jurisdiction
                                </h3>
                                <p>
                                    This Privacy Policy shall be governed by and construed in
                                    accordance with the laws of India. Any disputes arising out of
                                    or in connection with this Privacy Policy shall be subject to
                                    the exclusive jurisdiction of the competent courts at Hyderabad,
                                    Telangana.
                                </p>
                            </div>

                            {/* 9 */}
                            <div>
                                <h3 className="text-2xl font-bold text-text mb-4">
                                    9. Rights of Data Principals (India)
                                </h3>
                                <p>
                                    In accordance with the Digital Personal Data Protection Act, 2023
                                    (“DPDP Act”), individuals whose personal data is processed
                                    (“Data Principals”) have the following rights:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                    <li><strong>Right to Access Information</strong></li>
                                    <li><strong>Right to Correction and Erasure</strong></li>
                                    <li><strong>Right to Withdraw Consent</strong></li>
                                    <li><strong>Right to Grievance Redressal</strong></li>
                                    <li><strong>Right to Nominate</strong></li>
                                </ul>
                                <p className="mt-4">
                                    To exercise these rights, contact us at{' '}
                                    <a
                                        href="mailto:support@arvionservices.com"
                                        className="text-primary hover:underline"
                                    >
                                        support@arvionservices.com
                                    </a>.
                                </p>
                            </div>

                            <hr />

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PrivacyPolicy;
