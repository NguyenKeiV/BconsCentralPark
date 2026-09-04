'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/scroll-reveal';
import ImageLightbox from '@/components/image-lightbox';

const floorPlans = [
  ['TAMARIND', '/assets/mat_bang_block_tamarind_tang_3.webp'],
  ['BAMBOO', '/assets/mat_bang_block_bamboo_tang_3.webp'],
  ['ORCHID', '/assets/mat_bang_block_orchid_tang_3.webp'],
] as const;

const apartments = {
  '1PN': [
    ['D1', '40,50 m²', '36,62 m²', '/assets/mat_bang_can_1pn_d1_40m2.webp'],
    ['D4', '38,60 m²', '34,17 m²', '/assets/mat_bang_can_1pn_d4_38m2.webp'],
  ],
  '2PN': [
    ['B1', '66,36 m²', '60,73 m²', '/assets/mat_bang_can_2pn_b1_66m2.webp'],
    ['B3', '60,30 m²', '53,49 m²', '/assets/mat_bang_can_2pn_b3_60m2.webp'],
    ['B5', '69,81 m²', '62,89 m²', '/assets/mat_bang_can_2pn_b5_69m2.webp'],
    ['C1', '52,49 m²', '47,47 m²', '/assets/mat_bang_can_2pn_c1_52m2.webp'],
    ['C2', '53,35 m²', '47,20 m²', '/assets/mat_bang_can_2pn_c2_53m2.webp'],
    ['C3', '50,47 m²', '45,23 m²', '/assets/mat_bang_can_2pn_c3_50m2.webp'],
    ['D5', '53,88 m²', '49,39 m²', '/assets/mat_bang_can_2pn_d5_53m2.webp'],
  ],
  '3PN': [
    ['A2', '87,14 m²', '79,79 m²', '/assets/mat_bang_can_3pn_a2_87m2.webp'],
    ['B8', '64,90 m²', '58,42 m²', '/assets/mat_bang_can_3pn_b8_64m2.webp'],
  ],
} as const;

type PlanType = keyof typeof apartments;

export default function FloorPlansSection() {
  const [view, setView] = useState<'floor' | 'apartment'>('floor');
  const [block, setBlock] = useState(0);
  const [planType, setPlanType] = useState<PlanType>('1PN');

  const changeView = (nextView: 'floor' | 'apartment') => {
    setView(nextView);
  };

  const changePlanType = (nextPlanType: PlanType) => {
    setPlanType(nextPlanType);
  };

  return (
    <section id="floor-plans" data-scroll-section className="snap-always snap-start relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#f1eee5] px-[4%] pt-[8vh] pb-[5vh] text-[#294630] max-md:min-h-0 max-md:h-auto max-md:px-[7%] max-md:py-[10vh]" aria-labelledby="floor-plans-title">
      <ScrollReveal className="z-10 mx-auto w-full max-w-[1700px]">
        <div className="absolute inset-x-0 top-[13vh] z-20 flex justify-center gap-3 max-sm:top-[10vh] max-sm:flex-wrap max-sm:gap-2">
          <div className="flex gap-3 max-sm:gap-2">
            <button className={'rounded-full border px-7 py-3 text-[11px] font-semibold tracking-[.08em] transition-all max-sm:px-4 max-sm:text-[9px] ' + (view === 'floor' ? 'border-[#c7922c] bg-[#c7922c] text-white shadow-[0_8px_20px_rgba(199,146,44,0.2)]' : 'border-[#c7922c] text-[#294630] hover:bg-[#c7922c]/10')} onClick={() => changeView('floor')}>MẶT BẰNG TẦNG</button>
            <button className={'rounded-full border px-7 py-3 text-[11px] font-semibold tracking-[.08em] transition-all max-sm:px-4 max-sm:text-[9px] ' + (view === 'apartment' ? 'border-[#c7922c] bg-[#c7922c] text-white shadow-[0_8px_20px_rgba(199,146,44,0.2)]' : 'border-[#c7922c] text-[#294630] hover:bg-[#c7922c]/10')} onClick={() => changeView('apartment')}>MẶT BẰNG CĂN</button>
          </div>
          {view === 'apartment' && <div className="absolute right-[3%] top-1/2 -translate-y-1/2 max-md:static max-md:translate-y-0">
            <select aria-label="Chọn loại hình căn hộ" value={planType} onChange={(event) => changePlanType(event.target.value as PlanType)} className="h-[38px] appearance-none rounded-md border border-[#c7922c]/70 bg-transparent px-3 pr-9 text-[10px] font-semibold tracking-[.08em] text-[#294630] outline-none transition-colors hover:bg-[#c7922c]/10 focus:ring-2 focus:ring-[#c7922c]/50">
              <option value="1PN">1PN</option>
              <option value="2PN">2PN</option>
              <option value="3PN">3PN</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 h-2 w-2 -translate-y-[65%] rotate-45 border-b-2 border-r-2 border-[#c7922c]" aria-hidden="true" />
          </div>}
        </div>

        {view === 'floor' ? <div className="mt-8 grid grid-cols-[250px_1fr] items-center gap-10 max-lg:grid-cols-1">
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
        </div> : <div className="mt-8">
          <div className="text-center">
          </div>
          <div data-reveal="details" className="mt-8 grid max-h-[58vh] grid-cols-2 gap-5 overflow-y-auto overscroll-contain pr-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid-cols-4 max-sm:max-h-[62vh] max-sm:grid-cols-1" onWheel={(event) => event.stopPropagation()}>
            {apartments[planType].map(([code, tt, ll, image]) => <article data-reveal="row" key={code} className="group overflow-hidden border border-[#d6cdbd] bg-white shadow-[0_12px_30px_rgba(41,70,48,0.08)] transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-3 border-b border-[#e4ded3] px-4 py-3"><h3 className="m-0 font-serif text-[20px] font-normal text-[#c7922c]">Căn {code}</h3><div className="text-right text-[10px] leading-[1.35] text-[#526157]"><span className="block">TT: {tt}</span><span className="block">LL: {ll}</span></div></div>
              <ImageLightbox size="apartment" src={image} alt={`Mặt bằng căn hộ ${code}, thông thủy ${tt}, tim tường ${ll}`}><img loading="lazy" decoding="async" className="h-[30vh] min-h-[200px] w-full object-contain p-4" src={image} alt={`Mặt bằng căn hộ ${code}, thông thủy ${tt}, tim tường ${ll}`} /></ImageLightbox>
            </article>)}
          </div>
        </div>}
      </ScrollReveal>
    </section>
  );
}
