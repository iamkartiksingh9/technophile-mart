'use client';

import { Search, MapPin, ChevronRight, User, Phone, CheckCircle, Store, Smartphone, Calculator, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
    const categories = [
        { name: "Basmati Rice", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", count: "Suppliers from Pune" },
        { name: "Indian Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80", count: "Whole & Powdered" },
        { name: "Cooking Oil", img: "https://images.unsplash.com/photo-1474979266404-74fc27e0126a?w=400&q=80", count: "Mustard, Sunflower..." },
        { name: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&q=80", count: "Farm Fresh" },
        { name: "Fresh Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80", count: "Seasonal Fruits" },
        { name: "Pulses & Grains", img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?w=400&q=80", count: "High Quality" },
    ];

    const topBrands = [
        { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png" },
        { name: "Sany", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sany_logo.svg/2560px-Sany_logo.svg.png" },
        { name: "Atlas Copco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Atlas_Copco_logo.svg/1280px-Atlas_Copco_logo.svg.png" },
        { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Canon_Reflexion_Logo.svg/1280px-Canon_Reflexion_Logo.svg.png" },
    ]

    return (
        <main className="flex-1 p-4 md:p-8 bg-[#eff2f5] overflow-y-auto">
            {/* Search Bar - Content Area */}
            <div className="bg-white p-2 rounded-md shadow-sm mb-6 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-2">
                    <button className="flex items-center justify-between px-4 py-2 bg-gray-50 border border-gray-200 rounded-md md:w-32 text-gray-700">
                        <span className="flex items-center gap-2 text-sm">
                            <MapPin size={16} />
                            Pune
                        </span>
                        <ChevronRight size={16} className="rotate-90 md:rotate-0" />
                    </button>
                    <div className="flex-1 flex bg-white border border-gray-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-purple-200">
                        <input
                            type="text"
                            placeholder="Enter product / service"
                            className="flex-1 px-4 py-2 outline-none text-gray-700"
                        />
                        <button className="bg-purple-600 text-white px-8 font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors">
                            <Search size={20} />
                            <span className="hidden md:inline">Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Promotional Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <PromoCard
                    icon={CheckCircle}
                    iconColor="text-blue-500"
                    iconBg="bg-blue-50"
                    title="Get verified sellers"
                    desc="Tell us your requirement & let our experts find verified sellers for you"
                    btnText="Get verified sellers"
                    btnColor="bg-[#00a699]"
                />
                <PromoCard
                    icon={Store}
                    iconColor="text-green-500"
                    iconBg="bg-green-50"
                    title="Sell on Technophile for free"
                    desc="Reach out to more than 21+ crore buyers. Sell with us."
                    btnText="Start Selling"
                    btnColor="bg-[#00a699]"
                />
                <PromoCard
                    icon={Smartphone}
                    iconColor="text-orange-500"
                    iconBg="bg-orange-50"
                    title="Download our App"
                    desc="Get instant notifications on the go. Download our App Now"
                    btnText="Download Now"
                    btnColor="bg-[#00a699]"
                />
                <PromoCard
                    icon={Calculator}
                    iconColor="text-purple-500"
                    iconBg="bg-purple-50"
                    title="Tally on Mobile"
                    desc="With Live Keeping, SME's can now connect their Tally offline data to mobile app"
                    btnText="Know More"
                    btnColor="bg-[#00a699]"
                />
            </div>

            {/* What Our Buyers Say Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 font-[inter]">What Our Buyers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonials would go here - using placeholders for now as per design pattern */}
                    <TestimonialCard
                        text="Technophile Den has made it convenient for me to search for vendors of electronic appliances right from my office, saving time, cost, and manpower."
                    />
                    <TestimonialCard
                        text="I have been using Technophile Den for my purchases for over 1.5 years now, as it offers the most reasonable prices along with a wide variety of products."
                    />
                    <TestimonialCard
                        text="For my bulk requirements, I easily find suppliers who help me save around 40% on costs while delivering quality items within the guaranteed time."
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {/* Categories Section */}
                <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 font-[inter]">Categories You May Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="flex flex-col border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer group overflow-hidden bg-white">
                                <div className="h-40 w-full overflow-hidden">
                                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="font-bold text-gray-800 text-md">{cat.name}</h3>
                                    <p className="text-xs text-gray-500 mb-4">{cat.count}</p>
                                    <button className="mt-auto w-full bg-[#00a699] text-white py-2 rounded-md font-semibold text-sm hover:bg-[#008f84] transition-colors">
                                        Get Quotes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call Logs / Right Sidebar */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-0 overflow-hidden flex flex-col h-fit">
                    <div className="p-4 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800">Call Logs</h2>
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                            <Phone size={24} />
                        </div>
                        <p className="text-gray-500 text-sm">No recent calls</p>
                    </div>
                </div>
            </div>

            {/* Your Activity Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Your Activity</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ActivityCard
                        label="Enquiry Posted"
                        count="2"
                        color="text-blue-600"
                        bg="bg-blue-500"
                        lightBg="bg-blue-50"
                        icon="📄"
                    />
                    <ActivityCard
                        label="BuyLead Posted"
                        count="0"
                        color="text-green-600"
                        bg="bg-green-500"
                        lightBg="bg-green-50"
                        icon="↗"
                    />
                    <ActivityCard
                        label="Replies"
                        count="0"
                        color="text-green-600"
                        bg="bg-green-500"
                        lightBg="bg-green-50"
                        icon="💬"
                    />
                    <ActivityCard
                        label="Calls"
                        count="0"
                        color="text-orange-600"
                        bg="bg-orange-500"
                        lightBg="bg-orange-50"
                        icon="📞"
                    />
                </div>
            </div>

            {/* Top Brands Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 font-[inter]">Top Brands on Technophile Den</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {topBrands.map((brand, idx) => (
                        <div key={idx} className="w-full h-full flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                            <img src={brand.logo} alt={brand.name} className="max-h-12 max-w-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}

function PromoCard({ icon: Icon, iconColor, iconBg, title, desc, btnText, btnColor }: any) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-full ${iconBg} ${iconColor}`}>
                <Icon size={24} />
            </div>
            <div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed min-h-[40px]">{desc}</p>
            </div>
            <button className={`w-full ${btnColor} text-white py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity mt-auto`}>
                {btnText}
            </button>
        </div>
    )
}

function TestimonialCard({ text }: any) {
    return (
        <div className="border border-gray-100 rounded-xl p-6 relative bg-gray-50/50">
            <Quote className="text-gray-300 absolute top-4 left-4 rotate-180" size={24} />
            <p className="text-gray-600 text-sm italic leading-relaxed pt-6 mb-4">
                "{text}"
            </p>
        </div>
    )
}

function ActivityCard({ label, count, color, bg, lightBg, icon }: any) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between h-40 relative overflow-hidden">
            {/* Decorative Corner Circle */}
            <div className={`absolute top-0 right-0 w-16 h-16 ${lightBg} rounded-bl-full -mr-8 -mt-8`}></div>

            <div className={`w-10 h-10 ${bg} rounded-md flex items-center justify-center text-white text-lg font-bold mb-4 shadow-sm`}>
                {icon}
            </div>
            <div>
                <h3 className="text-3xl font-bold text-gray-800">{count}</h3>
                <p className="text-sm text-gray-500 text-left">{label}</p>
            </div>
        </div>
    )
}
