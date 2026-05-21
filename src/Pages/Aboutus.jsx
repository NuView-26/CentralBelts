import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText'; 

gsap.registerPlugin(ScrollTrigger, SplitText);

function Aboutus() {
    const containerRef = useRef(null);

    useEffect(() => {
        
        const ctx = gsap.context(() => {

            const sections = document.querySelectorAll('.about-section');

            sections.forEach((section) => {
                const title = section.querySelector('.animate-title');
                const text = section.querySelector('.animate-text');
                const image = section.querySelector('.animate-image');

                if (title) {
                    const splitTitle = new SplitText(title, { type: 'words' });
                    gsap.from(splitTitle.words, {
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.08,
                        ease: 'power3.out',
                    });
                }

                
                if (text) {
                    const splitText = new SplitText(text, { type: 'lines' });
                    gsap.from(splitText.lines, {
                        scrollTrigger: {
                            trigger: text,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                        y: 30,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.05,
                        ease: 'power2.out',
                    });
                }

                
                if (image) {
                    gsap.fromTo(image, 
                        { opacity: 0, scale: 0.95, y: 30 },
                        {
                            scrollTrigger: {
                                trigger: image,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse',
                            },
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 1.2,
                            ease: 'power2.out'
                        }
                    );
                }
            });

        }, containerRef); 

        return () => ctx.revert(); 
    }, []);

    return (
        <div ref={containerRef} className="w-full min-h-screen bg-zinc-950 text-white px-6 md:px-16 py-20 overflow-hidden flex flex-col gap-32 md:gap-48">
            
            {/* --- SECTION 1: OVERVIEW (Image Left, Text Right) --- */}
            <div className="about-section w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                {/* Image Wrap */}
                <div className="w-full md:w-1/2 h-64 md:h-112.5 overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
                    <img 
                        src="./central.jpg" 
                        alt="About Central Belts and Hoses" 
                        className="animate-image w-full h-full object-cover"
                    />
                </div>

                {/* Text Wrap */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:text-right">
                    <h1 className="animate-title text-4xl md:text-5xl font-bold tracking-tight mb-6 text-emerald-500">
                        What Brought Us Here
                    </h1>
                    
                    <p className="animate-text text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-xl md:ml-auto">
                        <span className="block font-semibold text-white mb-3 text-xl tracking-wide">
                            Over Two Decades of Unmatched Expertise
                        </span>
                        Established in 1997 by Audley Dinnall, Central Belts and Hoses Limited 
                        has grown to become one of Jamaica's leading authorities in hydraulics 
                        and industrial supply. For nearly thirty years, we have built our reputation 
                        on a rock-solid foundation of dependability, technical excellence, and an 
                        unwavering commitment to the businesses and individuals who keep our nation moving.
                    </p>
                </div>
            </div>
        
            {/* --- SECTION 2: MENTALITY (Text Left, Image Right Layout) --- */}
            <div className="about-section w-full flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
                {/* Text Wrap */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                    <h1 className="animate-title text-4xl md:text-5xl font-bold tracking-tight mb-6 text-emerald-500">
                        A Customer-First Mentality
                    </h1>
                    <p className="animate-text text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-xl">
                        We believe that trust isn't given; it is earned through every interaction. 
                        That is why we lead with a customer-first mentality. 
                        Our team of highly trained engineers and dedicated sales professionals possesses the deep industry knowledge required to solve your toughest challenges. 
                        From simple, everyday replacements to complex, custom industrial system designs, 
                        we approach every problem with the same level of precision and care.
                    </p>
                </div>
                
                {/* Image Wrap */}
                <div className="w-full md:w-1/2 h-64 md:h-112.5 overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
                    <img 
                        src="./factory.jpg" 
                        alt="Central Belts Manufacturing Factory" 
                        className="animate-image w-full h-full object-cover"
                    />
                </div>
            </div>

            {/*!-- --- SECTION 3: FUTURE (Image Left, Text Right) --- --*/}
            <div className="about-section w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                {/* Image Wrap */}
                <div className="w-full md:w-1/2 h-64 md:h-112.5 overflow-hidden rounded-xl shadow-2xl bg-zinc-900">
                    <img 
                        src="./belts.jpg" 
                        alt="Central Belts and Hoses Future" 
                        className="animate-image w-full h-full object-cover"
                    />
                </div>

                {/* Text Wrap */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:text-right">
                    <h1 className="animate-title text-4xl md:text-5xl font-bold tracking-tight mb-6 text-emerald-500">
                        Our Vision for the Future
                    </h1>
                    <p className="animate-text text-base md:text-lg text-zinc-300 leading-relaxed font-light max-w-xl md:ml-auto">
                        As we look ahead, Central Belts and Hoses Limited remains committed to innovation, sustainability, and delivering exceptional value to our customers. We are continuously investing in cutting-edge technology and expanding our capabilities to meet the evolving needs of the industries we serve.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Aboutus;