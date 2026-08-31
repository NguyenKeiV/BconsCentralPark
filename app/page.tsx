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
import FaqSection from '@/components/faq-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BCONS Central Park Biên Hòa | Căn hộ BCONS Tam Hiệp',
  description: 'Khám phá BCONS Central Park tại phường Tam Hiệp, Biên Hòa: vị trí đường Phan Trung, tiện ích, mặt bằng căn hộ và thông tin tư vấn.',
  alternates: { canonical: '/' },
  openGraph: { title: 'BCONS Central Park Biên Hòa | Căn hộ BCONS Tam Hiệp', description: 'Thông tin vị trí, tiện ích và mặt bằng BCONS Central Park tại Tam Hiệp, Biên Hòa.', url: '/' },
};

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
      <FaqSection />
      <ConsultationSection />
    </main>
  );
}
