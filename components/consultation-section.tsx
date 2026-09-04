'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/scroll-reveal';
import SiteFooter from '@/components/site-footer';

const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbyjionDfR-X52w46gTUkOF228uBR-R8NUpL6n66b_pnwam-Xkicg8RDv30TjvWlq07K/exec';

export default function ConsultationSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => payload.append(key, String(value)));

    try {
      const beaconBody = new Blob([payload.toString()], { type: 'application/x-www-form-urlencoded;charset=UTF-8' });
      const queued = navigator.sendBeacon(GOOGLE_SHEETS_WEBHOOK, beaconBody);
      if (!queued) {
        await fetch(GOOGLE_SHEETS_WEBHOOK, {
          method: 'POST',
          mode: 'no-cors',
          body: payload.toString(),
        });
      }
      event.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="consultation" data-scroll-section className="snap-always snap-start relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#294630] px-[10%] pt-[4vh] text-[#f1eee5] max-md:h-auto max-md:px-[8%] max-md:pt-[8vh]" aria-labelledby="consultation-title">
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#c7922c]/20" />
      <div className="pointer-events-none absolute -right-8 top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-[#c7922c]/15" />
      <div className="flex flex-1 items-center">
      <ScrollReveal className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-[.85fr_1.15fr] items-center gap-[8vw] max-lg:grid-cols-1 max-lg:gap-10">
        <div className="max-w-[560px]">
          <p data-reveal="eyebrow" className="mb-5 text-[11px] font-semibold uppercase tracking-[.3em] text-[#d7b36a]">BCONS CENTRAL PARK · BIÊN HÒA</p>
          <h2 data-reveal="title" id="consultation-title" className="font-[Times_New_Roman,_Georgia,_serif] text-[clamp(34px,3.8vw,60px)] font-normal uppercase leading-[.98] tracking-[-.045em]">Nhận thông tin<br /><em className="text-[.88em] normal-case text-[#d7b36a]">tư vấn riêng cho bạn</em></h2>
          <p data-reveal="details" className="mt-8 max-w-[500px] text-[15px] leading-[1.75] text-white/75">Giá bán và chính sách thanh toán được tư vấn theo từng thời điểm và nhu cầu thực tế. Để nhận thông tin mới nhất về căn hộ phù hợp, hãy để lại thông tin hoặc gọi trực tiếp cho chuyên viên tư vấn BCONS Central Park.</p>
          <a data-reveal="row" href="tel:0979083300" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d7b36a] px-6 py-3 text-[13px] font-semibold tracking-[.08em] text-[#d7b36a] transition-all duration-500 hover:bg-[#d7b36a] hover:text-[#294630]">GỌI 0979 083 300</a>
        </div>

        <div data-reveal="details" className="rounded-[2rem] bg-[#f1eee5] p-8 text-[#294630] shadow-[0_24px_70px_rgba(0,0,0,0.18)] max-sm:rounded-[1.4rem] max-sm:p-6">
          <p className="mb-6 font-[Times_New_Roman,_Georgia,_serif] text-[clamp(24px,2.5vw,36px)] leading-none">Đăng ký tư vấn</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-[11px] font-semibold uppercase tracking-[.14em] text-[#526157]">Họ và tên<input name="name" required placeholder="Nhập họ và tên" className="mt-2 block w-full border-b border-[#294630]/25 bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#526157]/55 focus:border-[#c7922c]" /></label>
            <label className="block text-[11px] font-semibold uppercase tracking-[.14em] text-[#526157]">Số điện thoại<input name="phone" required type="text" inputMode="tel" pattern="[0-9+ ()\\x2D]{8,20}" placeholder="Nhập số điện thoại" className="mt-2 block w-full border-b border-[#294630]/25 bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#526157]/55 focus:border-[#c7922c]" /></label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="mt-3 rounded-full bg-[#c7922c] px-7 py-3 text-[11px] font-semibold uppercase tracking-[.12em] text-white transition-all duration-500 hover:bg-[#294630] hover:shadow-[0_10px_25px_rgba(41,70,48,0.25)] disabled:cursor-wait disabled:opacity-60">{status === 'sending' ? 'Đang gửi...' : 'Nhận tư vấn'}</button>
              {status === 'success' && <span role="status" className="text-[12px] text-[#294630]">Đã tiếp nhận thông tin.</span>}
              {status === 'error' && <span role="alert" className="text-[12px] text-[#b5472d]">Không gửi được. Vui lòng gọi trực tiếp.</span>}
            </div>
          </form>
        </div>
      </ScrollReveal>
      </div>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </section>
  );
}
