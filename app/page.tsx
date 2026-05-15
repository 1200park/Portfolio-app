import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
