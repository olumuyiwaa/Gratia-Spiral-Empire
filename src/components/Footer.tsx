'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-[clamp(1rem,3vw,2rem)]">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img src="/logo1.png" alt="Gratia Spiral Empire" className="w-12 rounded"/>
                            </div>
                            <span className="ml-3 text-xl font-bold">Gratia Spiral Empire</span>
                        </Link>
                        <p className="text-emerald-100 mb-6 max-w-md">
                            Your trusted partner in global commodity trade, connecting Africa's natural wealth to global markets through ethical sourcing and strategic partnerships.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="https://facebook.com/" label="Facebook">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.05C15.67 2.02 14.33 2 13 2C7.48 2 3 6.48 3 12c0 4.84 3.66 8.84 8.34 9.8v-6.93H8.1v-2.87h3.24V9.84c0-3.2 1.92-4.96 4.85-4.96 1.41 0 2.89.25 2.89.25v3.18h-1.63c-1.61 0-2.11.99-2.11 2v2.4h3.59l-.57 2.87h-3.02v6.93C20.34 20.84 24 16.84 24 12c0-5.52-4.48-10-10-10-.33 0-.67.01-1 .05z" fill="currentColor"/>
                                </svg>
                            </SocialLink>
                            <SocialLink href="https://twitter.com/" label="Twitter">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.48 4.48 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.76 2.19 3.04 4.13 3.08A9.01 9.01 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" fill="currentColor"/>
                                </svg>
                            </SocialLink>
                            <SocialLink href="https://instagram.com/" label="Instagram">
                                <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                                </svg>
                            </SocialLink>
                            <SocialLink href="https://t.me/yourtelegramusername" label="Telegram">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.944 4.667a1.5 1.5 0 00-1.62-.217L3.47 11.44c-1.06.44-1.03 1.97.05 2.36l3.44 1.23 2.02 6.38c.29.92 1.48 1.09 1.97.25l2.13-3.57 3.97 2.92c.83.61 2.01.17 2.23-.8l3.13-13.13a1.5 1.5 0 00-.35-1.36zm-3.41 2.02l-8.19 7.16 1.97 6.23 2.13-3.57a1.5 1.5 0 01.97-.67l4.97-.87-1.85-8.28zm-8.19 7.16l-3.44-1.23 11.63-4.84-8.19 7.16z"/>
                                </svg>
                            </SocialLink>
                            <SocialLink href="https://wa.me/1234567890" label="WhatsApp">
                                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.607 1.94 6.563L4 29l7.687-1.97A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.523-5.56-1.51l-.396-.234-4.563 1.17 1.22-4.445-.258-.41A10.91 10.91 0 015.083 15c0-6.025 4.892-10.917 10.917-10.917S26.917 8.975 26.917 15 22.025 25.917 16 25.917zm5.49-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.4.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.34z"/>
                                </svg>
                            </SocialLink>
                        </div>
                    </div>
                    <div className="col-start-4">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-emerald-100">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/export" className="hover:text-white transition-colors">Export & Sourcing</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    {/*<div>*/}
                    {/*    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>*/}
                    {/*    <p className="text-emerald-100 mb-4 text-sm">Subscribe for market updates and industry insights.</p>*/}
                    {/*    <div className="space-y-2">*/}
                    {/*        <input*/}
                    {/*            type="email"*/}
                    {/*            placeholder="Your email"*/}
                    {/*            className="w-full px-3 py-2 bg-white/10 border border-emerald-400 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white"*/}
                    {/*        />*/}
                    {/*        <button className="w-full bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors">*/}
                    {/*            Sign Up*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="border-t border-emerald-500 mt-8 pt-8 text-center text-emerald-100">
                    <p>&copy; 2025 Gratia Spiral Empire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-400 transition-colors"
    >
        {children}
    </a>
);

export default Footer;