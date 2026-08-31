import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bcontamhiep.com';
  return [{ url: `${base}/`, changeFrequency: 'weekly', priority: 1 }, { url: `${base}/tin-tuc`, changeFrequency: 'weekly', priority: .8 }, ...blogPosts.map((post) => ({ url: `${base}/tin-tuc/${post.slug}`, changeFrequency: 'monthly' as const, priority: .7 }))];
}
