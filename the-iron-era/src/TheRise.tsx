import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { ArnoldPrimeImg } from "./ArnoldPrimeImg";
import { SpotLight } from "./components/Spotlight";
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
      repeatDelay:2,
    }
  );

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}, []);
    return (
    <section
    className="relative flex items-center p-20 min-h-screen bg-iron-bg overflow-hiddden"
    ref={sectionRef}
    >
        <SpotLight />
            
        <div
        className="w-[500px] shrink-0"
        >
        
        <p
        className="font-display text-iron-accent tracking-[0.3em]"
        >
            CHAPTER-01 — THE RISE
        </p>
        <h2
        className="font-display text-5xl font-bold text-white md:text-7xl"
        >
            RISE TO {""}
            <strong ref={fameRef} className="text-iron-accent fame-shine">
                FAME
             </strong>
        </h2>
        <p
        className="mt-8 max-w-[60ch] text-neutral-400 leading-relaxed"
        >
            In 1967, at just 20 years old, Arnold Schwarzenegger achieved a defining milestone in his bodybuilding career: winning the NABBA Mr. Universe title in London.
            What began as an ambitious dream in a small Austrian village was becoming reality. His extraordinary physique, relentless dedication, and determination were beginning to attract international attention.
            But for Arnold, this victory was not the destination. It was only the beginning.
        </p>
        </div>
        <div className="relative flex flex-1 justify-center items-end">
        <ArnoldPrimeImg />
        </div>
    </section>
    
    )
}