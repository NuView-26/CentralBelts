import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function Products() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    const products = [
        {
            name: "Hoses & Conveyor Belting",
            image: "./hose.png",
            description: "Heavy-duty industrial & hydraulic hoses built for maximum durability and flow efficiency."
        },
        {
            name: "Couplings, Fittings, & Adapters",
            image: "./coupling.png",
            description: "High-precision leak-proof adapters and industrial couplings to secure your operations."
        },
        {
            name: "Power Transmission",
            image: "./power.png",
            description: "Premium performance V-belts, timing belts, and sheaves for optimal power transfer."
        },
        {
            name: "Fluid Control & Accessories",
            image: "./Fluid.png",
            description: "Robust solenoid valves, manifold systems, and professional air preparation equipment."
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Character-by-character title entry
            const split = new SplitText(titleRef.current, { type: 'chars' });
            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 40,
                stagger: 0.04,
                duration: 0.7,
                ease: 'power4.out',
            });

            
            gsap.from(".cards", {
                scrollTrigger: {
                    trigger: ".grid-container",
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 60,
                rotationX: -15,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert(); 
    }, []);

    return (
        <div ref={containerRef} className="bg-zinc-950 min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h1 
                        ref={titleRef} 
                        className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase"
                    >
                        Our Premium <span className="text-emerald-500">Products</span>
                    </h1>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full opacity-80" />
                </div>
                
                {/* Product Grid Container */}
                <div className=" cards grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className="product-card group relative flex flex-col justify-between w-full max-w-sm bg-linear-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-5 transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] cursor-pointer"
                        >
                            {/* Inner ambient glow background overlay */}
                            <div className="absolute inset-0 bg-linear-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                
                                {/* Image Showcase Container */}
                                <div className="w-full aspect-square bg-white rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4 shadow-xl transition-all duration-500 group-hover:shadow-emerald-950/20">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-105" 
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="grow flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-zinc-100 mb-2 tracking-wide transition-colors duration-300 group-hover:text-emerald-400">
                                            {product.name}
                                        </h2>
                                        <p className="text-md text-white  leading-relaxed font-light">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Interaction Call-To-Action Link */}
                                    <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-400 opacity-70 group-hover:opacity-100 transition-all duration-300">
                                        <span>Explore Category</span> 
                                        <span className="ml-1.5 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Products;