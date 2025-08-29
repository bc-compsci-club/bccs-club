import HeroSection from "@/app/ui/portal/course-resources/HeroSection";
import MajorSection from "@/app/ui/portal/course-resources/MajorSection";
import MinorSection from "@/app/ui/portal/course-resources/MinorSection";
import Prerequisites from "@/app/ui/portal/course-resources/Prerequisites";
import CoreClasses from "@/app/ui/portal/course-resources/CoreClasses";
import CourseRecommendations from "@/app/ui/portal/course-resources/CourseRecommendations";
import Electives from "@/app/ui/portal/course-resources/Electives";
import Tutoring from "@/app/ui/portal/course-resources/Tutoring";
import Tips from "@/app/ui/portal/course-resources/Tips";

export default function Page() {
  return (
    <main>
        <HeroSection />
        <MajorSection />
        <MinorSection />
        <Prerequisites />
        <CoreClasses />
        <CourseRecommendations />
        <Electives />
        <Tutoring />
        <Tips />
    </main>
  );
}
