"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Select once before loading so mobile never downloads the desktop file.
    video.src = window.matchMedia("(max-width: 767px)").matches
      ? "/videos/ciocarlia-mobile.mp4"
      : "/videos/ciocarlia.mp4";
  }, []);

  return (
    <video
      ref={videoRef}
      width={1920}
      height={1080}
      autoPlay
      muted
      controls
      playsInline
      preload="metadata"
      poster="/videos/ciocarlia-poster.jpg"
      aria-label="Videoclip Ciocârlia"
      className="absolute inset-0 h-full w-full object-cover"
    >
      Browserul tău nu acceptă redarea video.{" "}
      <a href="/videos/ciocarlia.mp4">Descarcă videoclipul</a>.
    </video>
  );
}
