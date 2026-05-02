import ParticleEffect from "./ParticleEffect";
import { snowConfig, starConfig } from "./particleConfigs";

const Particles = () => (
  <>
    <ParticleEffect id="snowParticles" options={snowConfig} />
    <ParticleEffect id="starParticles" options={starConfig} />
  </>
);

export default Particles;
