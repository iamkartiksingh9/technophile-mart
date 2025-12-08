'use client';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import {
    Edit,
    FileText,
    TrendingUp,
    MessageSquare,
    Phone,
    ChevronRight,
    Building2,
    Landmark,
    Bell,
    HelpCircle,
    Store,
    Briefcase,
    Shield
} from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
            <Header />
            <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0">

                    {/* Main Profile Content */}
                    <main className="flex-1 p-4 md:p-8">

                        {/* Top Stats Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                            {/* Profile Score Card */}
                            <div className="bg-[#fff9f0] border border-orange-100 rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <TrendingUp size={100} className="text-orange-500" />
                                </div>
                                <div className="relative w-28 h-28 shrink-0">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <path className="text-orange-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                        <path className="text-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="30, 100" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="font-bold text-orange-600 text-xl">30%</span>
                                        <span className="text-[10px] text-gray-400">Score</span>
                                    </div>
                                </div>
                                <div className="z-10">
                                    <h3 className="font-bold text-gray-800 text-lg">Profile Score</h3>
                                    <p className="text-gray-600 text-sm mb-4">Complete your profile to get more visibility and trust.</p>
                                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                                        <ActionBadge label="Add GST" />
                                        <ActionBadge label="Verify Email" />
                                        <ActionBadge label="Add Address" />
                                    </div>
                                    <span className="text-xs text-orange-600 font-semibold cursor-pointer hover:underline flex items-center gap-1">
                                        View missing details <ChevronRight size={12} />
                                    </span>
                                </div>
                            </div>

                            {/* Verified Badge Card */}
                            <div className="bg-[#f0f8ff] border border-blue-100 rounded-xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Shield size={100} className="text-blue-500" />
                                </div>
                                <div className="flex justify-between items-start mb-6 z-10 relative">
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                                            Unlock Verified Badge
                                            <span className="text-blue-500">🛡️</span>
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-1">Build trust with buyers by verifying your business</p>
                                    </div>
                                </div>

                                {/* Progress Steps */}
                                <div className="relative flex items-center justify-between mb-8 px-2 z-10">
                                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -z-10 rounded-full"></div>
                                    <div className="absolute left-0 top-1/2 h-1 bg-blue-500 w-[20%] -z-10 rounded-full"></div>

                                    {[1, 2, 3, 4, 5].map((step, i) => (
                                        <div key={i} className={`w-4 h-4 rounded-full border-4 ${i === 0 ? 'bg-white border-blue-500' : 'bg-gray-100 border-gray-300'}`}></div>
                                    ))}
                                </div>

                                <div className="bg-white rounded-lg p-4 border border-blue-100 flex items-center justify-between z-10 relative shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                            <Briefcase size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Next Step:</p>
                                            <p className="font-bold text-gray-800 text-sm">Add Company Name</p>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-blue-700 hover:shadow-md transition-all">
                                        Complete Now
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* User Details Main Card */}
                        <div className="bg-white rounded-xl shadow-sm p-0 mb-6 overflow-hidden">
                            {/* Cover Photo Area */}
                            <div className="h-32 bg-gradient-to-r from-purple-800 to-indigo-900 relative">
                                <div className="absolute bottom-4 right-4">
                                    <button className="bg-black/30 text-white text-xs px-3 py-1.5 rounded-md hover:bg-black/50 backdrop-blur-sm flex items-center gap-2">
                                        <Edit size={12} /> Edit Cover
                                    </button>
                                </div>
                            </div>

                            <div className="px-6 pb-6 relative">
                                <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12 mb-6">
                                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md z-10">
                                        <div className="w-full h-full rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold border-4 border-white">
                                            U
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-2 md:pt-0">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                                    User
                                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1 border border-green-200">
                                                        Looking for Suppliers
                                                    </span>
                                                </h1>
                                                <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                                                    <span className="flex items-center gap-1"><span className="text-gray-400">📍</span> Pune, Maharashtra</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>Member since <span className="font-semibold text-gray-800">5 Months</span></span>
                                                </p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="text-sm text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                                    Public Profile
                                                </button>
                                                <button className="text-sm bg-[#00a699] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#008f84] transition-colors shadow-sm">
                                                    Edit Profile
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
                                    <StatCard icon={FileText} label="Enquiries Posted" value="2" color="text-blue-600" bg="bg-blue-50" />
                                    <StatCard icon={TrendingUp} label="BuyLeads Posted" value="0" color="text-green-600" bg="bg-green-50" />
                                    <StatCard icon={MessageSquare} label="Supplier Replies" value="0" color="text-purple-600" bg="bg-purple-50" />
                                    <StatCard icon={Phone} label="Calls Received" value="0" color="text-orange-600" bg="bg-orange-50" />
                                </div>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DetailCard
                                title="Contact Information"
                                subtitle="Phone, Email, Address"
                                icon={Phone}
                                progress={33}
                            />
                            <DetailCard
                                title="Company Details"
                                subtitle="GST, PAN, Business Type"
                                icon={Building2}
                                progress={43}
                                required
                            />
                            <DetailCard
                                title="Bank Details"
                                subtitle="Account No, IFSC"
                                icon={Landmark}
                                progress={0}
                            />
                            <DetailCard
                                title="Product Preference"
                                subtitle="Preferred Categories"
                                icon={Store}
                                arrowOnly
                            />
                            <DetailCard
                                title="Communication Settings"
                                subtitle="Manage Emails & SMS"
                                icon={Bell}
                                arrowOnly
                            />
                            <DetailCard
                                title="Sell on Technophile Den"
                                subtitle="Register as Seller"
                                icon={Store}
                                arrowOnly
                                highlight
                            />
                        </div>

                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

function ActionBadge({ label }: { label: string }) {
    return (
        <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 flex items-center gap-1 cursor-pointer hover:border-orange-200 hover:text-orange-600 transition-colors">
            <span className="text-orange-500 font-bold">+</span> {label}
        </span>
    )
}

function StatCard({ icon: Icon, label, value, color, bg }: any) {
    return (
        <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className={`w-12 h-12 ${bg} ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <div>
                <h3 className="font-bold text-gray-900 text-xl">{value}</h3>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
            </div>
        </div>
    )
}

function DetailCard({ title, subtitle, icon: Icon, progress, arrowOnly, required, highlight }: any) {
    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden group ${highlight ? 'border border-blue-200 ring-2 ring-blue-50' : ''}`}>
            {required && (
                <span className="absolute top-4 right-8 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">Required</span>
            )}

            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${highlight ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 text-gray-500'}`}>
                        <Icon size={20} />
                    </div>
                    <div>
                        <h4 className={`font-bold text-sm ${highlight ? 'text-blue-700' : 'text-gray-800'}`}>{title}</h4>
                        <p className={`text-xs ${highlight ? 'text-blue-500' : 'text-gray-500'}`}>{subtitle}</p>
                    </div>
                </div>
                {!required && <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />}
            </div>

            {!arrowOnly && (
                <div className="mt-4">
                    <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-gray-400 font-medium">Completion</span>
                        <span className={`${progress > 30 ? 'text-green-600' : 'text-orange-500'} font-bold`}>{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${progress > 30 ? 'bg-green-500' : 'bg-orange-400'}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {highlight && (
                <div className="mt-4">
                    <button className="w-full text-xs font-bold text-blue-600 bg-blue-50 py-2 rounded-lg hover:bg-blue-100 transition-colors">Register Now</button>
                </div>
            )}
        </div>
    )
}
