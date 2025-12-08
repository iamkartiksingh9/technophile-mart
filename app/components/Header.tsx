'use client';

import Link from 'next/link';
import {
    Search,
    MapPin,
    MessageSquare,
    Briefcase,
    User,
    HelpCircle,
    ChevronDown,
    Home,
    FileText,
    ShieldCheck,
    Book,
    Package,
    Clock,
    Settings,
    Banknote,
    Truck,
    Smartphone,
    LogOut,
    X
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <header className="bg-[#2e0f59] text-white h-16 flex items-center justify-between px-4 sticky top-0 z-50 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/technophile-logo.png" alt="Technophile Den" className="h-8 object-contain bg-black/20 rounded p-1" />
                    <span className="font-bold text-xl tracking-tight hidden md:block">Technophile Den</span>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                <div className="flex w-full bg-white rounded-md overflow-hidden text-gray-700">
                    <button className="flex items-center gap-1 px-3 bg-gray-100 border-r border-gray-300 text-sm">
                        <MapPin size={16} />
                        <span>Pune</span>
                    </button>
                    <input
                        type="text"
                        placeholder="Enter product / service"
                        className="flex-1 px-4 py-2 outline-none text-sm"
                    />
                    <button className="bg-blue-600 text-white px-6 font-semibold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
                        <Search size={18} />
                        Search
                    </button>
                </div>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center gap-6 text-sm font-medium relative">
                <Link href="#" className="flex flex-col items-center gap-1 hover:text-gray-200">
                    <Briefcase size={20} />
                    <span className="hidden md:inline">Sell</span>
                </Link>
                <Link href="#" className="flex flex-col items-center gap-1 hover:text-gray-200">
                    <MessageSquare size={20} />
                    <span className="hidden md:inline">Messages</span>
                </Link>
                <Link href="#" className="flex flex-col items-center gap-1 hover:text-gray-200">
                    <HelpCircle size={20} />
                    <span className="hidden md:inline">Help</span>
                </Link>

                {/* User Profile Dropdown Trigger */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex flex-col items-center gap-1 hover:text-gray-200 focus:outline-none"
                    >
                        <div className="flex items-center gap-1">
                            <User size={20} />
                            <ChevronDown size={14} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <span className="hidden md:inline">Hi User</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute right-0 top-full mt-3 w-72 bg-white rounded-lg shadow-xl text-gray-800 border border-gray-100 overflow-hidden text-left z-50">
                            {/* User Header */}
                            <div className="p-4 border-b border-gray-100 bg-gray-50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">User</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm text-gray-600 font-medium">9876543210</span>
                                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded flex items-center gap-1 font-semibold">
                                                <ShieldCheck size={10} /> Verified
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/profile" className="text-blue-600 text-xs font-semibold mt-2 inline-flex items-center gap-1 hover:underline">
                                    ✎ View Profile
                                </Link>
                            </div>

                            {/* Menu Items */}
                            <div className="py-2">
                                <MenuItem icon={Home} label="Home" href="/" />
                                <MenuItem icon={FileText} label="Post Your Requirement" href="/post-requirement" />
                                <MenuItem icon={ShieldCheck} label="Verified Business Buyer" href="#" />
                                <MenuItem icon={Book} label="Products/Services Directory" href="#" />
                                <MenuItem icon={Package} label="My Orders" href="/orders" />
                                <MenuItem icon={Clock} label="Recent Activity" href="#" />
                                <MenuItem icon={Settings} label="Settings" href="/settings" tag="NEW" />
                                <div className="my-1 border-t border-gray-100"></div>
                                <MenuItem icon={Banknote} label="Business Loans" href="#" tag="NEW" tagColor="text-yellow-700 bg-yellow-100" />
                                <div className="my-1 border-t border-gray-100"></div>
                                <MenuItem icon={Truck} label="Ship With Technophile Den" href="/ship-with-technophile" subtitle="Easy booking of transport" />
                                <MenuItem icon={Smartphone} label="Download App" href="#" />
                                <div className="my-1 border-t border-gray-100"></div>
                                <Link href="/signout" className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 font-medium">
                                    <LogOut size={16} className="text-gray-400" />
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

function MenuItem({ icon: Icon, label, href, tag, tagColor = "text-yellow-700 bg-yellow-100", subtitle }: any) {
    return (
        <Link href={href} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700 font-medium group">
            <Icon size={16} className="text-gray-400 group-hover:text-gray-600" />
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <span>{label}</span>
                    {tag && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${tagColor}`}>
                            {tag}
                        </span>
                    )}
                </div>
                {subtitle && (
                    <p className="text-xs text-gray-400 font-normal mt-0.5">{subtitle}</p>
                )}
            </div>
        </Link>
    )
}
