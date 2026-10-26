import gsap from "gsap"
import { FilmGrain } from "./Effects/FilmGrain"
import { YoungArnoldImg } from "./YoungArnoldImg"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger);
export const TheFirstSpark = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        if (!headingRef.current || !sectionRef.current) return;
        const animation = gsap.fromTo(headingRef.current,{
            opacity:0,
            y:50,
        },
        {
            opacity:1,
            duration:1,
            ease:"power2.inOut",
            y:0,
            scrollTrigger:{
                trigger:sectionRef.current,
                toggleActions: "play none none reset",
                start: "top 100%",
                 end: "top 10%",
                scrub:2,

            }
        })
        return () => {
            animation.kill();
            animation.scrollTrigger?.kill();
        }
    },[])
    return (
        <section 
        className="relative min-h-screen w-full overflow-hidden bg-iron-bg "
        ref={sectionRef}
        >
            <FilmGrain />
            
  <div className="grid min-h-screen grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:px-16">
    
                <div className="h-[550px] overflow-hidden">
                    
                    <YoungArnoldImg />
                    
                </div>
            <div 
            className="max-w-2xl">
            <p
            className="mb-4 text-sm font-display text-iron-accent tracking-[0.3em]">
                CHAPTER 01 — MILITARY DISCIPLINE
                </p>
            <h2
            className="font-iron-display text-5xl font-bold text-white md:text-7xl"
            ref={headingRef}
            >
                FORGED THROUGH DISCIPLINE
            </h2>
            <p
            className="mt-8 max-w-[60ch] text-neutral-400 leading-relaxed"
            >
                In 1965, Arnold Schwarzenegger began his compulsory military service in the Austrian Army. While fulfilling his duties, he continued pursuing bodybuilding with remarkable determination. That same year, he competed in and won the Junior Mr. Europe title, taking an important step toward the career he envisioned.
            </p>
            </div>
            </div>
        </section>
    )
}