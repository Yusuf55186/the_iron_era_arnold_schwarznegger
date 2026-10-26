import { FilmGrain } from "./Effects/FilmGrain"
import { YoungArnoldImg } from "./YoungArnoldImg"

export const TheFirstSpark = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-iron-bg ">
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
            className="font-iron-display text-5xl font-bold text-white md:text-7xl">
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