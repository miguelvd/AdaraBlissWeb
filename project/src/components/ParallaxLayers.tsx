import React from 'react';

export const ParallaxLayers = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 parallax-layer-1" />
      <div className="absolute inset-0 bg-[#F25AA3]/10 mix-blend-overlay parallax-layer-2" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent parallax-layer-4" />
    </>
  );
};