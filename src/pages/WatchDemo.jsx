/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DemoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const base = import.meta.env.BASE_URL || "/";

  const videos = [
    {
      src: `${base}videos/latest-bypass-emulator.mp4`,
      title: "Bypass Emulator Latest",
    },
    {
      src: `${base}videos/last-month-bypass-emulator.mp4`,
      title: "Bypass Emulator Old",
    },
  ];

  const videoRefs = useRef([]);
  const [rgbArray, setRgbArray] = useState(
    videos.map(() => ({ r: 0, g: 0, b: 0 }))
  );

  const audioCtxRef = useRef(null);
  const analyserRefs = useRef([]);
  const animationFrameRef = useRef(null);
  const sourceRefs = useRef([]);

  // Use ref to track playing state inside animation callback
  const playingRef = useRef(videos.map(() => false));

  useEffect(() => {
    audioCtxRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();

    analyserRefs.current = videos.map(() => {
      const analyser = audioCtxRef.current.createAnalyser();
      analyser.fftSize = 256;
      return analyser;
    });

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  const onVideoPlay = (index) => {
    const audioCtx = audioCtxRef.current;
    if (!audioCtx) return;

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (!sourceRefs.current[index]) {
      const source = audioCtx.createMediaElementSource(
        videoRefs.current[index]
      );
      source.connect(analyserRefs.current[index]);
      analyserRefs.current[index].connect(audioCtx.destination);
      sourceRefs.current[index] = source;
    }

    playingRef.current[index] = true;

    if (!animationFrameRef.current) {
      const dataArrays = analyserRefs.current.map(
        (analyser) => new Uint8Array(analyser.frequencyBinCount)
      );

      const animate = () => {
        const newRgbArray = [...rgbArray];

        analyserRefs.current.forEach((analyser, i) => {
          if (playingRef.current[i]) {
            analyser.getByteFrequencyData(dataArrays[i]);
            const avg =
              dataArrays[i].reduce((a, b) => a + b, 0) / dataArrays[i].length;

            const r = Math.min(255, avg * 1.5);
            const g = Math.min(255, 150 + avg * 0.5);
            const b = Math.min(255, 100 + avg * 0.8);

            newRgbArray[i] = { r, g, b };
          } else {
            // fade out glow when not playing
            newRgbArray[i] = { r: 0, g: 0, b: 0 };
          }
        });

        setRgbArray(newRgbArray);

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  const onVideoPause = (index) => {
    playingRef.current[index] = false;
  };

  return (
    <div className="min-h-screen px-4 pb-24 pt-28 text-white bg-gradient-to-b from-[#0B0B1F] to-[#12122A]">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-16 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎬 Watch Demo Videos
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-2">
        {videos.map((video, idx) => {
          const glow = rgbArray[idx];
          const glowColor = `rgba(${glow.r}, ${glow.g}, ${glow.b}, 0.7)`;

          return (
            <motion.div
              key={video.src}
              className="relative group w-full aspect-video rounded-xl overflow-hidden border border-green-400/20 hover:border-green-400 transition duration-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              style={{
                boxShadow: `0 0 80px 40px ${glowColor}`,
              }}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={video.src}
                controls
                preload="metadata"
                onPlay={() => onVideoPlay(idx)}
                onPause={() => onVideoPause(idx)}
                className="w-full h-full object-cover relative z-10 rounded-xl"
              />
              <div className="absolute top-2 right-2 z-20 bg-black/60 px-3 py-1 text-xs rounded text-green-400 shadow backdrop-blur-sm">
                {video.title}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-white/70 text-sm mb-3">
          Want to see more awesome content?
        </p>
        <a
          href="https://www.youtube.com/@crdyxits"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-400 transition-all shadow-lg"
        >
          🔗 Visit CRDYXITS YouTube Channel
        </a>
      </motion.div>
    </div>
  );
}
