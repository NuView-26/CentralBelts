import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText)



function Belts() {
    useEffect(() => {
        const split = new SplitText("#subheading", { type: "words" });

        gsap.from(split.words, {
          opacity: 0,
          y:50 ,
          stagger: 0.05,
          duration: 1,
          ease: "power2.out",
        });

    }, []);

    return (

        <div className="relative w-full min-h-screen overflow-hidden bg-zinc-950 flex flex-col justify-center px-8 md:px-20">

            {/* Background Video with Overlay */}
            <video
                src="https://github.com/Dwaynewisdom/Portfolio-New/raw/refs/heads/omit/Video/0520(1).mp4"
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            ></video>


            <div className="absolute top-0 left-0 w-full h-full from-black/80 to-transparent z-0"></div>

            {/* Hero */}
            <div className="relative z-10 max-w-5xl flex flex-col gap-6 mt-12">


                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none max-w-3xl">
                    Central <span className="text-green-500">Belts</span> And <span className="text-green-500">Hoses</span>
                </h1>


                <h2 id="subheading" className="text-xl md:text-3xl font-bold text-white tracking-wide max-w-2xl">
                    Driving Jamaican Industry with Power, Precision, and Trust.
                </h2>


                <p id="paragraph" className="text-zinc-300 text-sm md:text-lg leading-relaxed max-w-2xl drop-shadow">
                    Established in 1997, Central Belts and Hoses Limited delivers premium hydraulics,
                    heavy-duty industrial belts, hoses, and engineering solutions backed by an expert
                    team dedicated to keeping your operations moving smoothly.
                </p>


                <div className="mt-4 flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold uppercase tracking-wider text-sm rounded transition-all shadow-lg">
                        Our Products
                    </button>
                    <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold uppercase tracking-wider text-sm rounded border border-white transition-all">
                        Request Quote
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Belts;