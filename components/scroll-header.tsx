'use client';

import { useEffect, useState } from 'react';

const menuItems = [
  ['top', 'GIỚI THIỆU'],
  ['overview', 'TỔNG QUAN DỰ ÁN'],
  ['location', 'VỊ TRÍ ĐẮC ĐỊA'],
  ['floor-plans', 'MẶT BẰNG CĂN HỘ'],
  ['developer', 'CHỦ ĐẦU TƯ'],
  ['consultation', 'CHÍNH SÁCH THANH TOÁN'],
] as const;

export default function ScrollHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigateFromMenu = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    window.dispatchEvent(new Event('menu-navigation'));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={'fixed inset-x-0 top-0 z-40 grid grid-cols-[1fr_auto_1fr] items-center px-[9.5%] py-4 transition-colors duration-500 ' + (scrolled ? 'text-black' : 'text-[#D6A63A]')}>
        <div className={'pointer-events-none absolute inset-0 -z-10 backdrop-blur-[9px] transition-opacity duration-500 [mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_35%,transparent_100%)] ' + (scrolled ? 'opacity-100' : 'opacity-0')}>
          <div className="absolute inset-0 bg-white/[0.14]" />
        </div>
        <a className={'group relative z-10 flex items-center gap-3 text-[17px] font-semibold no-underline transition-all duration-300 hover:scale-[1.04] max-sm:text-[14px] ' + (scrolled ? 'text-black hover:text-[#D6A63A]' : 'text-[#D6A63A] hover:text-[#F2C866]')} href="tel:0979083300" aria-label="Gọi 0979083300">
          <span className={'grid h-[42px] w-[42px] place-items-center rounded-full border transition-all duration-300 group-hover:rotate-6 group-hover:shadow-[0_0_0_5px_rgba(214,166,58,0.18)] max-sm:h-[38px] max-sm:w-[38px] ' + (scrolled ? 'border-black group-hover:border-[#D6A63A]' : 'border-[#D6A63A] group-hover:border-[#F2C866]')}>
            <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 18 18" role="presentation"><path d="M18 16V14.3541C18 13.5363 17.5021 12.8008 16.7428 12.4971L14.7086 11.6835C13.7429 11.2971 12.6422 11.7156 12.177 12.646L12 13C12 13 9.5 12.5 7.5 10.5C5.5 8.5 5 6 5 6L5.35402 5.82299C6.28438 5.35781 6.70285 4.25714 6.31654 3.29136L5.50289 1.25722C5.19916 0.497903 4.46374 0 3.64593 0H2C0.895431 0 0 0.89543 0 2C0 10.8366 7.16344 18 16 18C17.1046 18 18 17.1046 18 16Z" /></svg>
          </span>
          <span>0979083300</span>
        </a>
        <a className="relative z-10 w-[112px] max-sm:w-[94px]" href="#top" aria-label="BCONS Central Park"><img className="block h-auto w-full" src="/assets/logo.webp" alt="BCONS Central Park" width="800" height="314" /></a>
        <button className={'group relative z-10 justify-self-end rounded-full border px-[19px] py-[11px] text-[15px] font-medium transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_25px_rgba(214,166,58,0.25)] max-sm:px-[14px] max-sm:py-[10px] max-sm:text-[14px] ' + (scrolled ? 'border-black bg-transparent text-black hover:border-[#D6A63A] hover:bg-[#D6A63A] hover:text-white' : 'border-[#D6A63A] bg-white/10 text-[#D6A63A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#D6A63A] hover:text-white')} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-menu">
          <span className="mr-[11px] inline-grid w-[23px] gap-1 align-middle">{[0, 1, 2].map((line) => <i key={line} className={'block h-px w-[23px] transition-colors ' + (scrolled ? 'bg-black group-hover:bg-white' : 'bg-[#F2C866] group-hover:bg-white')} />)}</span>Menu
        </button>
      </header>
      <button type="button" aria-label="Đóng menu" className={'fixed inset-0 z-40 bg-[#10251c]/35 backdrop-blur-[2px] transition-opacity duration-500 ' + (menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')} onClick={() => setMenuOpen(false)} />
      <div id="main-menu" className={'fixed right-0 top-0 z-50 h-screen w-[min(430px,100%)] bg-[#294630] p-[78px_52px_48px] text-white shadow-[-20px_0_60px_rgba(16,37,28,0.2)] transition-transform duration-500 max-sm:px-8 max-sm:py-[74px] ' + (menuOpen ? 'translate-x-0' : 'translate-x-full')}>
        <button className="absolute right-[9%] top-6 border-0 bg-transparent text-[38px] font-extralight text-white" onClick={() => setMenuOpen(false)} aria-label="Đóng menu">×</button>
        <p className="text-[10px] tracking-[.22em] text-[#d7b36a]">BCONS CENTRAL PARK · BIÊN HÒA</p>
        <nav className="mt-[34px] grid gap-4">{menuItems.map(([id, label]) => <a key={id} className="group flex items-center justify-between border-b border-white/15 pb-4 font-[Times_New_Roman,_Georgia,_serif] text-[25px] text-white no-underline transition-colors duration-300 hover:text-[#d7b36a]" href={'#' + id} onClick={(event) => navigateFromMenu(event, id)}><span>{label}</span><span className="translate-x-0 text-[19px] text-[#d7b36a] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">↗</span></a>)}</nav>
        <a href="/brochure" onClick={() => setMenuOpen(false)} className="group mt-8 flex items-center justify-between border-b border-white/15 pb-4 font-[Times_New_Roman,_Georgia,_serif] text-[25px] text-white no-underline transition-colors duration-300 hover:text-[#d7b36a]"><span>ĐỌC BROCHURE</span><span className="text-[19px] text-[#d7b36a] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></a>
      </div>
    </>
  );
}
