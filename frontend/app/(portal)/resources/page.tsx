import HeroSection from "@/app/ui/portal/resources/HeroSection";
import InternshipsSection from "@/app/ui/portal/resources/InternshipsSection";
import FellowshipsSection from "@/app/ui/portal/resources/FellowshipsSection";
import InterviewSection from "@/app/ui/portal/resources/InterviewSection";
import StudentProgramsSection from "@/app/ui/portal/resources/StudentProgramsSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <InternshipsSection />
      <FellowshipsSection />
      <InterviewSection />
      <StudentProgramsSection />
    </main>
  );
}