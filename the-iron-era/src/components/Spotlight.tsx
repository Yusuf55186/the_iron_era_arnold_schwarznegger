export const SpotLight = () => {
    return (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none ">
            {/* {Light Beam} */}
<div className="absolute top-0 left-1/2 h-[85vh] w-[65vw] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,244,222,0.10),transparent)] blur-[100px]" />

 <div className="absolute inset-0 bg-[image:var(--iron-spotlight-gradient)] opacity-50" />
      {/* Ambient Glow */}
</div>

     
      </>
    )
}