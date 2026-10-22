import gsap from "gsap";
import { useEffect, useRef } from "react";
export const IntroCurtain = () => {
    const curtainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!curtainRef.current)return;
            const timeLine = gsap.timeline({
                delay:0.5,
            })
            timeLine.to(curtainRef.current,{
                rotateY: -35,
    xPercent: 110,
    duration: 2,
    ease: "",
            })
            return () => {
                timeLine.kill();
            }
        
    },[])
  return (
    <div 
    ref={curtainRef}
    className=
    "fixed inset-0 z-[100] overflow-hidden [perspective:1200px]">
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#3B0B10]
          via-[#8B2028]
          to-[#4A1016]
          shadow-2xl
          [transform-origin:right_center]
          [transform-style:preserve-3d]
        "
        >
            <div className="flex justify-center items-center text-center min-h-screen">
        <h1 className="text_gradient bg-[var(--color-iron-gradient)] text-iron-hero font-iron-display animation-text-effect">IRON ERA</h1>
      </div>
        </div>
    </div>
    
    
  );
};