"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function NetworkBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },  // spread away from cursor
          onClick: { enable: true, mode: "push" },     // click adds particles (optional)
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 240, duration: 0.4 },
          push: { quantity: 2 },
        },
      },


      particles: {
        number: { value: 220, density: { enable: true, area: 900 } },
        color: { value: "#D9C6DB" },
        opacity: { value: 0.55 },
        links: {
          enable: true,
          color: "#B9A3BF",
          distance: 150,
          opacity: 0.45,
          width: 1,
        },
        move: { enable: true, speed: 1.2, outModes: { default: "out" as const} },
        size: { value: { min: 2.5, max: 4 } },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <Particles options={{ ...options, fullScreen: { enable: false }, detectRetina: true }} />
    </div>
  );
}
