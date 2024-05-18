'use client'
import { useRef, useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import TextShowAnimation from './TextShowAnimation';

const GuitarAnimation = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const robofaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Initialize windowWidth on the client-side

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
      if(robofaceRef.current){
        robofaceRef.current.style.visibility="visible";

      }
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      if(robofaceRef.current){
        robofaceRef.current.style.visibility="hidden";
        //console.log(isMouseInside);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseInside && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setMousePosition({ x: mouseX, y: mouseY });
      }
    };

    window.addEventListener('resize', handleResize);
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseInside]);

  useGSAP(() => {
    if (isMouseInside && containerRef.current && robofaceRef.current) {
      gsap.to("path", {
        attr: {
          d: `M 0 50 Q ${mousePosition.x} ${mousePosition.y}  2550 50`
        },
        duration: 0.5,
        ease: "power.out(1,0.5)"
      });

      gsap.to(robofaceRef.current, {
        x: mousePosition.x - 8, // Adjust the offset of roboface
        y: mousePosition.y - 8, // Adjust the offset of roboface
        // backgroundColor:"#333",
        // color:"#ddd",
        borderRadius:"50%",
        duration: 0.5,
        opacity: 1
      });

      // if (robofaceRef.current) {
      //  // console.log(robofaceRef.current.getBoundingClientRect());
      // }
    } else {
      gsap.to("path", {
        attr: { d: "M 0 150  Q 600 150  2550 150" },
        duration: 2.5,
        ease: "elastic.out(1,0.5)"
      });


     gsap.to(robofaceRef.current , { opacity: isMouseInside?1:0, duration: 0.2 });
    }
  }, [isMouseInside, mousePosition]);

  return (
    <div ref={containerRef} className='max-w-fit min-h-[600px] overflow-hidden p-0 m-0 border-8 border-red-300 relative'>
      <div ref={robofaceRef} id="roboface" className="absolute p-4" style={{width:"fit-content",height:"64px",textAlign:"center",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:isMouseInside?1:0,zIndex:isMouseInside?10:-10,color:"#fff"}}>
      <Icon icon="fluent-emoji:robot" width="32" height="32" />
      <TextShowAnimation isMouseInside={isMouseInside} className='text-black'/>
      </div>
      <svg width={windowWidth} height='400' className='bg-red-500 overflow-hidden' xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 100 Q 600 50  2550 50" stroke="black" fill="transparent" />
      </svg>
    </div>

  );
}

export default GuitarAnimation;
