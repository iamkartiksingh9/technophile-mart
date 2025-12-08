'use client';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Package, Truck, Clock, Search, Filter } from 'lucide-react';

export default function MyOrdersPage() {
    return (
        <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
            <Header />
            <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
                <Sidebar />
                <div className="flex-1 flex flex-col min-w-0 p-4 md:p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Package size={28} className="text-purple-600" />
                        My Orders
                    </h1>

                    {/* Filter Bar */}
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="relative flex-1 w-full md:max-w-md">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by Order ID, Product Name"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm outline-none focus:border-purple-500"
                            />
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50 text-gray-600">
                                <Filter size={16} /> Filter
                            </button>
                            <select className="px-4 py-2 border border-gray-200 rounded-md text-sm outline-none text-gray-600 bg-white">
                                <option>Last 30 Days</option>
                                <option>Last 6 Months</option>
                                <option>2024</option>
                            </select>
                        </div>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-4">
                        {/* Empty State Mockup if needed, but let's show one mock order */}
                        {[1, 2].map((order) => (
                            <div key={order} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                                <div className="flex flex-col md:flex-row justify-between mb-4 pb-4 border-b border-gray-100">
                                    <div className="mb-2 md:mb-0">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Order Placed</span>
                                        <p className="text-sm font-semibold text-gray-800">5 December 2025</p>
                                    </div>
                                    <div className="mb-2 md:mb-0">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Total</span>
                                        <p className="text-sm font-semibold text-gray-800">₹ 45,000.00</p>
                                    </div>
                                    <div className="mb-2 md:mb-0">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Ship To</span>
                                        <p className="text-sm font-semibold text-blue-600 cursor-pointer">User</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Order # 405-99812</span>
                                        <div className="flex gap-2 justify-end mt-1">
                                            <a href="#" className="text-sm text-blue-600 hover:underline">Invoice</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-24 h-24 bg-gray-100 rounded-md shrink-0 flex items-center justify-center text-gray-400">
                                        <Package size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-lg mb-1">Industrial Hydraulic Pump Station</h3>
                                        <p className="text-sm text-gray-500 mb-2">Sold by: <span className="text-blue-600 font-medium">TechnoFluids Pvt Ltd</span></p>
                                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                            <Truck size={16} />
                                            <span>Arriving by 10 Dec</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className="px-6 py-2 bg-[#00a699] text-white rounded-md text-sm font-semibold hover:bg-[#008f84]">Track Package</button>
                                        <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-md text-sm font-semibold hover:bg-gray-50">Buy Again</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
