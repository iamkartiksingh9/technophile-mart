'use client';

import {
    LayoutDashboard,
    MessageSquare,
    User,
    CreditCard,
    Truck,
    Ticket,
    Lightbulb,
    Phone,
    MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
        { icon: MessageSquare, label: 'Messages', href: '#' },
        { icon: User, label: 'My Profile', href: '/profile', subtitle: 'Complete your profile' },
        { icon: CreditCard, label: 'Finance', href: '#' },
        { icon: Truck, label: 'Ship With TD', href: '/ship-with-technophile' },
        { icon: Ticket, label: 'My Tickets', href: '#' },
        { icon: Lightbulb, label: 'Any Suggestion', href: '#' },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-[calc(100vh-64px)] sticky top-16 overflow-y-auto shrink-0">
            {/* User Profile Summary */}
            <div className="p-6 flex items-center gap-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                    U
                </div>
                <div>
                    <h3 className="font-bold text-gray-800">User</h3>
                    <p className="text-xs text-gray-500">9876543210</p>
                    <p className="text-xs text-green-600 flex items-center gap-1">Pune <span>✎</span></p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4">
                <ul className="space-y-1">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors border-l-4
                                    ${isActive
                                            ? 'border-purple-600 text-purple-700 bg-purple-50'
                                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <item.icon size={20} className={isActive ? 'text-purple-600' : 'text-gray-400'} />
                                    <div className="flex flex-col">
                                        <span>{item.label}</span>
                                        {item.subtitle && (
                                            <span className={`text-[10px] font-normal ${isActive ? 'text-orange-600' : 'text-orange-500'}`}>{item.subtitle}</span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Support Section */}
            <div className="p-4 mt-auto">
                <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
                        <Phone size={18} className="text-green-600" />
                        <h3>Need Help?</h3>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Call: 096-9696-9696</p>
                    <button className="w-full bg-[#00a699] text-white py-2 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#008f84] transition-colors">
                        <MessageCircle size={18} />
                        Chat With Us
                    </button>
                </div>
            </div>
        </aside>
    );
}
