export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f1eee5] px-6 text-center text-[#294630]">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[.25em] text-[#c7922c]">BCONS CENTRAL PARK</p>
        <h1 className="font-[Times_New_Roman,_Georgia,_serif] text-6xl font-normal">Không tìm thấy trang</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#526157]">Trang bạn đang tìm kiếm không tồn tại hoặc đã được thay đổi.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#294630] px-6 py-3 text-sm font-semibold text-[#f1eee5] no-underline transition-colors hover:bg-[#c7922c]">Về trang chủ</Link>
      </div>
    </main>
  );
}
import Link from 'next/link';
