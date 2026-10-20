import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger)
export const ChapterIntro = () => {
    const sectionRef = useRef<HTMLElement>(null);
   
    useEffect(() => {
        if (sectionRef.current){
             gsap.from(sectionRef.current,{
                opacity:0,
                duration:1,
                trigger:sectionRef.current,
                start:"top:80%",
                y:50
            })
           
            
        }
    },[])

return (
    <section ref={sectionRef}>
        <h1>BEFORE THE LEGEND</h1>
    </section>
)
}