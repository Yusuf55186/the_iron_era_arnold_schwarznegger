import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const TheRise = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const fameRef = useRef<HTMLElement>(null);

    useEffect(() => {
  if (!sectionRef.current || !fameRef.current) return;

  const animation = gsap.fromTo(
    fameRef.current,
    {
      backgroundPosition: "100% 0%",
    },
    {
      backgroundPosition: "0% 0%",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none infinite reverse",
      },
      repeat:-1,
      repeatDelay:1,
    }
  );

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}, []);
    return (
    <section
    className="relative flex items-center p-10 min-h-screen bg-iron-bg overflow-hiddden"
    ref={sectionRef}
    >
        <div
        className="w-[500px]"
        >
        
        <p
        className="font-display text-iron-accent tracking-[0.3em]"
        >
            CHAPTER-01 — THE RISE
        </p>
        <h2
        className="font-display text-5xl font-bold text-white md:text-7xl"
        >
            RISE TO
            <strong ref={fameRef} className="text-iron-accent fame-shine">
                FAME
             </strong>
        </h2>
        <p
        >
            
        </p>
        </div>
    </section>
    
    )
}