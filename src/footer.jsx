import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

function Footer() {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        gsap.fromTo(".logo", {
            rotation: -360,
        }, {
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".logo",
                start: "top 80%",
            },
        });
    }, []);

    return (
        <footer className="footer bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-8 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Grid Structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-zinc-900">
                    
                    {/* Column 1: Brand & Identity */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            {/* Simple clean abstract logo indicator */}
                            <div>
                                <img src="./logo.jpg" alt="Central Belts Logo" className=" logo w-10 h-10 object-contain rounded-3xl" />
                            
                            </div>
                            <span className="font-black text-xl tracking-tight uppercase">
                                Central <span className="text-emerald-500">Belts</span>
                            </span>
                        </div>
                        <p className="text-white text-md font-light leading-relaxed max-w-sm">
                            Jamaica's leading authorities in hydraulics, power transmission, and industrial fluid control supply. Built on a rock-solid foundation of dependability since 1997.
                        </p>
                    </div>

                    {/* Column 2: Product Categories */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">Products</h4>
                        <ul className="space-y-2.5 text-white text-md font-light">
                            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Hoses & Belting</a></li>
                            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Couplings & Fittings</a></li>
                            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Power Transmission</a></li>
                            <li><a href="#products" className="hover:text-emerald-400 transition-colors">Fluid Control Systems</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Corporate Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">Company</h4>
                        <ul className="space-y-2.5 text-md text-white font-light">
                            <li><a href="#about" className="hover:text-emerald-400 transition-colors">Our Journey</a></li>
                            <li><a href="#mentality" className="hover:text-emerald-400 transition-colors">Customer-First Philosophy</a></li>
                            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Technical Support</a></li>
                            <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Fast Emergency Support */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">Quick Actions</h4>
                        <ul className="space-y-2.5 text-sm text-white font-light">
                            <li><a href="#contact" className="hover:text-emerald-400 transition-colors font-medium text-white">Request Custom Quote →</a></li>
                            <li><a href="tel:+18765550197" className="hover:text-emerald-400 transition-colors">Call Main Depot</a></li>
                            <li><span className="text-white block text-sm mt-2">Emergency Breakdown? Reach out directly via our quote portal panels.</span></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Compliance */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white text-md font-light">
                    <div>
                        &copy; {currentYear} Central Belts and Hoses Limited. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
                        <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Sale</a>
                        <a href="#sitemap" className="hover:text-zinc-300 transition-colors">Sitemap</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;