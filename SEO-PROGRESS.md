# SEO Progress Log — bcontamhiep.com

## Trạng thái tổng quan

- [x] Phần 1: Audit
- [x] Phần 2: On-page
- [x] Phần 3: Technical SEO
- [x] Phần 4: Blog/nội dung mới
- [x] Phần 5: GA4 + GSC setup (code sẵn sàng, chờ ID thật)
- [x] Phần 6: Bàn giao

## Nhật ký thay đổi

- 2026-08-31 — Audit source, route, metadata, crawl files, schema, heading và alt — `SEO-AUDIT.md` — ghi baseline trước khi sửa.
- 2026-08-31 — Khôi phục H1 hero, bổ sung cụm Tam Hiệp/Biên Hòa và FAQPage — `components/hero-banner.tsx`, `components/faq-section.tsx`, `app/page.tsx`.
- 2026-08-31 — Mở rộng metadata, canonical, JSON-LD dự án và GA4/GSC theo biến môi trường — `app/layout.tsx`.
- 2026-08-31 — Tạo sitemap động — `app/sitemap.ts`.
- 2026-08-31 — Tạo chuyên mục Tin tức và 7 bài khung có metadata, Article/Breadcrumb schema, alt text và internal links — `app/tin-tuc/`, `lib/blog.ts`.
- 2026-08-31 — Verify `npm run build` thành công; smoke test 200 cho `/`, `/tin-tuc`, bài viết, `/sitemap.xml`, `/robots.txt`; sitemap có 9 URL; JSON-LD parse hợp lệ; scan không tìm thấy `<img>` thiếu `alt`.
- 2026-08-31 — Lighthouse CLI không có sẵn, chưa đo được điểm tự động — đã ghi rõ trong `SEO-AUDIT.md`.
- 2026-08-31 — Tối ưu hiệu suất mobile: tạo WebP resize cho banner, bản đồ, hồ bơi, logo, ảnh nhà mẫu, ảnh chủ đầu tư và mặt bằng block; chuyển tham chiếu hiển thị sang WebP, giữ nguyên JPG/PNG gốc. Tổng dung lượng nhóm WebP mới khoảng 1.78 MB so với khoảng 20.64 MB raster gốc tương ứng.

## Cấu hình cần cung cấp khi triển khai

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 Measurement ID.
- `NEXT_PUBLIC_GSC_VERIFICATION`: mã meta verification của Google Search Console.

## Việc chủ site (không phải Codex) cần tự làm

- [ ] Tạo Google Search Console, thêm property và submit `https://bcontamhiep.com/sitemap.xml`.
- [ ] Tạo/tối ưu Google Business Profile cho dự án với địa chỉ, số điện thoại và hình ảnh chính thức.
- [ ] Bổ sung và kiểm duyệt nội dung thật cho 7 bài khung, đặc biệt giá, pháp lý, tiến độ và chính sách.
- [ ] Xây backlink và social signal từ nguồn liên quan, đáng tin cậy.
- [ ] Đăng ký Bing Webmaster Tools (tùy chọn).
- [ ] Theo dõi ranking hàng tuần cho `bcon biên hòa`, `bcon tam hiệp`, `bcon central park` và báo lại nếu cần điều chỉnh nội dung.
