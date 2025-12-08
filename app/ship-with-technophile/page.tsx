'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Package, Box, MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function ShipWithTechnophilePage() {
    const [activeTab, setActiveTab] = useState('full-truck');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is Ship with Technophile Den?",
            answer: "Ship With Technophile Den is a web based online platform brought to you by India's leading B2B Matchmakers. This platform helps connect people with transportation needs with some of the leading Indian Logistics Service Providers."
        },
        {
            question: "What is Full Truck Load (FTL) transportation and how does it work?",
            answer: "Full Truck Load (FTL) transportation is a shipping method where an entire truck is dedicated to transporting goods from one location to another. This service is ideal for large shipments that can fill the truck's capacity."
        },
        {
            question: "How do I track my shipment?",
            answer: "Once your shipment is booked, you will receive a tracking ID. You can enter this ID on our tracking page to get real-time updates on your shipment's location."
        }
    ];

    const services = [
        { id: 'full-truck', label: 'Full Truck', sub: 'More than 2.5 Tons', icon: Truck },
        { id: 'part-truck', label: 'Part Truck', sub: '30 Kg to 2500 Kg', icon: Truck },
        { id: 'courier', label: 'Courier', sub: 'Less than 30 Kg', icon: Box },
    ];

    return (
        <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Form */}
                <div className="relative bg-[#2e0f59] min-h-[600px] flex flex-col items-center pt-16 px-4">
                    {/* Background Overlay or Image could go here */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>

                    <h1 className="relative text-3xl md:text-4xl font-bold text-white mb-8 z-10">Book Transportation Service</h1>

                    {/* Service Selection Tabs */}
                    <div className="relative z-10 flex gap-4 mb-[-2rem]">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`flex flex-col items-center justify-center w-32 h-28 rounded-t-lg transition-all shadow-lg
                            ${activeTab === service.id
                                        ? 'bg-white text-blue-900 border-t-4 border-blue-600 translate-y-2 pb-2'
                                        : 'bg-white/90 text-gray-600 hover:bg-white mt-4'
                                    }`}
                            >
                                <service.icon size={24} className={activeTab === service.id ? 'text-blue-600 mb-2' : 'text-gray-500 mb-2'} />
                                <span className="font-bold text-sm">{service.label}</span>
                                <span className="text-[10px] opacity-70">{service.sub}</span>
                            </button>
                        ))}
                    </div>

                    {/* Booking Form Card */}
                    <div className="relative z-10 bg-white w-full max-w-4xl rounded-xl shadow-2xl p-8 pt-12 mt-4">
                        <h2 className="text-center font-bold text-gray-800 mb-8">Enter Your Shipment Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
                            {/* Pickup */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Pickup City *</label>
                                <div className="relative flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-blue-500">
                                    <input type="text" defaultValue="Pune" className="flex-1 outline-none font-medium text-gray-700" />
                                    <button className="text-gray-400 hover:text-gray-600">×</button>
                                </div>
                                <div className="flex gap-2 mt-2 text-xs">
                                    <span className="text-blue-600 font-semibold">Popular:</span>
                                    <span className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-50 text-gray-500">Mumbai</span>
                                    <span className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-50 text-gray-500">Pimpri Chinchwad</span>
                                </div>
                            </div>

                            {/* Arrow Separator (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 justify-center">
                                <div className="bg-white border border-gray-300 rounded-full p-1.5 shadow-sm z-10">
                                    <ArrowRight size={16} className="text-gray-400" />
                                </div>
                            </div>

                            {/* Drop */}
                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Drop City *</label>
                                <div className="relative flex items-center border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-blue-500">
                                    <input type="text" placeholder="Enter drop city" className="flex-1 outline-none font-medium text-gray-700" />
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                                    <span className="text-blue-600 font-semibold">Popular:</span>
                                    <span className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-50 text-gray-500">Mumbai</span>
                                    <span className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-50 text-gray-500">Pune</span>
                                    <span className="border border-gray-200 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-50 text-gray-500">Delhi</span>
                                </div>
                            </div>
                        </div>

                        {/* Material Weight */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-800 mb-3">Material Weight *</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Upto 3 Ton', '3 to 9 Ton', '9 to 18 Ton', 'More than 18 Ton'].map((weight, i) => (
                                    <label key={i} className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors">
                                        <input type="radio" name="weight" className="accent-blue-600" />
                                        <span className="text-sm text-gray-600">{weight}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button className="bg-[#356c67] hover:bg-[#2a5652] text-white px-12 py-3 rounded-md font-bold text-lg shadow-md transition-transform hover:scale-105">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-2xl font-bold text-center text-gray-500 mb-8">FAQ's</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-purple-900 hover:bg-gray-50"
                                >
                                    <span>{faq.question}</span>
                                    {openFaqIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
