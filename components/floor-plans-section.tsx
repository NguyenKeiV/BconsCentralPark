'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/scroll-reveal';
import ImageLightbox from '@/components/image-lightbox';

const floorPlans = [
  ['TAMARIND', '/assets/mat_bang_block_tamarind_tang_3.webp'],
  ['BAMBOO', '/assets/mat_bang_block_bamboo_tang_3.webp'],
  ['ORCHID', '/assets/mat_bang_block_orchid_tang_3.webp'],
] as const;

export default function FloorPlansSection() {
  const [block, setBlock] = useState(0);

  return (
    <section id="floor-plans" data-scroll-section className="snap-always snap-start relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#f1eee5] px-[4%] pt-[8vh] pb-[5vh] text-[#294630] max-md:min-h-0 max-md:h-auto max-md:px-[7%] max-md:py-[10vh]" aria-labelledby="floor-plans-title">
      <ScrollReveal className="z-10 mx-auto w-full max-w-[1700px]">
        <div className="absolute inset-x-0 top-[13vh] z-20 flex justify-center gap-3 max-md:static max-md:flex-col max-md:items-center max-md:pt-3 max-sm:gap-2">
          <div className="flex gap-3 max-sm:gap-2">
            <button className="rounded-full border border-[#c7922c] bg-[#c7922c] px-7 py-3 text-[11px] font-semibold tracking-[.08em] text-white shadow-[0_8px_20px_rgba(199,146,44,0.2)] transition-all max-sm:px-4 max-sm:text-[9px]">MẶT BẰNG TẦNG</button>
            <a href="/brochure#brochure-page-16" className="rounded-full border border-[#c7922c] px-7 py-3 text-[11px] font-semibold tracking-[.08em] text-[#294630] no-underline transition-all hover:bg-[#c7922c] hover:text-white max-sm:px-4 max-sm:text-[9px]">MẶT BẰNG CĂN</a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[250px_1fr] items-center gap-10 max-lg:grid-cols-1">
          <div>
            <h2 data-reveal="title" id="floor-plans-title" className="mb-8 font-[Times_New_Roman,_Georgia,_serif] text-[clamp(32px,3vw,52px)] font-normal uppercase leading-[1.05] tracking-[-.04em]">Mặt bằng tầng<br /><em className="normal-case text-[#c7922c]">ĐIỂN HÌNH</em></h2>
            <div className="flex flex-col gap-3 max-lg:flex-row max-lg:justify-center">
              {floorPlans.map(([name], index) => <button key={name} className={'rounded-full border px-6 py-4 text-left text-[13px] font-semibold tracking-[.12em] transition-all max-lg:text-center ' + (block === index ? 'border-[#c7922c] bg-[#c7922c] text-white shadow-[0_8px_20px_rgba(199,146,44,0.2)]' : 'border-[#c7922c]/60 text-[#294630] hover:bg-[#c7922c]/10')} onClick={() => setBlock(index)}>TÒA {name}</button>)}
            </div>
          </div>
          <div>
            <div className="mt-5 overflow-hidden border border-[#d6cdbd] bg-white p-3 shadow-[0_18px_50px_rgba(41,70,48,0.1)]">
              <ImageLightbox size="floor" src={floorPlans[block][1]} alt={`Mặt bằng tầng điển hình tòa ${floorPlans[block][0]}`}><img loading="lazy" decoding="async" data-reveal="details" className="block h-[60vh] w-full object-contain object-center max-md:h-[52vh]" src={floorPlans[block][1]} alt={`Mặt bằng tầng điển hình tòa ${floorPlans[block][0]}`} /></ImageLightbox>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
