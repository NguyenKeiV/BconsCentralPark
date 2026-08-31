 'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/scroll-reveal';

const destinations = [
  ['02 phút', 'Vincom Biên Hòa'],
  ['05 phút', 'Co.op Mart Biên Hòa'],
  ['05 phút', 'GO! Tân Hiệp'],
  ['05 phút', 'Bệnh viện Đa khoa Đồng Nai'],
  ['05 phút', 'THPT Chuyên Lương Thế Vinh'],
  ['10 phút', 'KCN Amata Biên Hòa'],
  ['10 phút', 'Đại học Đồng Nai'],
  ['20 phút', 'TP. Thủ Đức'],
] as const;

export default function LocationSection() {
  const [mapType, setMapType] = useState<'region' | 'local'>('region');
  const [mapOpen, setMapOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const scrollPositionRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!mapOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closeMap(); };
    const scrollY = scrollPositionRef.current;
    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousOverflow = document.body.style.overflow;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' });
    };
  }, [mapOpen]);

  const closeMap = () => {
    setMapOpen(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const openMap = () => {
    scrollPositionRef.current = window.scrollY;
    setMapOpen(true);
  };

  const clampOffset = (next: { x: number; y: number }, nextZoom = zoom) => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport || !image) return next;
    const maxX = Math.max(0, (image.offsetWidth * nextZoom - viewport.clientWidth) / 2);
    const maxY = Math.max(0, (image.offsetHeight * nextZoom - viewport.clientHeight) / 2);
    return { x: Math.min(maxX, Math.max(-maxX, next.x)), y: Math.min(maxY, Math.max(-maxY, next.y)) };
  };

  const handleMapWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const nextZoom = Math.min(4, Math.max(1, zoom + (event.deltaY > 0 ? -0.18 : 0.18)));
    const ratio = nextZoom / zoom;
    const bounds = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left - bounds.width / 2;
    const mouseY = event.clientY - bounds.top - bounds.height / 2;
    setOffset((current) => clampOffset({ x: mouseX - (mouseX - current.x) * ratio, y: mouseY - (mouseY - current.y) * ratio }, nextZoom));
    setZoom(nextZoom);
  };

  return (
    <section id="location" data-scroll-section className="snap-always snap-start relative isolate flex h-[100svh] flex-col justify-center overflow-hidden bg-[#f1eee5] px-[10%] py-[4vh] text-[#294630] max-md:h-auto max-md:overflow-visible max-md:px-[8%] max-md:py-[10vh]" aria-labelledby="location-title">
      <ScrollReveal className="relative z-10 w-full">
        <div className="mx-auto max-w-[780px] text-center">
          <h2 data-reveal="title" id="location-title" className="font-[Times_New_Roman,_Georgia,_serif] text-[clamp(44px,4.6vw,76px)] font-normal uppercase leading-[1.12] tracking-[-.04em]">Vị trí đắc địa<br /><em className="normal-case text-[#c7922c]">kết nối mọi tiện nghi</em></h2>
        </div>

        <div data-reveal="details" className="mx-auto mt-6 grid max-w-[1320px] grid-cols-[90px_1.1fr_.9fr] items-stretch gap-6 max-lg:grid-cols-1">
          <div data-reveal="row" className="flex translate-x-4 items-center justify-center">
            <div className="flex h-[250px] w-[72px] flex-col overflow-hidden rounded-full border border-[#c7922c] max-md:h-[210px] max-md:w-[64px]">
              <button aria-label="Map liên kết vùng" className={'flex flex-1 items-center justify-center px-2 text-center text-[10px] font-semibold leading-[1.25] tracking-[.02em] transition-all ' + (mapType === 'region' ? 'bg-[#c7922c] text-white shadow-[0_8px_20px_rgba(199,146,44,0.22)]' : 'text-[#294630] hover:bg-[#c7922c]/10')} onClick={() => setMapType('region')}><span>MAP LIÊN<br />KẾT VÙNG</span></button>
              <button aria-label="Map nội khu" className={'flex flex-1 items-center justify-center border-t border-[#c7922c] px-2 text-center text-[10px] font-semibold leading-[1.25] tracking-[.02em] transition-all ' + (mapType === 'local' ? 'bg-[#c7922c] text-white shadow-[0_8px_20px_rgba(199,146,44,0.22)]' : 'text-[#294630] hover:bg-[#c7922c]/10')} onClick={() => setMapType('local')}><span>MAP<br />NỘI KHU</span></button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden border border-[#d6cdbd] bg-white p-3 shadow-[0_18px_50px_rgba(41,70,48,0.1)]">
            <button type="button" className="group relative block w-full cursor-zoom-in overflow-hidden bg-white text-left" onClick={openMap} aria-label="Mở bản đồ kích thước lớn">
              <img loading="lazy" decoding="async" className="h-[40vh] min-h-[280px] w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] max-lg:h-[36vh] max-sm:h-[52vh] max-sm:min-h-[330px]" src="/assets/map_lien_ket_vung.jpg" alt={mapType === 'region' ? 'Bản đồ liên kết vùng BCONS Central Park' : 'Bản đồ nội khu BCONS Central Park'} />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#294630]/85 px-3 py-2 text-[10px] tracking-[.08em] text-white opacity-0 transition-opacity group-hover:opacity-100">CLICK ĐỂ PHÓNG TO</span>
            </button>
            <p data-reveal="details" className="mt-auto px-4 pb-1 pt-3 text-[13px] leading-[1.5] text-[#526157]">Tọa lạc trên đường Phan Trung, BCONS Central Park kết nối nhanh chóng đến những tiện ích thiết yếu, trung tâm thương mại, giáo dục, y tế và các khu công nghiệp trọng điểm của Biên Hòa.</p>
          </div>
          <div className="grid content-start grid-cols-1 bg-[#294630] px-7 py-4 text-[#f3f0e7] shadow-[0_18px_50px_rgba(41,70,48,0.16)] max-sm:px-5">
            {destinations.map(([time, place]) => <div data-reveal="row" key={place} className="grid grid-cols-[92px_1fr] items-center gap-4 border-t border-white/15 py-2.5"><strong className="font-serif text-[24px] font-normal leading-none text-[#d7b36a]">{time.split(' ')[0]}<small className="ml-1 text-[11px] tracking-normal">phút</small></strong><span className="text-[13px] leading-[1.25] text-white/90">{place}</span></div>)}
          </div>
        </div>
      </ScrollReveal>
      {mapOpen && typeof document !== 'undefined' && createPortal(<div data-image-modal className="fixed inset-0 z-[80] grid place-items-center bg-[#10251c]/90 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Bản đồ BCONS Central Park" onClick={closeMap} onWheel={(event) => { event.preventDefault(); event.stopPropagation(); }}>
        <div ref={viewportRef} className={'relative flex h-fit w-fit max-h-[82vh] max-w-[84vw] items-center justify-center overflow-hidden rounded-sm border border-white/20 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] ' + (dragRef.current.active ? 'cursor-grabbing' : zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in')} onClick={(event) => event.stopPropagation()} onWheel={handleMapWheel} onPointerDown={(event) => { if (zoom > 1) { dragRef.current = { active: true, x: event.clientX - offset.x, y: event.clientY - offset.y }; event.currentTarget.setPointerCapture(event.pointerId); } }} onPointerMove={(event) => { if (dragRef.current.active) setOffset(clampOffset({ x: event.clientX - dragRef.current.x, y: event.clientY - dragRef.current.y })); }} onPointerUp={(event) => { dragRef.current.active = false; event.currentTarget.releasePointerCapture(event.pointerId); }} onPointerCancel={() => { dragRef.current.active = false; }}>
          <img ref={imageRef} className="block max-h-[82vh] max-w-[84vw] select-none object-contain" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`, transformOrigin: 'center center' }} src="/assets/map_lien_ket_vung.jpg" alt="Bản đồ phóng to BCONS Central Park" draggable={false} />
          <button type="button" className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-[#10251c]/75 text-3xl font-light leading-none text-white transition-colors hover:bg-[#c7922c]" onClick={closeMap} aria-label="Đóng bản đồ">×</button>
        </div>
        <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-4 py-2 text-[10px] tracking-[.12em] text-white/85">SCROLL ĐỂ THU PHÓNG · {Math.round(zoom * 100)}%</span>
      </div>, document.body)}
    </section>
  );
}
