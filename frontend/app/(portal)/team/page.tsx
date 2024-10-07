import HeroSection from "@/app/ui/portal/team/HeroSection";
import ExecutiveBoardSection from "@/app/ui/portal/team/ExecutiveBoardSection";
import ClubCoordinatorsSection from "@/app/ui/portal/team/ClubCoordinatorsSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ExecutiveBoardSection />
      <ClubCoordinatorsSection />
    </main>
  );
}