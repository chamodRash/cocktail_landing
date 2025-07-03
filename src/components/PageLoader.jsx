import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed noisy inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-yellow text-center">
      {/* <img
            src="/images/logo.png"
            alt="Logo"
            className="w-24 mb-6 animate-bounce"
        /> */}
      <div className="text-7xl tracking-widest font-modern-negra">
        Velvet Pour
      </div>
      <div className="text-lg mb-16 font-normal font-serif tracking-wide">
        Shaking up Your Experience . . .
      </div>
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          className="animate-spin"
          width="128"
          height="128"
          viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="#e7d393"
            strokeWidth="8"
            fill="none"
            strokeDasharray="88 176"
          />
        </svg>
        <img
          src="/images/drink2.png"
          alt="Cocktail"
          className="absolute w-16 h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        className="absolute left-0 bottom-0"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        className="absolute right-0 top-0"
      />
    </div>
  );
};

export default PageLoader;
