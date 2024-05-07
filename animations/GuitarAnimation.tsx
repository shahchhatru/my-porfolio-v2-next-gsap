'use client'
import { useRef ,useState,useEffect} from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const GuitarAnimation = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    gsap.registerPlugin(useGSAP);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const containerRef=useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        const handleMouseEnter = () => {
          setIsMouseInside(true);
        };
    
        const handleMouseLeave = () => {
          setIsMouseInside(false);
        };
    
        const handleMouseMove = (e:MouseEvent) => {
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

      useGSAP(()=>{
        if(isMouseInside&& containerRef.current){
            gsap.to("path",{attr:{
                d:`M 0 50 Q ${mousePosition.x} ${mousePosition.y}  2550 50`

            },
            duration:4.5,
            ease: "elastic.out(1,0.5)",})
        }else{
            gsap.to("path",{
                attr:{d: "M 0 150  Q 600 150  2550 150" }
            })
        }
      },[isMouseInside,mousePosition])

  return (
    <div ref={containerRef} className='max-w-fit bg-blue-500 overflow-hidden p-0 m-0 border-8 border-red-300'>
      <svg width={windowWidth-20} height='400' className='bg-red-500 overflow-hidden' xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 100 Q 600 50  2550 50" stroke="black" fill="transparent"/>

      </svg>
    </div>
  );
}

export default GuitarAnimation;
