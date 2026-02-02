
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 relative z-10">
                {/* Brand */}
                <div className="lg:col-span-1">
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                        AARVION<span className="text-primary">SERVICES</span>
                    </Link>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        A diversified service-based company delivering modern, reliable and efficient solutions across multiple domains. Specializing in back-office, financial services, IT support, and more.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300">
                            {/* X (formerly Twitter) Logo */}
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-label="X (formerly Twitter)">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                        Quick Links
                        <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul className="space-y-3">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Careers', path: '/careers' },
                            { name: 'Contact Us', path: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                        Our Services
                        <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul className="space-y-3">
                        {[
                            'Back Office Support',
                            'Financial Services',
                            'Customer Support',
                            'Admission Help Centre',
                            'IT Support & Outsourcing'
                        ].map((item) => (
                            <li key={item}>
                                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                        Legal
                        <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter & Contact */}
                <div>


                    <h4 className="text-white font-medium mb-4">Contact Info</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors">
                            <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">Financial District, Hyderabad,<br />Telangana, India - 500008</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                            <Phone size={18} className="text-primary flex-shrink-0" />
                            <span className="text-sm">+91-7060638863</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                            <Mail size={18} className="text-primary flex-shrink-0" />
                            <span className="text-sm">info@aarvionservices.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container-custom pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Aarvion Services India Pvt. Ltd. All rights reserved.</p>
                </div>
                <div>
                    <p className="flex items-center gap-1">
                        Developed by
                        <a
                            href="https://semixon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors font-medium"
                        >
                            Semixon Technologies
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
