export default function FloatingCta() {
  return <div className="fixed bottom-6 right-6 z-[70] flex flex-col gap-3 max-sm:bottom-5 max-sm:right-5">
    <a href="https://zalo.me/0979083300" target="_blank" rel="noreferrer" aria-label="Nhắn tin Zalo với 0979 083 300" className="floating-cta floating-zalo group relative grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-white/75 bg-[#1688f6] text-white shadow-[0_10px_28px_rgba(20,107,214,0.35)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d7b36a]/70">
      <span className="absolute inset-[-5px] rounded-full border border-[#5db2ff]/75" aria-hidden="true" />
      <span className="relative grid h-[25px] w-[25px] place-items-center rounded-[8px] border-2 border-white text-[16px] font-bold leading-none transition-transform duration-300 group-hover:-rotate-[8deg]">Z</span>
    </a>
    <a href="tel:0979083300" aria-label="Gọi tư vấn 0979 083 300" className="floating-cta group relative grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-white/70 bg-[#5861f2] text-white shadow-[0_10px_28px_rgba(49,55,170,0.35)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d7b36a]/70">
      <span className="absolute inset-[-5px] rounded-full border border-[#7b82ff]/70" aria-hidden="true" />
      <svg className="relative h-[23px] w-[23px] fill-current transition-transform duration-300 group-hover:-rotate-[12deg]" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.5 9.2 2c.7-.1 1.3.3 1.5.9l1.2 3.1c.2.6 0 1.2-.5 1.6L9.8 9.1a15.2 15.2 0 0 0 5.1 5.1l1.5-1.6c.4-.5 1-.7 1.6-.5l3.1 1.2c.6.2 1 .8.9 1.5l-.5 2.6c-.1.7-.7 1.1-1.4 1.1C11.7 18.5 5.5 12.3 5.5 3.9c0-.7.4-1.3 1.1-1.4Z" /></svg>
    </a>
  </div>;
}
