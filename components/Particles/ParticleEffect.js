"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

/**
 * General-purpose particle effect renderer.
 * Takes an ID and particle config options.
 */
const ParticleEffect = ({ id, options }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Initialize the tsParticles engine with full package
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  // Don’t render until the engine is ready
  if (!init) return null;

  return <Particles id={id} options={options} />;
};

export default ParticleEffect;
