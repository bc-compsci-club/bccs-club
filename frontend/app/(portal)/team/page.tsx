import HeroSection from "@/app/ui/portal/team/HeroSection";
import ExecutiveBoardSection from "@/app/ui/portal/team/ExecutiveBoardSection";
import ClubCoordinatorsSection from "@/app/ui/portal/team/ClubCoordinatorsSection";
import EboardAlumniSection from "@/app/ui/portal/team/EboardAlumniSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ExecutiveBoardSection />
      <ClubCoordinatorsSection />
      <EboardAlumniSection />
    </main>
  );
}