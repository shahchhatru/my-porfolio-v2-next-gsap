'use client'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export function TextAnimate() {
    gsap.registerPlugin(useGSAP);
    const containerRef=useRef<HTMLDivElement>(null);

    useGSAP(()=>{
        const container = containerRef.current;
        if (!container) return;

        const texts = container.querySelectorAll<HTMLSpanElement>(".text");
        if (!texts.length) return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        //set initial opacity to 0 for all texts

        gsap.set(texts,{opacity:0,perspective:1000})

        // Add animation for each text
        texts.forEach((text, index) => {
            tl.to(text, { opacity: 1, duration: 1 }); // Fade in
            tl.to(text, { opacity: 0, duration: 1,delay:1 }, `+=${index === texts.length - 1 ? 0 : 1}`); // Fade out
        });

        // Initial play
        tl.play();

        return () => {
            tl.kill(); // Cleanup timeline on unmount
        };

    },[])
    return (
        <div ref={containerRef} className="text-container">
            <span className="text text1 logo">Backend Developer</span>
            <span className="text text2 logo">AI Engineer</span>
            <span className="text text3 logo">Frontend Developer </span>
            <span className="text logo">AWS solutions artitect</span>
        </div>
    )
}