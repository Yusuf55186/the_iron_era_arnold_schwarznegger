import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ChapterImage } from "./ChapterImage";
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
<div className="flex min-h-screen items-center justify-between gap-12 bg-iron-bg px-16">        
    <section className="flex-col flex w-1/2 justify-center items-center bg-iron-bg text-iron-text" ref={sectionRef}>
        
         <div className="text-center">
                <h2 className="font-iron-display text-iron-accent text-iron-xl">Chapter:01</h2>
        <h1 className="font-iron-display text-iron-title text-iron-text" ref={titleRef} >BEFORE THE LEGEND</h1>
        <p className="font-iron-body text-neutral-400 text py-6">Every Legend has a Beginning</p>
        <p className="max-w-[60ch] text-left leading-relaxed text-iron-subtle">
Before the seven Mr. Olympia titles, before the roaring crowds and the worldwide recognition, there was a young boy from Austria with an extraordinary ambition.
Born in 1947 in Thal, Austria, Arnold Schwarzenegger discovered bodybuilding at a time when the sport was far from mainstream.
What began as a fascination with strength and physical development gradually became something greater: a vision of transforming not only his body, but his entire future.
Through relentless training, discipline, and an unwavering belief in his ambitions, Arnold began the journey that would eventually redefine modern bodybuilding.

**Legends are not born. They are built.**
        </p>
        </div>
    </section>
    <div className="w-1/2">
    <ChapterImage />
    </div>
    </div>
    
)
}