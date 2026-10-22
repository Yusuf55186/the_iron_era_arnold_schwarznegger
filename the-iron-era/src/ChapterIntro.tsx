import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ChapterImage } from "./ChapterImage";
import { SmokeEffect } from "./Effects/SmokeEffect";
gsap.registerPlugin(ScrollTrigger)
export const ChapterIntro = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        if (sectionRef.current && titleRef.current){
             const animation = gsap.fromTo(titleRef.current,{
                opacity:0,
                y:50,
                
                
                
            },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    ease:"power3.in",
                    
                    scrollTrigger:{
                trigger:sectionRef.current,
                 start: "top 80%",
                 end: "top 30%",
                
                scrub:2,
                toggleActions: "play none none reset",
                  
                  
                }
                })
            
             
            
             
            return () => {
                animation.scrollTrigger?.kill()
                animation.kill();
            }
        }
    },[])

return (
    <section className="relative isolate overflow-hidden bg-iron-bg">
        <SmokeEffect />
<div className="flex min-h-screen items-center justify-between gap-12 bg-iron-bg px-16">        
    <section className="flex-col flex w-1/2 justify-center items-center bg-iron-bg text-iron-text" ref={sectionRef}>
        
         <div className="flex flex-col items-start text-left">
                <h2 className="font-iron-display text-iron-accent text-iron-base">Chapter:01</h2>
        <h1 
        ref={titleRef}
        className="font-iron-display text-iron-title leading-[0.95]">
  BEFORE THE LEGEND
</h1>
        <p className="font-iron-body text-iron-accent text py-6 font-bold">Every Legend has a Beginning</p>
        <p className="mt-8 max-w-[60ch] text-neutral-400 leading-relaxed">
Before the seven Mr. Olympia titles, before the roaring crowds and the worldwide recognition, there was a young boy from Austria with an extraordinary ambition.
Born in 1947 in Thal, Austria, Arnold Schwarzenegger discovered bodybuilding at a time when the sport was far from mainstream.
What began as a fascination with strength and physical development gradually became something greater: a vision of transforming not only his body, but his entire future.
Through relentless training, discipline, and an unwavering belief in his ambitions, Arnold began the journey that would eventually redefine modern bodybuilding.
        </p>
        <strong className="mt-4 block text-iron-accent italic">
    **Legends are not born. They are built**.
  </strong>
        </div>
    </section>
    <div className="w-1/2">
    <ChapterImage />
    </div>
    </div>
    </section>
)
}