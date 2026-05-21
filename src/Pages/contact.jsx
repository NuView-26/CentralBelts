import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState('quote'); // 'quote' or 'message'

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth reveal for the left contact cards
            gsap.from(".info-tile", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out'
            });

            // Smooth fade/slide up for the form panel
            gsap.from(".form-panel", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-zinc-950 text-white min-h-screen py-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center border-t border-zinc-900">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Header Section */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-2">Get In Touch</h2>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">Connect With Our Technical Team</h1>
                    <p className="text-white text-md mt-4 max-w-xl font-light">
                        Have a complex layout issue or need an exact part number mismatch solved? Reach out or request a precise quote today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Essential Info Tiles */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        
                        <div className="info-tile bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Our Headquarters</h3>
                                <p className="text-white text-md leading-relaxed font-light">
                                    Lot 4 <br /> Michael Manley Drive, Twickenham Park, <br/> Spanish Town, St. Catherine.
                                </p>
                            </div>
                        </div>

                        <div className="info-tile bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25V16.5a2.25 2.25 0 00-2.25-2.25h-1.35c-.638 0-1.27.138-1.85.405l-2.12 1.06a3.373 3.373 0 01-2.86 0l-2.12-1.06a3.373 3.373 0 00-1.85-.405H4.5A2.25 2.25 0 002.25 12V6.75a2.25 2.25 0 002.25-2.25H4.5c.638 0 1.27.138 1.85.405l2.12 1.06a3.373 3.373 0 012.86 0l2.12-1.06c.638-.267 1.27-.405 1.85-.405h2.25A2.25 2.25 0 0022.5 6V4.5a2.25 2.25 0 00-2.25-2.25h-2.25c-.638 0-1.27.138-1.85.405l-2.12 1.06a3.373 3.373 0 01-2.86 0l-2.12-1.06a3.375 3.375 0 00-1.85-.405H2.25z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Direct Assistance</h3>
                                <p className="text-white text-md font-light">Main Phone: +1 (876) 907-5256 <br /> (876) 907-0133 <br/> Fax: (876) 984-7193    </p>
                                <p className="text-white text-md font-light mt-0.5">Support: cbhlaudley@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-tile bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-white mb-1">Operating Hours</h3>
                                <p className="text-white text-md font-light">Monday – Friday: 8:00 AM – 5:00 PM</p>
                                <p className="text-white text-md font-light mt-0.5">Saturday: 9:00 AM – 4:00 PM</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Dynamic Form Panel */}
                    <div className="form-panel lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative">
                        
                        {/* Interactive Form Tabs */}
                        <div className="flex border-b border-zinc-800 mb-8 gap-6">
                            <button 
                                onClick={() => setActiveTab('quote')}
                                className={`pb-4 text-sm font-semibold tracking-wider uppercase border-b-2 transition-all ${activeTab === 'quote' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
                            >
                                Request A Quote
                            </button>
                            <button 
                                onClick={() => setActiveTab('message')}
                                className={`pb-4 text-sm font-semibold tracking-wider uppercase border-b-2 transition-all ${activeTab === 'message' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
                            >
                                Send A Message
                            </button>
                        </div>

                        {/* Interactive Form Elements */}
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase font-semibold tracking-wider text-zinc-400">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase font-semibold tracking-wider text-zinc-400">Email Address</label>
                                    <input type="email" placeholder="john@company.com" className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                                </div>
                            </div>

                            {activeTab === 'quote' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase font-semibold tracking-wider text-zinc-400">Product Category</label>
                                        <select className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer">
                                            <option>Hoses & Conveyor Belting</option>
                                            <option>Couplings, Fittings, & Adapters</option>
                                            <option>Power Transmission (Belts/Sheaves)</option>
                                            <option>Fluid Control Accessories</option>
                                            <option>Other / Custom Specification</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase font-semibold tracking-wider text-zinc-400">Part/Item Number <span className="text-zinc-500 lowercase">(optional)</span></label>
                                        <input type="text" placeholder="e.g., 5VX-100 / WP-250" className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase font-semibold tracking-wider text-zinc-400">
                                    {activeTab === 'quote' ? 'Specifications & Details Requirements' : 'Your Message'}
                                </label>
                                <textarea 
                                    rows={4} 
                                    placeholder={activeTab === 'quote' ? "Please outline required hose lengths, operating pressures, quantities, or specific belt widths..." : "How can our engineering professionals help you today?"}
                                    className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold uppercase tracking-wider text-sm py-4 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-500/10">
                                {activeTab === 'quote' ? 'Submit Quote Request' : 'Submit Secure Message'}
                            </button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ContactSection;