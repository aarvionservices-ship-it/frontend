import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    Users,
    Briefcase,
    MessageSquare,
    LogOut,
    Menu,
    X,
    BarChart3,
    PlusCircle
} from 'lucide-react';

interface SidebarItem {
    name: string;
    path: string;
    icon: React.ReactNode;
    roles: string[];
}

const sidebarItems: SidebarItem[] = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <LayoutDashboard size={20} />,
        roles: ['super-admin', 'admin']
    },
    {
        name: 'Analytics',
        path: '/admin/analytics',
        icon: <BarChart3 size={20} />,
        roles: ['super-admin', 'admin']
    },
    {
        name: 'User Management',
        path: '/admin/users',
        icon: <Users size={20} />,
        roles: ['super-admin']
    },
    {
        name: 'Content Management',
        path: '/admin/content',
        icon: <Briefcase size={20} />,
        roles: ['super-admin', 'admin']
    },
    {
        name: 'About Management',
        path: '/admin/about',
        icon: <Users size={20} />, // Reusing icon or specific one if available
        roles: ['super-admin', 'admin']
    },
    {
        name: 'Site Settings',
        path: '/admin/settings',
        icon: <BarChart3 size={20} />,
        roles: ['super-admin']
    },
    {
        name: 'Contact Inbox',
        path: '/admin/inbox',
        icon: <MessageSquare size={20} />,
        roles: ['super-admin', 'admin']
    },
    {
        name: 'Contact Inbox',
        path: '/hr/contact',
        icon: <MessageSquare size={20} />,
        roles: ['hr']
    },
    {
        name: 'Dashboard',
        path: '/hr/dashboard',
        icon: <BarChart3 size={20} />,
        roles: ['hr']
    },
    {
        name: 'My Jobs',
        path: '/hr/jobs',
        icon: <Briefcase size={20} />,
        roles: ['hr']
    },
    {
        name: 'Post New Job',
        path: '/hr/jobs/new',
        icon: <PlusCircle size={20} />,
        roles: ['hr']
    }
];

const DashboardLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Role-based protection
    if (location.pathname.startsWith('/admin') && !['super-admin', 'admin'].includes(user.role)) {
        return <Navigate to="/hr/dashboard" replace />; // Fallback or Unauthorized page
    }

    if (location.pathname.startsWith('/hr') && !['super-admin', 'admin', 'hr'].includes(user.role)) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Filter items based on role
    const filteredItems = sidebarItems.filter(item =>
        user && item.roles.includes(user.role)
    );

    return (
        <div className="h-screen bg-background flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`
                    flex-shrink-0 z-30 h-full w-64 bg-surface border-r border-white/10 transition-all duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20 lg:w-64'}
                    fixed md:relative
                `}
            >
                <div className="h-full flex flex-col">
                    {/* Logo Area */}
                    <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
                        <span className={`text-xl font-bold text-white whitespace-nowrap overflow-hidden ${!isSidebarOpen && 'md:hidden lg:block'}`}>
                            Aarvion Admin
                        </span>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="flex-1 py-6 px-3 space-y-1">
                        {filteredItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    flex items-center px-3 py-3 rounded-lg transition-colors group
                                    ${location.pathname === item.path ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                                `}
                            >
                                <span className={`${location.pathname === item.path ? 'text-primary' : 'text-gray-400 group-hover:text-white'}`}>
                                    {item.icon}
                                </span>
                                <span className={`ml-3 whitespace-nowrap overflow-hidden transition-all ${!isSidebarOpen && 'md:hidden lg:block'}`}>
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile / Logout */}
                    <div className="p-4 border-t border-white/10">
                        <div className={`flex items-center ${!isSidebarOpen && 'md:justify-center lg:justify-start'}`}>
                            <div className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold mr-3 ${!isSidebarOpen && 'md:mr-0 lg:mr-3'}`}>
                                {user?.name.charAt(0)}
                            </div>
                            <div className={`overflow-hidden transition-all ${!isSidebarOpen && 'md:hidden lg:block'}`}>
                                <p className="text-sm font-medium text-white truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate capitalize">{user?.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className={`mt-4 w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-red-400 transition-colors ${!isSidebarOpen && 'md:hidden lg:flex'}`}
                        >
                            <LogOut size={16} className="mr-2" />
                            Log Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Mobile Header */}
                <header className="md:hidden h-16 bg-surface border-b border-white/10 flex items-center px-4 justify-between">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-white">
                        <Menu size={24} />
                    </button>
                    <span className="text-lg font-bold text-white">Dashboard</span>
                    <div className="w-8"></div> {/* Spacer */}
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
