import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPost } from '@/lib/blog';

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description, alternates: { canonical: `/tin-tuc/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.description, url: `/tin-tuc/${post.slug}`, images: [{ url: post.image, alt: post.title }] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, image: `https://bcontamhiep.com${post.image}`, inLanguage: 'vi-VN', mainEntityOfPage: `https://bcontamhiep.com/tin-tuc/${post.slug}`, author: { '@type': 'Organization', name: 'BCONS Central Park' }, publisher: { '@type': 'Organization', name: 'BCONS Central Park', logo: { '@type': 'ImageObject', url: 'https://bcontamhiep.com/assets/logo.webp' } } };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://bcontamhiep.com/' }, { '@type': 'ListItem', position: 2, name: 'Tin tức', item: 'https://bcontamhiep.com/tin-tuc' }, { '@type': 'ListItem', position: 3, name: post.title, item: `https://bcontamhiep.com/tin-tuc/${post.slug}` }] };
  return <main className="min-h-screen bg-[#f1eee5] px-[8%] py-24 text-[#294630]"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><nav aria-label="Breadcrumb" className="mx-auto mb-12 max-w-[900px] text-xs text-[#526157]"><Link href="/">Trang chủ</Link> <span aria-hidden="true">/</span> <Link href="/tin-tuc">Tin tức</Link> <span aria-hidden="true">/</span> {post.title}</nav><article className="mx-auto max-w-[900px]"><p className="text-[10px] font-semibold tracking-[.24em] text-[#c7922c]">{post.keyword}</p><h1 className="mt-5 font-serif text-[clamp(44px,6vw,86px)] font-normal leading-[.98]">{post.title}</h1><p className="mt-7 max-w-[760px] text-[18px] leading-8 text-[#526157]">{post.description}</p><img src={post.image} alt={`Hình minh họa ${post.title}`} className="mt-12 max-h-[520px] w-full object-cover" fetchPriority="high" />{post.sections.map((section) => <section key={section.heading} className="mt-12"><h2 className="font-serif text-[32px] font-normal">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[16px] leading-8 text-[#526157]">{paragraph}</p>)}</section>)}<aside className="mt-14 border-l-2 border-[#c7922c] bg-white/60 p-6 text-[14px] leading-7">Nội dung trên là khung biên tập. Vui lòng kiểm tra thông tin chính thức trước khi đưa ra quyết định.</aside></article><nav aria-label="Bài viết liên quan" className="mx-auto mt-16 grid max-w-[900px] gap-3 border-t border-[#294630]/20 pt-8 sm:grid-cols-2">{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4).map((item) => <Link key={item.slug} href={`/tin-tuc/${item.slug}`} className="border border-[#294630]/15 p-4 text-sm no-underline hover:bg-white">{item.title} ↗</Link>)}</nav></main>;
}
