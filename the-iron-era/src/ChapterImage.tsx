import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export const ChapterImage = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        if (imgRef.current){
        const imgAnimation = gsap.fromTo(imgRef.current,{
                opacity:0,
                y:200,
            },
            {

                opacity:1,
                y:0,
                
                duration:1,
                ease:"power3.out",
                delay:0.5,
                scrollTrigger:{
                    trigger:imgRef.current,
                    toggleActions:"play,none,none,reset",
                    start:"top 80%",
                    end: "top 20%",
                    scrub:4,
                }        
        })
         return () => {
            imgAnimation.kill();
        }
        }
       
    },[])
    return (
        
        <img src="Hero/Preacher Curl Machine Arnold.png"
        ref={imgRef}
        alt="Arnold Scharznegger traning biceps with his Gymmate Dorian Yates. Pushing till failure on the Preacher Curl Machine"
className="max-h-[90vh] object-contain border border-iron-border " />

    )
}