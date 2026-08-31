export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-transparent py-4 text-[#f1eee5] max-md:py-4" aria-label="Chân trang BCONS Central Park">
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-[1.1fr_1fr_1fr] gap-12 border-b border-white/15 pb-10 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <a href="#top" className="inline-block w-[150px] transition-opacity hover:opacity-75"><img src="/assets/logo.webp" alt="BCONS Central Park" className="block w-full" width="800" height="314" /></a>
          <p className="mt-5 max-w-[310px] text-[13px] leading-[1.7] text-white/65">Căn hộ chuẩn xanh giữa lòng Biên Hòa. Không gian sống hiện đại, kết nối tiện nghi và giá trị bền vững.</p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.2em] text-[#d7b36a]">Khám phá</p>
          <nav className="grid gap-2 text-[13px] text-white/75"><a href="#overview" className="transition-colors hover:text-[#d7b36a]">Tổng quan dự án</a><a href="#location" className="transition-colors hover:text-[#d7b36a]">Vị trí đắc địa</a><a href="#floor-plans" className="transition-colors hover:text-[#d7b36a]">Mặt bằng căn hộ</a><a href="#developer" className="transition-colors hover:text-[#d7b36a]">Chủ đầu tư</a></nav>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.2em] text-[#d7b36a]">Chính sách thanh toán</p>
          <p className="text-[13px] leading-[1.7] text-white/75">Nhận thông tin giá bán và chính sách thanh toán mới nhất.</p>
          <a href="tel:0979083300" className="mt-3 inline-block text-[20px] text-[#d7b36a] no-underline transition-colors hover:text-white">0979 083 300</a>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1400px] justify-between gap-6 pt-6 text-[11px] text-white/45 max-md:flex-col"><span>© 2026 BCONS Central Park. All rights reserved.</span><span>Thông tin dự án có thể thay đổi theo từng thời điểm.</span></div>
    </footer>
  );
}
