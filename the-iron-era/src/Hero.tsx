import { ArnoldImg } from "./ArnoldImage"
import {useEffect, useRef } from "react";
import { gsap } from 'gsap'


export const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);

     useEffect(() => {
        if (headingRef.current){
            const animation = gsap.fromTo(headingRef.current, {
                
                opacity: 0,
                
                y:200,
                filter:'blur(10px)',
                
                 
               
            },
            {
                opacity:1,
                duration:1,
            
                 ease: "power2.out",
                 y:0,
                 filter: 'blur(0px)',
                
            
                 
            })
          
            

           
                

            return () => {
                animation.kill();
                
           }
        }
     },[])
    return (
       
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-iron-bg text-iron-text">
        
    <ArnoldImg />
    
 <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <h1  ref={headingRef} className="font-iron-display text-[clamp(8rem,19vw,22rem)] text-iron-hero leading-none tracking-tight">
            
          ARNOLD
        </h1>
      </div>
</section>
    )
}