import { ArnoldImg } from "./ArnoldImage"
export const Hero = () => {
    return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-iron-bg text-iron-text">
        <ArnoldImg />
 <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="font-iron-display text-[clamp(8rem,19vw,22rem)] text-iron-hero leading-none tracking-tight -translate-y-64">
          ARNOLD
        </h1>
      </div>
</section>
    )
}