import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)
export const ChapterIntro = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        if (sectionRef.current && titleRef.current){
             const animation = gsap.fromTo(titleRef.current,{
                opacity:0,
                y:50,
                scrollTrigger:{
                trigger:sectionRef.current,
                start:"top 80%",
                  toggleActions: "play none none reset",
                
                }
             },
             {
                opacity:1,
                duration:1,
                y:0,  
            })
            return () => {
                animation.scrollTrigger?.kill()
                animation.kill();
            }
        }
    },[])

return (
    <section ref={sectionRef}>
        <h1 ref={titleRef}>BEFORE THE LEGEND</h1>
    </section>
)
}