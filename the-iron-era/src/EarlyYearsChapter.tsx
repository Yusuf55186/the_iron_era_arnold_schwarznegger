import { useEffect, useRef } from "react"
import { AustriaVillageImg } from "./components/AustriaVillageImg"
import { FilmGrain } from "./Effects/FilmGrain"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export const EarlyYearsChapter = () => {
    const bgImgRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if(bgImgRef.current){
            const animation = gsap.fromTo(bgImgRef.current,{
                y:0,
            },
            {
                y:100,
                duration:1,
                scrollTrigger:{
                    trigger:sectionRef.current,
                    scrub:true,
                }
            })
            return () => {
                animation.kill();
                animation.scrollTrigger?.kill()
            }
        }
    },[])
    
    return (
         <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-iron-surface">
  <div className="absolute inset-0 scale-125"
  ref={bgImgRef}
  >
    <AustriaVillageImg />
  </div>

  <FilmGrain />
  <div className="relative z-10 flex min-h-screen items-center px-8 md:px-20">
  <div className="max-w-2xl">
    <p className="mb-4 text-sm tracking-[0.3em] text-iron-accent font-display">
      CHAPTER 01 / EARLY YEARS
    </p>

    <h2 className="font-serif text-5xl font-bold text-white md:text-7xl">
      1947 — THAL, AUSTRIA
    </h2>

    <p className="mt-6 text-xl text-neutral-200 font-iron-body">
      Before the world knew his name, there was a boy with a dream
      far bigger than the village he called home.
    </p>
  </div>
</div>
</section>
    )
}