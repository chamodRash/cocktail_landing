import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameCount = 388;
  const images = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const currentFrame = (index) =>
    `/sequences/mojito/frame_${String(index).padStart(4, "0")}.jpg`;

  // ✅ Top-level useGSAP
  useGSAP(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const context = canvasRef.current.getContext("2d");
    const obj = { frame: 0 };

    const render = (index) => {
      const img = images.current[index];
      if (img && context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        context.drawImage(img, 0, 0);
      }
    };

    render(0);

    gsap.to(obj, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
      onUpdate: () => {
        render(obj.frame);
      },
    });
  }, [imagesLoaded]);

  // ✅ Preload images only once
  useEffect(() => {
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
    }
  }, []);

  // ✅ Set canvas size once images are ready
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 960; // match your image width
      canvas.height = 540; // match your image height
    }
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-black/50 text-white">
        Loading animation...
      </div>
    );
  }

  return (
    <div ref={containerRef} className="video flex justify-center items-end">
      <canvas ref={canvasRef} className="block mx-auto" />
    </div>
  );
};

export default ScrollVideo;
