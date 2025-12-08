'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Lock } from 'lucide-react';
import { useState } from 'react';

export default function SignupPage() {
    const [mobileNumber, setMobileNumber] = useState('');

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Side: Branding & Benefits */}
            <div className="md:w-1/2 bg-[#2e0f59] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 rounded-full bg-[#00a699] blur-3xl"></div>
                </div>

                <div className="z-10">
                    <Link href="/" className="flex items-center gap-2 mb-12">
                        <img src="/technophile-logo.png" alt="Technophile Den" className="h-10 object-contain bg-white rounded p-1" />
                        <span className="font-bold text-2xl tracking-tight">Technophile Den</span>
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                        Grow your Business with <br /> <span className="text-[#00a699]">Technophile Den</span>
                    </h1>

                    <div className="space-y-6">
                        <BenefitItem text="Connect with verified buyers and sellers" />
                        <BenefitItem text="Post your requirements & get multiple quotes" />
                        <BenefitItem text="Expand your network across India" />
                        <BenefitItem text="24/7 Customer Support assistance" />
                    </div>
                </div>

                <div className="mt-12 text-sm opacity-70 z-10">
                    <p>Trusted by over 1 Lakh+ Businesses</p>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center bg-[#f8f9fa]">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In / Join Now</h2>
                    <p className="text-gray-500 mb-8 text-sm">Enter your mobile number to verify your account</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                            <div className="flex rounded-md shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-purple-600 focus-within:border-transparent transition-all overflow-hidden">
                                <span className="inline-flex items-center px-4 py-3 bg-gray-50 text-gray-500 border-r border-gray-300 font-medium font-mono">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    maxLength={10}
                                    className="flex-1 px-4 py-3 outline-none text-gray-800 font-medium bg-white tracking-widest"
                                    placeholder="Enter 10 digit mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#00a699] hover:bg-[#008f84] text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-md"
                        >
                            Next
                            <ArrowRight size={20} />
                        </button>
                    </form>

                    {/* Trust Badges */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 text-gray-400 text-xs">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck size={16} className="text-green-500" />
                            <span>Secure Information</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Lock size={16} className="text-blue-500" />
                            <span>Private & Confidential</span>
                        </div>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-8">
                        By continuing, you agree to our <a href="#" className="underline hover:text-gray-600">Terms of Service</a> and <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00a699]/20 flex items-center justify-center shrink-0">
                <CheckCircle size={14} className="text-[#00a699]" />
            </div>
            <span className="font-medium">{text}</span>
        </div>
    )
}
