'use client';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Settings, Bell, Lock, User, Eye, Globe } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
            <Header />
            <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0 p-4 md:p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Settings size={28} className="text-gray-600" />
                        Account Settings
                    </h1>

                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                            {/* Sidebar for Settings */}
                            <div className="p-4 bg-gray-50">
                                <nav className="space-y-1">
                                    <NavItem icon={User} label="Profile Information" active />
                                    <NavItem icon={Lock} label="Login & Security" />
                                    <NavItem icon={Bell} label="Notifications" />
                                    <NavItem icon={Eye} label="Privacy" />
                                    <NavItem icon={Globe} label="Language & Region" />
                                </nav>
                            </div>

                            {/* Content Area */}
                            <div className="col-span-2 p-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">Personal Information</h2>

                                <form className="space-y-6 max-w-lg">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" defaultValue="User" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" defaultValue="Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" defaultValue="kartikey@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" defaultValue="+91 9876543210" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 outline-none" />
                                    </div>

                                    <div className="pt-4">
                                        <button className="bg-[#2e0f59] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1f0a3d]">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function NavItem({ icon: Icon, label, active }: any) {
    return (
        <button className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${active ? 'bg-white text-purple-700 shadow-sm border border-gray-100' : 'text-gray-600 hover:bg-gray-100'}`}>
            <Icon size={18} />
            {label}
        </button>
    )
}
