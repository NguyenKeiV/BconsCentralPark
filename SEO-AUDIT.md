# SEO Audit — bcontamhiep.com

Ngày audit: 2026-08-31

## Phạm vi và nguồn dữ liệu

Repo Next/Vinext hiện tại tại `E:\Cong_Viec\Bcons\BCONS_CENTRAL_PARK\landing-page`. Audit dựa trên source và asset đang có; không tự xác nhận lại thông số dự án ngoài dữ liệu gốc trong repo.

## Baseline

- Framework: Next.js 16 + Vinext, App Router.
- Route hiện có: `/` và `/not-found`.
- Metadata: `app/layout.tsx` đã có `metadataBase`, title, description, keywords, canonical `/`, Open Graph và Twitter card.
- Crawl files: `public/robots.txt` đã cho phép crawl và trỏ sitemap; `public/sitemap.xml` mới chỉ có `/`.
- Structured data: `app/layout.tsx` có `WebSite` và `ApartmentComplex` JSON-LD; chưa có `FAQPage`, `BreadcrumbList` hoặc `Article`.
- Heading: source có một H1 nhưng đang bị comment trong `components/hero-banner.tsx`; các section còn lại dùng H2/H3. Cần khôi phục H1 và bổ sung cụm Tam Hiệp tự nhiên.
- Hình ảnh: ảnh dùng thẻ `<img>` native, phần lớn đã có `alt`, `loading="lazy"` và `decoding="async"`; hero dùng `fetchPriority="high"`. Chưa có migration sang `next/image`; cần tránh thay đổi asset gốc nếu không có lợi ích đo được.
- Semantic HTML: đã có `main`, `section`, `nav`, `footer`; cần bổ sung khu vực FAQ/blog liên kết rõ ràng.
- Analytics/GSC: chưa có code GA4 hoặc verification placeholder trong layout.
- Lighthouse baseline/final: CLI `lighthouse` không được cài trong môi trường này, nên chưa có điểm Performance/SEO/Accessibility tự động. Đã thay bằng production smoke test HTTP cho các route chính.

## Rủi ro dữ liệu cần giữ nguyên

- Hotline trong source: `0979 083 300`.
- Vị trí trong source: Đường Phan Trung, Phường Tam Hiệp, Thành phố Đồng Nai.
- Thông số trong `components/project-overview.tsx`: chủ đầu tư, tên pháp lý, quy mô, số lượng căn hộ và thời điểm bàn giao dự kiến. Không tự sửa các giá trị này.

## Kế hoạch tối ưu

1. Khôi phục H1 và bổ sung đoạn giới thiệu có BCONS Central Park, Tam Hiệp, Biên Hòa.
2. Tạo sitemap động, metadata/canonical riêng cho homepage và các route tin tức.
3. Bổ sung JSON-LD dự án, FAQ homepage, Article và BreadcrumbList cho bài viết.
4. Tạo `/tin-tuc` và 7 bài khung có placeholder biên tập, internal links và metadata riêng.
5. Thêm GA4/GSC theo biến môi trường, không hardcode ID.
