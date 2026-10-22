
export const SmokeEffect = () => {

  return (
    <div 
    
     className="pointer-events-none absolute inset-0 overflow-hidden">
     <video

  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-50 "
  src="/videos/smoke.mp4"
/>
    </div>
  );
};