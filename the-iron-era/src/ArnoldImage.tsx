import gsap from "gsap"
import { useEffect, useRef } from "react"
export const ArnoldImg = () => {
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (imgRef.current){
            gsap.fromTo(imgRef.current,{
                opacity:0,
                scale:0.4,
                y:200,
            },
            {
                opacity:1,
                scale:1,
                y:0,
                duration:1,
                ease:"power2.in",
                delay:0.5,
            }
            )
        }
    },[])
        return (
        <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none">
            <img ref={imgRef} src="/Hero/Arnold.png"
        alt="Arnold Schwarzenegger stands in black posing trunks, displaying his muscular physique with a composed, confident expression. He is isolated against a transparent background."
className="max-h-[90vh] w-auto max-w-full object-contain" />
</div>
    )
}