import HeroSection from "@/app/ui/portal/team/HeroSection";
import ExecutiveBoardSection from "@/app/ui/portal/team/ExecutiveBoardSection";
import ClubDevelopersSection from "@/app/ui/portal/team/ClubDevelopersSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ExecutiveBoardSection />
      <ClubDevelopersSection />
    </main>
  );
}