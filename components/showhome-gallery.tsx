'use client';

import { useEffect, useRef } from 'react';
import ImageLightbox from '@/components/image-lightbox';

const showhomeImages = [
  '/assets/anh_nha_mau1.webp',
  '/assets/anh_nha_mau2.webp',
  '/assets/anh_nha_mau3.webp',
  '/assets/anh_nha_mau4.webp',
  '/assets/anh_nha_mau5.webp',
  '/assets/anh_nha_mau6.webp',
  '/assets/anh_nha_mau7.webp',
  '/assets/anh_nha_mau8.webp',
  '/assets/anh_nha_mau9.webp',
  '/assets/anh_nha_mau10.webp',
  '/assets/anh_nha_mau11.webp',
];

function MovingStrip({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let offset = reverse ? -track.scrollWidth / 2 : 0;
    let previousTime = performance.now();
    let frame = 0;

    const move = (time: number) => {
      const elapsed = Math.min(50, time - previousTime);
      previousTime = time;
      const distance = elapsed * 0.035;
      offset += reverse ? distance : -distance;
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        if (offset <= -halfWidth) offset += halfWidth;
        if (offset >= 0) offset -= halfWidth;
      }
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frame = window.requestAnimationFrame(move);
    };

    frame = window.requestAnimationFrame(move);
    return () => window.cancelAnimationFrame(frame);
  }, [reverse]);

  return <div className="relative overflow-hidden">
    <div ref={trackRef} className="flex w-max gap-3 will-change-transform">
      {[...showhomeImages, ...showhomeImages].map((src, index) => <ImageLightbox key={`${src}-${index}`} size="floor" className="h-[230px] w-max shrink-0 transition-transform duration-500 hover:scale-[1.025] max-md:h-[155px]" src={src} alt="Không gian nhà mẫu BCONS Central Park"><img loading="lazy" decoding="async" src={src} alt="Không gian nhà mẫu BCONS Central Park" className="block h-[230px] w-auto max-w-none object-contain max-md:h-[155px]" /></ImageLightbox>)}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[12vw] min-w-20 bg-gradient-to-r from-[#f1eee5] via-[#f1eee5]/75 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[12vw] min-w-20 bg-gradient-to-l from-[#f1eee5] via-[#f1eee5]/75 to-transparent" />
  </div>;
}

export default function ShowhomeGallery() {
  return (
    <section id="showhome-gallery" data-scroll-section data-snap-align="center" className="snap-always snap-center relative isolate flex h-auto min-h-0 flex-col justify-center gap-8 overflow-hidden bg-[#f1eee5] py-[8vh] text-[#294630] max-md:py-[8vh]" aria-labelledby="showhome-title">
      <div className="mx-auto w-[84%] max-w-[1240px]">
        <div>
          <p className="mb-4 text-[10px] font-semibold tracking-[.24em] text-[#c7922c]">KHÔNG GIAN SỐNG · NHÀ MẪU</p>
          <h2 id="showhome-title" className="font-[Times_New_Roman,_Georgia,_serif] text-[clamp(40px,5vw,76px)] font-normal leading-[.95] tracking-[-.045em] md:whitespace-nowrap">Nội thất đón <em className="text-[#c7922c]">ánh sáng tự nhiên</em></h2>
        </div>
      </div>
      <MovingStrip />
      <MovingStrip reverse />
      <div className="mx-auto flex w-[84%] max-w-[1240px] items-center justify-between gap-5 text-[10px] tracking-[.18em] text-[#526157]"><span>01 — 11 · ẢNH NHÀ MẪU</span><a href="/brochure" className="font-semibold text-[#294630] no-underline transition-colors hover:text-[#c7922c]">XEM BROCHURE</a></div>
    </section>
  );
}
