import type { Metadata } from 'next';
import Link from 'next/link';
import BrochurePages from '@/components/brochure-pages';
import FloatingCta from '@/components/floating-cta';

export const metadata: Metadata = {
  title: 'Brochure BCONS Central Park',
  description: 'Xem toàn bộ brochure BCONS Central Park tại phường Tam Hiệp, Biên Hòa.',
  alternates: { canonical: '/brochure' },
};

const brochureUrl = '/assets/(Nén) BCON-POSM-BROCHURE-260826-V01.pdf';

export default function BrochurePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#10251c] text-[#f1eee5]">
      <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-white/10 bg-[#10251c]/82 px-[8%] py-5 text-[11px] tracking-[.16em] text-white/75 backdrop-blur-md" aria-label="Điều hướng brochure">
        <Link href="/" className="text-[#d7b36a] no-underline transition-colors hover:text-white">← BCONS CENTRAL PARK</Link>
        <a href={brochureUrl} download className="text-white/75 no-underline transition-colors hover:text-[#d7b36a]">TẢI BROCHURE ↓</a>
      </nav>
      <section className="relative isolate px-[8%] pb-10 pt-10 md:pb-14 md:pt-14">
        <div className="pointer-events-none absolute right-[-12vw] top-[-20vw] -z-10 h-[55vw] w-[55vw] rounded-full border border-[#d7b36a]/15" />
        <div className="mx-auto max-w-[1000px] pb-12 pt-[14vh] text-center md:pb-16 md:pt-[18vh]">
          <p className="text-[10px] font-semibold tracking-[.3em] text-[#d7b36a]">BCONS CENTRAL PARK · TAM HIỆP, BIÊN HÒA</p>
          <h1 className="mt-6 font-serif text-[clamp(48px,8vw,118px)] font-normal leading-[.86] tracking-[-.055em]">Một nơi để<br /><em className="text-[#d7b36a]">trở về</em></h1>
          <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-7 text-white/65">Khám phá toàn bộ brochure dự án trong một hành trình cuộn liền mạch. Kéo xuống để xem từng trang.</p>
          <span className="mt-10 inline-flex animate-bounce flex-col items-center gap-2 text-[10px] tracking-[.2em] text-white/55">SCROLL <b className="text-2xl font-light">↓</b></span>
        </div>
      </section>
      <section className="relative isolate bg-[#e8e4dd] py-[5vh] text-[#294630] md:py-[8vh]" aria-labelledby="brochure-viewer-title">
        <div className="pointer-events-none absolute inset-0 z-0 bg-center bg-no-repeat [background-attachment:fixed] [background-image:url('/assets/logo.webp')] [background-size:clamp(280px,38vw,620px)_auto]" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-none">
          <div className="mb-6 flex items-end justify-between gap-5 px-[4%] md:px-[7%]">
            <div><p className="text-[10px] font-semibold tracking-[.25em] text-[#c7922c]">PROJECT BROCHURE</p><h2 id="brochure-viewer-title" className="mt-3 font-serif text-[clamp(30px,4vw,58px)] font-normal leading-none">Toàn bộ brochure</h2></div>
            <p className="hidden text-right text-[11px] leading-5 text-[#526157] md:block">30 trang · cuộn liền mạch<br />hoặc mở PDF gốc ↗</p>
          </div>
          <BrochurePages />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[.12em] text-[#526157]"><span>BCONS CENTRAL PARK · BROCHURE</span><a href={brochureUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#294630] no-underline transition-colors hover:text-[#c7922c]">MỞ BROCHURE Ở TAB MỚI ↗</a></div>
        </div>
      </section>
      <footer className="flex justify-center px-[8%] py-10 text-center text-[12px] text-white/55"><Link href="/#consultation" className="text-[#d7b36a] no-underline hover:text-white">Nhận tư vấn riêng cho bạn ↗</Link></footer>
      <FloatingCta />
    </main>
  );
}
