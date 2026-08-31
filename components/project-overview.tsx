import ScrollReveal from '@/components/scroll-reveal';

const projectDetails = [
  ['CHỦ ĐẦU TƯ', 'Công ty Cổ phần Phát triển Đô thị Tam Hiệp'],
  ['TÊN PHÁP LÝ', 'KHU NHÀ Ở PHỨC HỢP CAO TẦNG PHƯỜNG TAM HIỆP'],
  ['TÊN THƯƠNG MẠI', 'BCONS Central Park'],
  ['VỊ TRÍ', 'Đường Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai'],
  ['QUỸ ĐẤT', '~ 3 Hecta'],
  ['QUY MÔ', '5 block cao 22 tầng + 2 hầm'],
  ['SỐ LƯỢNG CĂN HỘ', '2.820 căn hộ'],
  ['LOẠI HÌNH CĂN HỘ', '1PN, 2PN, 3PN'],
  ['BÀN GIAO DỰ KIẾN', 'Quý 2/2029'],
] as const;

export default function ProjectOverview() {
  return (
    <section id="overview" data-scroll-section className="snap-always snap-start relative isolate flex h-[100svh] min-h-[100svh] items-center overflow-hidden bg-[#294630] px-[15.5%] py-[8vh] text-[#f3f0e7] max-md:h-auto max-md:min-h-0 max-md:px-[9%] max-md:py-[10vh]" aria-labelledby="overview-title">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background:radial-gradient(ellipse_at_65%_50%,rgba(112,145,115,0.18),transparent_42%),linear-gradient(135deg,transparent_35%,rgba(8,30,21,0.22)_35%,transparent_60%)]" />
      <ScrollReveal className="relative z-10 w-full">
      <svg data-reveal="leaf" className="pointer-events-none absolute left-[8%] top-[9%] z-0 h-auto w-[32%] max-w-[470px] rotate-[10deg] max-md:left-[-3%] max-md:top-[3%] max-md:w-[68%]" viewBox="0 0 400 520" fill="none" aria-hidden="true">
        <path d="M76 423C48 367 53 304 90 251C132 191 213 163 283 119C322 94 348 68 361 34C367 117 355 213 316 283C273 360 205 398 106 414L76 423Z" stroke="#9DB79B" strokeWidth="2.3" strokeLinejoin="round" />
        <path d="M76 423C71 438 66 452 61 467" stroke="#9DB79B" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M76 423C119 369 184 286 359 37" stroke="#9DB79B" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M104 397C101 354 105 318 117 282M137 355C142 315 154 278 174 241M175 310C191 271 211 236 239 198M220 251C246 213 273 181 302 153" stroke="#9DB79B" strokeWidth="1.05" strokeLinecap="round" />
      </svg>
      
      <div className="grid grid-cols-[.9fr_1.1fr] items-start gap-[8vw] max-md:grid-cols-1 max-md:gap-12">
        <div className="pt-[3vh] max-md:pt-0">
          <p data-reveal="eyebrow" className="mb-5 text-[10px] tracking-[.26em] text-[#d7b36a]">Bcons Biên Hòa</p>
<h2
  id="overview-title"
  data-reveal="title"
  className="max-w-[530px] font-serif text-[clamp(44px,4.6vw,76px)] font-normal uppercase leading-[1.08] tracking-[-.04em]"
>
  Căn hộ chuẩn xanh<br />
  <em className="normal-case text-[#d7b36a]">giữa lòng Biên Hòa</em>
</h2>        </div>
        <div data-reveal="details">
          <h3 className="mb-6 font-[Times_New_Roman,_Georgia,_serif] text-[clamp(25px,2.5vw,39px)] font-normal leading-[1.12] tracking-[-.04em]">TỔNG QUAN DỰ ÁN</h3>
          <dl className="border-t border-white/25">
            {projectDetails.map(([label, value]) => <div data-reveal="row" key={label} className="grid grid-cols-[150px_1fr] gap-8 border-b border-white/15 py-2.5 max-sm:grid-cols-[112px_1fr] max-sm:gap-4"><dt className="text-[10px] leading-[1.2] tracking-[.1em] text-[#d9ded5]">{label}</dt><dd className="m-0 text-[14px] font-semibold leading-[1.3] text-white max-sm:text-[12px]">{value}</dd></div>)}
          </dl>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
