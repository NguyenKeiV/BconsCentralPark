'use client';

import ScrollReveal from '@/components/scroll-reveal';
import ImageLightbox from '@/components/image-lightbox';

export default function DeveloperSection() {
  return (
    <section id="developer" data-scroll-section className="snap-always snap-start relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#f1eee5] px-[10%] py-[8vh] text-[#294630] max-md:h-auto max-md:px-[8%] max-md:py-[12vh]" aria-labelledby="developer-title">
      <ScrollReveal className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-[.9fr_1.1fr] items-center gap-[7vw] max-lg:grid-cols-1 max-lg:gap-10">
        <div className="max-w-[650px]">
          <p data-reveal="eyebrow" className="mb-5 text-[11px] font-semibold uppercase tracking-[.28em] text-[#c7922c]">BCONS CENTRAL PARK</p>
          <h2 data-reveal="title" id="developer-title" className="font-[Times_New_Roman,_Georgia,_serif] text-[clamp(32px,3.4vw,54px)] font-normal uppercase leading-[.98] tracking-[-.045em]">Kiến tạo giá trị<br /><em className="text-[.88em] normal-case text-[#c7922c]">bền vững theo thời gian</em></h2>
          <div data-reveal="details" className="mt-9 max-w-[600px] space-y-5 text-[15px] leading-[1.7] text-[#526157]">
            <p data-reveal="row"><strong className="font-semibold text-[#294630]">Tập đoàn Bcons</strong> chủ đầu tư và đơn vị phát triển trực tiếp của BCONS Central Park, theo đuổi định hướng phát triển những không gian sống chất lượng, minh bạch và có giá trị lâu dài tại Biên Hòa.</p>
            <p data-reveal="row">Trong hành trình phát triển, doanh nghiệp đặc biệt chú trọng tiến độ pháp lý và cam kết bàn giao. Theo thông tin chủ đầu tư công bố, các dự án chưa từng ra sổ trễ hạn — chỉ có những trường hợp hoàn tất sớm hơn kế hoạch.</p>
            <p data-reveal="row">Với nền tảng chuyên môn xây dựng cùng sự đồng hành của <strong className="font-semibold text-[#294630]">ông Lê Như Thạch</strong>, giảng viên chuyên ngành xây dựng tại Đại học Bách khoa, mỗi quyết định phát triển đều hướng đến chất lượng công trình, tính bền vững và trải nghiệm an tâm cho cư dân.</p>
          </div>
        </div>

        <div data-reveal="details" className="relative overflow-hidden border border-[#d6cdbd] bg-white p-3 shadow-[0_18px_50px_rgba(41,70,48,0.12)]">
          <ImageLightbox size="floor" src="/assets/cdt_ra_so.webp" alt="Chủ đầu tư BCONS Central Park và tiến độ pháp lý"><img loading="lazy" decoding="async" data-reveal="row" className="block h-[68vh] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.015] max-lg:h-[55vh] max-sm:h-[42vh]" src="/assets/cdt_ra_so.webp" alt="Chủ đầu tư BCONS Central Park và tiến độ pháp lý" width="1400" height="1000" /></ImageLightbox>
          <p className="pointer-events-none absolute bottom-7 left-7 rounded-full bg-[#294630]/85 px-4 py-2 text-[10px] tracking-[.1em] text-white">CHỦ ĐẦU TƯ · BCONS</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
