import ScrollReveal from '@/components/scroll-reveal';

export default function InteriorHighlightSection() {
  return (
    <section id="interior-highlight" data-scroll-section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#1b2c23] text-white max-md:min-h-[680px]" aria-labelledby="interior-highlight-title">
      <picture className="absolute inset-0 -z-20 block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/assets/anh_nha_mau4_mobile.webp" />
        <img loading="lazy" decoding="async" src="/assets/anh_nha_mau10.webp" alt="Không gian nội thất nhà mẫu BCONS Central Park" className="block h-full w-full object-cover object-center" width="1600" height="900" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,28,23,0.8)_0%,rgba(18,28,23,0.58)_38%,rgba(18,28,23,0.12)_75%,rgba(18,28,23,0.22)_100%)] max-md:bg-[linear-gradient(90deg,rgba(18,28,23,0.78),rgba(18,28,23,0.3))]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10251c]/45 via-transparent to-[#10251c]/10" />

      <ScrollReveal className="mx-auto w-[84%] max-w-[1500px] py-[12vh] max-md:w-[86%] max-md:py-[12vh]">
        <div className="max-w-[650px]">
          <p data-reveal="eyebrow" className="mb-6 text-[10px] font-semibold tracking-[.28em] text-[#f2d68a]">KHÔNG GIAN SỐNG · NHÀ MẪU</p>
          <h2 id="interior-highlight-title" data-reveal="title" className="mb-8 max-w-[640px] font-[Times_New_Roman,_Georgia,_serif] text-[clamp(36px,4vw,66px)] font-normal leading-[1.02] tracking-[-.045em]">
            Sống trọn từng khoảnh khắc<br />
            <em className="text-[#f2d68a]">trong không gian tinh tế</em>
          </h2>
          <p data-reveal="details" className="max-w-[560px] text-[16px] leading-[1.75] text-white/90 max-sm:text-[15px]">
            Từ cách đón ánh sáng tự nhiên đến từng khoảng sinh hoạt được bố trí vừa vặn, nhà mẫu BCONS Central Park gợi mở một nhịp sống hiện đại, ấm cúng và giàu cảm hứng cho mỗi gia đình.
          </p>
        </div>
      </ScrollReveal>
      <span aria-hidden="true" className="pointer-events-none absolute bottom-8 right-[8%] text-[10px] font-semibold tracking-[.22em] text-white/75 max-sm:right-[7%]">BCONS CENTRAL PARK · INTERIOR</span>
    </section>
  );
}
