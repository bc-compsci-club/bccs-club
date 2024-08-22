import Image from 'next/image';
import HeroSection from './ui/portal/homepage/HeroSection';
import TeamSection from './ui/portal/homepage/TeamSection';
import EventsSection from './ui/portal/homepage/EventsSection';
import ResourcesSection from './ui/portal/homepage/ResourcesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeamSection />
      <EventsSection />
      <ResourcesSection />
    </main>
  );
}
