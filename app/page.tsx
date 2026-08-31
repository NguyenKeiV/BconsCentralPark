import HeroBanner from '@/components/hero-banner';
import OpeningCurtain from '@/components/opening-curtain';
import LocationSection from '@/components/location-section';
import PoolSection from '@/components/pool-section';
import FloorPlansSection from '@/components/floor-plans-section';
import DeveloperSection from '@/components/developer-section';
import ConsultationSection from '@/components/consultation-section';
import ShowhomeGallery from '@/components/showhome-gallery';
import ProjectOverview from '@/components/project-overview';
import ScrollHeader from '@/components/scroll-header';

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#e8e4dd]">
      <OpeningCurtain />
      <ScrollHeader />
      <HeroBanner />
      <ProjectOverview />
      <LocationSection />
      <PoolSection />
      <FloorPlansSection />
      <ShowhomeGallery />
      <DeveloperSection />
      <ConsultationSection />
    </main>
  );
}
