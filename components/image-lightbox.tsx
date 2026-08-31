'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ImageLightboxProps = { src: string; alt: string; children: ReactNode; size?: 'floor' | 'apartment'; className?: string };

export default function ImageLightbox({ src, alt, children, size = 'floor', className = '' }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const dragRef = useRef({ active: false, x: 0, y: 0 });
  const popupSize = size === 'apartment'
    ? 'h-[68vh] w-[58vw] max-w-[760px] max-sm:h-[76vh] max-sm:w-[86vw]'
    : 'max-h-[78vh] max-w-[76vw] max-sm:max-h-[78vh] max-sm:max-w-[88vw]';
  const imageSize = size === 'apartment' ? 'h-full w-full' : popupSize;
  const fitSize = size === 'apartment' ? '' : 'h-fit w-fit';

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const close = () => {
    window.dispatchEvent(new Event('lightbox-close'));
    setOpen(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };
  const clamp = (next: { x: number; y: number }, nextZoom = zoom) => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport || !image) return next;
    const maxX = Math.max(0, (image.offsetWidth * nextZoom - viewport.clientWidth) / 2);
    const maxY = Math.max(0, (image.offsetHeight * nextZoom - viewport.clientHeight) / 2);
    return { x: Math.min(maxX, Math.max(-maxX, next.x)), y: Math.min(maxY, Math.max(-maxY, next.y)) };
  };
  const onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const nextZoom = Math.min(4, Math.max(1, zoom + (event.deltaY > 0 ? -0.18 : 0.18)));
    const ratio = nextZoom / zoom;
    const bounds = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left - bounds.width / 2;
    const mouseY = event.clientY - bounds.top - bounds.height / 2;
    setOffset((current) => clamp({ x: mouseX - (mouseX - current.x) * ratio, y: mouseY - (mouseY - current.y) * ratio }, nextZoom));
    setZoom(nextZoom);
  };

  return <>
    <button type="button" className={'group relative block w-full cursor-zoom-in text-left ' + className} onClick={() => setOpen(true)} aria-label={`Mở lớn: ${alt}`}>
      {children}
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#294630]/85 px-3 py-2 text-[10px] tracking-[.08em] text-white opacity-0 transition-opacity group-hover:opacity-100">CLICK ĐỂ PHÓNG TO</span>
    </button>
    {open && typeof document !== 'undefined' && createPortal(<div className="fixed inset-0 z-[80] grid place-items-center bg-[#10251c]/90 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={alt} onClick={close} onWheel={(event) => { event.preventDefault(); event.stopPropagation(); }}>
      <div ref={viewportRef} className={'relative flex ' + fitSize + ' ' + popupSize + ' items-center justify-center overflow-hidden rounded-sm border border-white/20 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] ' + (dragRef.current.active ? 'cursor-grabbing' : zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in')} onClick={(event) => event.stopPropagation()} onWheel={onWheel} onPointerDown={(event) => { if (zoom > 1) { dragRef.current = { active: true, x: event.clientX - offset.x, y: event.clientY - offset.y }; event.currentTarget.setPointerCapture(event.pointerId); } }} onPointerMove={(event) => { if (dragRef.current.active) setOffset(clamp({ x: event.clientX - dragRef.current.x, y: event.clientY - dragRef.current.y })); }} onPointerUp={(event) => { dragRef.current.active = false; event.currentTarget.releasePointerCapture(event.pointerId); }} onPointerCancel={() => { dragRef.current.active = false; }}>
        <img ref={imageRef} className={'block select-none object-contain ' + imageSize} style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`, transformOrigin: 'center center' }} src={src} alt={alt} draggable={false} />
        <button type="button" className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-[#10251c]/75 text-3xl font-light leading-none text-white transition-colors hover:bg-[#c7922c]" onClick={close} aria-label="Đóng ảnh">×</button>
      </div>
      <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-4 py-2 text-[10px] tracking-[.12em] text-white/85">SCROLL ĐỂ THU PHÓNG · {Math.round(zoom * 100)}%</span>
    </div>, document.body)}
  </>;
}
