import AboutSection from "@/components/AboutSection.js/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

/**
 * Main homepage with all sections.
 */
export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
