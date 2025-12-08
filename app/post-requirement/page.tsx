'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Upload, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export default function PostRequirementPage() {
    const [productName, setProductName] = useState('');

    return (
        <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center p-4 py-12">
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-[#2e0f59] p-6 text-white text-center">
                        <h1 className="text-2xl font-bold mb-2">Post Your Buy Requirement</h1>
                        <p className="opacity-90 text-sm">Get quotes from multiple verified suppliers</p>
                    </div>

                    <div className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Product / Service Name</label>
                                <div className="relative">
                                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="E.g. Industrial Pumps, Web Development Services..."
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Quantity</label>
                                    <input type="text" placeholder="E.g. 100" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none bg-white">
                                        <option>Pieces</option>
                                        <option>Units</option>
                                        <option>Kilograms</option>
                                        <option>Liters</option>
                                        <option>Services</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Requirement Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Describe your requirement in detail..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Attach Files (Optional)</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Upload size={24} className="mb-2" />
                                    <span className="text-sm">Click to upload images or documents</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 p-3 rounded border border-blue-100">
                                <MapPin size={16} className="text-blue-600" />
                                <span>Quotes will be requested for: <strong>Pune, Maharashtra</strong></span>
                            </div>

                            <button className="w-full bg-[#00a699] hover:bg-[#008f84] text-white py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all">
                                Submit Requirement
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
