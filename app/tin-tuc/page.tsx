import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Tin tức BCONS Central Park',
  description: 'Tin tức và hướng dẫn tìm hiểu BCONS Central Park Biên Hòa tại phường Tam Hiệp: vị trí, mặt bằng, tiện ích, pháp lý và chính sách.',
  alternates: { canonical: '/tin-tuc' },
  openGraph: { title: 'Tin tức BCONS Central Park', description: 'Tổng hợp nội dung tìm hiểu dự án BCONS Central Park Biên Hòa.', url: '/tin-tuc', images: ['/assets/banner.webp'] },
};

export default function NewsPage() {
  return <main className="min-h-screen bg-[#f1eee5] px-[8%] py-24 text-[#294630]"><nav aria-label="Breadcrumb" className="mb-10 text-xs text-[#526157]"><Link href="/">Trang chủ</Link> <span aria-hidden="true">/</span> Tin tức</nav><header className="max-w-[800px]"><p className="text-[10px] font-semibold tracking-[.24em] text-[#c7922c]">BCONS CENTRAL PARK · TIN TỨC</p><h1 className="mt-5 font-serif text-[clamp(46px,6vw,92px)] font-normal leading-none">Góc nhìn dự án<br /><em className="text-[#c7922c]">tại Tam Hiệp, Biên Hòa</em></h1><p className="mt-7 max-w-[650px] text-[16px] leading-7 text-[#526157]">Các bài viết dưới đây là khung nội dung SEO cần được chủ site kiểm duyệt và cập nhật bằng tài liệu chính thức trước khi xuất bản.</p></header><section className="mt-16 grid gap-7 md:grid-cols-2" aria-label="Danh sách bài viết">{blogPosts.map((post, index) => <article key={post.slug} className="overflow-hidden border border-[#294630]/15 bg-white"><img src={post.image} alt={`Hình minh họa ${post.title}`} className="h-56 w-full object-cover" loading={index > 0 ? 'lazy' : undefined} decoding="async" /> <div className="p-7"><p className="text-[10px] tracking-[.18em] text-[#c7922c]">0{index + 1} · {post.keyword}</p><h2 className="mt-4 font-serif text-[30px] font-normal leading-tight"><Link href={`/tin-tuc/${post.slug}`} className="no-underline hover:text-[#c7922c]">{post.title}</Link></h2><p className="mt-4 text-[14px] leading-6 text-[#526157]">{post.description}</p><Link href={`/tin-tuc/${post.slug}`} className="mt-6 inline-block text-[11px] font-semibold tracking-[.15em] text-[#294630]">ĐỌC BÀI ↗</Link></div></article>)}</section><Link href="/" className="mt-12 inline-block text-sm font-semibold text-[#294630]">← Về trang chủ</Link></main>;
}
