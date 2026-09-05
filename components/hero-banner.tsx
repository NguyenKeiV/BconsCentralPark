import ScrollReveal from '@/components/scroll-reveal';

export default function HeroBanner() {
  return (
    <section data-scroll-section className="snap-always snap-start relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-[#b8c9cc] text-[#c94b28] max-sm:h-auto max-sm:min-h-0" aria-labelledby="hero-title">
      <picture className="absolute inset-0 z-0 block h-full w-full max-sm:relative max-sm:inset-auto max-sm:h-auto">
        <source media="(max-width: 767px)" srcSet="/assets/anh_nha_mau4_mobile.webp" />
        <img className="block h-full w-full max-w-none object-cover object-center max-sm:h-auto" src="/assets/banner.webp" alt="Phối cảnh BCONS Central Park tại Biên Hòa" fetchPriority="high" width="1600" height="960" />
      </picture>
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(224,234,239,0.12)_0%,rgba(231,237,240,0.01)_33%,rgba(11,26,30,0.44)_100%),radial-gradient(ellipse_at_center,transparent_45%,rgba(10,24,28,0.14)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[18%] bg-[linear-gradient(to_bottom,transparent_0%,rgba(41,70,48,0.28)_38%,#294630_100%)]" aria-hidden="true" />
      <ScrollReveal className="absolute left-1/2 top-[41%] z-10 w-[min(700px,80vw)] -translate-x-1/2 text-center font-serif text-[clamp(42px,4.2vw,69px)] font-bold leading-[1.05] tracking-[.015em] text-[#d7b36a] [text-shadow:0_2px_18px_rgba(0,0,0,.3)] max-sm:top-[25%] max-sm:w-[90vw] max-sm:text-[clamp(34px,9vw,55px)]">
        <h1 data-reveal="title gold-flow" id="hero-title" className="gold-flow m-0">Căn hộ chuẩn xanh<br />giữa lòng Biên Hòa</h1>
        <p data-reveal="details" className="mt-4 text-[15px] font-sans font-normal tracking-normal text-white [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">BCONS Central Park tại phường Tam Hiệp, Biên Hòa</p>
      </ScrollReveal>
      <a className="absolute bottom-[5.8%] left-1/2 z-10 grid -translate-x-1/2 justify-items-center gap-2 border-0 bg-transparent text-[11px] tracking-[.19em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]" href="#overview">
        <span>Scroll Down</span><b className="animate-bounce text-[25px] font-light">↓</b>
      </a>
    </section>
  );
}
