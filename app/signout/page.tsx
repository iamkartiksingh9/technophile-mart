'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignoutPage() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [router]);

    return (
        <div className="min-h-screen bg-[#eff2f5] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">Signed Out Successfully</h1>
                <p className="text-gray-500 mb-8">
                    You have been securely logged out of your Technophile Den account.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/signup"
                        className="block w-full bg-[#2e0f59] text-white py-3 rounded-lg font-semibold hover:bg-[#1f0a3d] transition-colors flex items-center justify-center gap-2"
                    >
                        <LogIn size={18} />
                        Sign In Again
                    </Link>

                    <Link
                        href="/"
                        className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Go to Homepage
                    </Link>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    Redirecting to homepage in {countdown} seconds...
                </p>
            </div>
        </div>
    );
}
