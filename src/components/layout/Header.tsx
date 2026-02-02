import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../common/ThemeToggle';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Our Services',
            path: '/services',
            dropdown: [
                { name: 'Back Office Support', path: '/services/back-office-support' },
                { name: 'Financial Services', path: '/services/financial-services' },
                { name: 'Customer Support', path: '/services/customer-support' },
                { name: 'Admission Help Centre', path: '/services/admission-help-centre' },
                { name: 'IT Support & Outsourcing', path: '/services/it-support-outsourcing' },
            ]
        },
        {
            name: 'Staffing Solutions',
            path: '/staffing',
            dropdown: [
                { name: 'IT Staffing', path: '/staffing/it-staffing' },
                { name: 'Professional Staffing', path: '/staffing/professional-staffing' },
                { name: 'Healthcare Staffing', path: '/staffing/healthcare-staffing' },
                { name: 'Recruitment & Account Management', path: '/staffing/recruitment-account-management' },
                { name: 'Global Payrolling', path: '/staffing/global-payrolling' },
            ]
        },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-surface/90 backdrop-blur-md py-4 shadow-lg border-b border-border/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter text-text border-2 border-primary px-2 py-1 relative overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-primary/10 transition-transform transform translate-x-full group-hover:translate-x-0 duration-300"></span>
                    <span className="relative z-10 text-text group-hover:text-primary transition-colors duration-300">AARVION</span>
                    <span className="relative z-10 text-primary group-hover:text-text transition-colors duration-300">SERVICES</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-primary flex items-center ${location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-text hover:text-text'
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="ml-1" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-surface border border-border rounded-xl shadow-xl overflow-hidden py-2"
                                        >
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-4 py-3 text-sm text-text-muted hover:bg-primary/5 hover:text-primary transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    <div className="border-l border-border h-6 mx-4"></div>
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="text-text"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-surface border-t border-border"
                >
                    <div className="container-custom py-6 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                <Link
                                    to={link.path}
                                    className={`text-lg font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-primary' : 'text-text'}`}
                                    onClick={() => !link.dropdown && setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-border ml-2">
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="text-text-muted hover:text-primary text-sm"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
