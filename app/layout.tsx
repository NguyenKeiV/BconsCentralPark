import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BCONS Central Park',
  description: 'BCONS Central Park — Sống đầy mỗi bình minh.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="min-h-full snap-y snap-mandatory scroll-smooth overflow-y-scroll"><body className="m-0 min-h-full bg-[#e8e4dd] font-sans">{children}</body></html>
  );
}
