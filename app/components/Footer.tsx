import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-gray-800 font-sans">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Branding Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/technophile-logo.png" alt="Technophiles Den" className="h-10 w-auto brightness-0 invert" />
                            <span className="font-bold text-xl tracking-wide uppercase">Technophiles Den</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs">
                            TECHNOLOGICAL ADVANCEMENT, THE LIGHT OF THE FUTURE
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Facebook} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                            <SocialIcon icon={Twitter} href="#" />
                        </div>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-gray-800 inline-block pb-2">Important Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Models</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-gray-800 inline-block pb-2">Get In Touch</h3>
                        <div className="space-y-6 text-sm text-gray-400">
                            <div className="flex items-start gap-4">
                                <MapPin className="shrink-0 mt-1 text-gray-500" size={18} />
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Technophiles Den Pvt. Ltd.</h4>
                                    <p className="leading-relaxed">
                                        Office No - 8, The Platinum Towers,
                                        First Floor, Old Mundhwa Road,
                                        Kharadi, Pune, 411014.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="shrink-0 mt-1 text-gray-500" size={18} />
                                <div className="space-y-1">
                                    <p>+91 97520 75300</p>
                                    <p>+91 85540 99828</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="shrink-0 mt-1 text-gray-500" size={18} />
                                <p>info@technophilesden.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Location - Map Placeholder */}
                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm border-b-2 border-gray-800 inline-block pb-2">Our Location</h3>
                        <div className="bg-gray-800 rounded-lg overflow-hidden h-48 relative group cursor-pointer">
                            {/* Static Map Image Placeholder - In a real app, use an Embed */}
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="Map Location"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded shadow-lg flex items-center gap-1">
                                    <MapPin size={12} className="text-red-500" />
                                    View on Google Maps
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>Copyright © 2025 Technophiles Den Pvt. Ltd. — All rights reserved</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon, href }: any) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-gray-800"
        >
            <Icon size={18} />
        </Link>
    )
}
