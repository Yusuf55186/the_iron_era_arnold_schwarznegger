import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SceneTransitionProps = {
  children: React.ReactNode;
};

export const SceneTransition = ({ children }: SceneTransitionProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const animation = gsap.fromTo(
      sceneRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return <div ref={sceneRef}>{children}</div>;
};