import ScrollReveal from '@/components/scroll-reveal';
import ImageLightbox from '@/components/image-lightbox';

const amenityHighlights = [
  ['60', 'tiện ích nội khu'],
  ['03', 'hồ bơi'],
  ['01', 'siêu thị'],
  ['01', 'khu mầm non'],
] as const;

export default function AmenitiesSection() {
  return (
    <section id="amenities-overview" data-scroll-section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#294630] px-[8%] py-[10vh] text-[#f1eee5] max-md:min-h-0 max-md:px-[7%] max-md:py-[10vh]" aria-labelledby="amenities-overview-title">
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_15%_50%,rgba(112,145,115,0.2),transparent_40%),linear-gradient(135deg,transparent_40%,rgba(8,30,21,0.22)_100%)]" />
      <ScrollReveal className="mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-[1.15fr_.85fr] items-center gap-[7vw] max-lg:grid-cols-1 max-lg:gap-10">
          <div data-reveal="title" className="relative border-[5px] border-[#d7b36a] bg-[#d7b36a] p-1 shadow-[0_24px_65px_rgba(0,0,0,0.38)] max-sm:border-[3px]">
            <div className="relative border border-[#8a5a15] bg-[#183322] p-3 max-sm:p-2">
              <div className="pointer-events-none absolute inset-5 z-10 border border-[#f2d68a]/85 max-sm:inset-4" />
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-16 w-16 border-l-2 border-t-2 border-[#f2d68a] max-sm:h-12 max-sm:w-12" />
              <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-16 w-16 border-b-2 border-r-2 border-[#f2d68a] max-sm:h-12 max-sm:w-12" />
              <div aria-hidden="true" className="pointer-events-none absolute right-5 top-5 z-20 h-32 w-44 text-[#f2d68a] max-sm:right-4 max-sm:top-4 max-sm:scale-75 max-sm:origin-top-right">
                <span className="absolute right-0 top-0 h-12 w-24 rounded-tr-[42px] border-r border-t border-[#f2d68a]/85" />
                <span className="absolute right-8 top-10 h-16 w-28 rounded-br-[55px] border-b border-r border-[#f2d68a]/70" />
                <i className="absolute right-[-3px] top-[-3px] h-3 w-3 rounded-full border-2 border-[#294630] bg-[#f2d68a] shadow-[0_0_0_3px_rgba(242,214,138,0.32)]" />
                <i className="absolute right-16 top-7 h-2.5 w-2.5 rounded-full border border-[#294630] bg-[#d7b36a]" />
                <i className="absolute right-20 top-16 h-2 w-2 rounded-full bg-[#f2d68a]" />
                <i className="absolute right-7 top-20 h-4 w-4 rounded-full border-2 border-[#294630] bg-[#d7b36a] shadow-[0_0_0_3px_rgba(215,179,106,0.28)]" />
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-5 left-5 z-20 h-32 w-44 rotate-180 text-[#f2d68a] max-sm:bottom-4 max-sm:left-4 max-sm:scale-75 max-sm:origin-bottom-left">
                <span className="absolute right-0 top-0 h-12 w-24 rounded-tr-[42px] border-r border-t border-[#f2d68a]/85" />
                <span className="absolute right-8 top-10 h-16 w-28 rounded-br-[55px] border-b border-r border-[#f2d68a]/70" />
                <i className="absolute right-[-3px] top-[-3px] h-3 w-3 rounded-full border-2 border-[#294630] bg-[#f2d68a] shadow-[0_0_0_3px_rgba(242,214,138,0.32)]" />
                <i className="absolute right-16 top-7 h-2.5 w-2.5 rounded-full border border-[#294630] bg-[#d7b36a]" />
                <i className="absolute right-20 top-16 h-2 w-2 rounded-full bg-[#f2d68a]" />
                <i className="absolute right-7 top-20 h-4 w-4 rounded-full border-2 border-[#294630] bg-[#d7b36a] shadow-[0_0_0_3px_rgba(215,179,106,0.28)]" />
              </div>
              <ImageLightbox size="floor" src="/assets/TienIch.webp" alt="Tổng mặt bằng 60 tiện ích nội khu BCONS Central Park">
                <img loading="lazy" decoding="async" className="block h-[68vh] min-h-[480px] w-full object-cover object-center max-lg:h-[56vw] max-lg:min-h-[360px] max-sm:h-[68vw] max-sm:min-h-[250px]" src="/assets/TienIch.webp" alt="Tổng mặt bằng 60 tiện ích nội khu BCONS Central Park" width="1860" height="1048" />
              </ImageLightbox>
            </div>
          </div>

          <div>
            <p data-reveal="eyebrow" className="mb-5 text-[10px] font-semibold tracking-[.26em] text-[#d7b36a]">TIỆN ÍCH NỘI KHU · BCONS CENTRAL PARK</p>
            <h2 id="amenities-overview-title" data-reveal="title" className="mb-7 font-[Times_New_Roman,_Georgia,_serif] text-[clamp(40px,4.4vw,70px)] font-normal leading-[.98] tracking-[-.045em]">
              Một nhịp sống<br />
              <em className="text-[#d7b36a]">đủ đầy tiện nghi</em>
            </h2>
            <div data-reveal="details">
              <p className="mb-8 max-w-[520px] text-[16px] leading-[1.75] text-[#e4e8df]">
                BCONS Central Park kiến tạo một không gian sống thuận tiện ngay trong khuôn viên dự án, nơi những nhu cầu thường ngày được đáp ứng nhẹ nhàng và gần gũi. Hệ thống 60 tiện ích, 3 hồ bơi, siêu thị và khu mầm non cùng hiện diện trên khuôn viên rộng hơn 7.000 m².
              </p>
              <div className="grid grid-cols-2 border-t border-white/25">
                {amenityHighlights.map(([value, label]) => <div data-reveal="row" key={label} className="border-b border-white/15 py-5 pr-5 max-sm:py-4"><strong className="block font-[Times_New_Roman,_Georgia,_serif] text-[clamp(30px,3vw,48px)] font-normal leading-none text-[#d7b36a]">{value}</strong><span className="mt-2 block text-[11px] font-semibold uppercase tracking-[.14em] text-[#d9ded5]">{label}</span></div>)}
                <div data-reveal="row" className="col-span-2 border-b border-white/15 py-5"><strong className="font-[Times_New_Roman,_Georgia,_serif] text-[clamp(30px,3vw,48px)] font-normal leading-none text-[#d7b36a]">&gt; 7.000 m²</strong><span className="ml-4 text-[11px] font-semibold uppercase tracking-[.14em] text-[#d9ded5]">khuôn viên rộng thoáng</span></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
