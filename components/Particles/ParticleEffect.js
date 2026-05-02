"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleEffect = ({ id, options }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div
      style={{
        opacity: init ? 1 : 0,
        transition: "opacity 1.2s ease-in",
      }}
    >
      {init && <Particles id={id} options={options} />}
    </div>
  );
};

export default ParticleEffect;
