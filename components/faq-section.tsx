import Link from 'next/link';

const faqs = [
  ['BCONS Central Park ở đâu?', 'Dự án được giới thiệu tại đường Phan Trung, phường Tam Hiệp, Biên Hòa. Vui lòng đối chiếu địa chỉ với hồ sơ chính thức khi nhận tư vấn.'],
  ['BCONS Central Park có những loại căn hộ nào?', 'Thông tin tổng quan hiện liệt kê các loại căn hộ 1PN, 2PN và 3PN. Diện tích, mã căn và bảng hàng cần được xác nhận theo tài liệu cập nhật.'],
  ['Làm sao xem mặt bằng BCONS Central Park?', 'Bạn có thể xem khu vực mặt bằng căn hộ trên trang chủ hoặc đọc bài hướng dẫn mặt bằng trong chuyên mục Tin tức.'],
  ['Giá bán và chính sách thanh toán thế nào?', 'Giá bán và chính sách thay đổi theo thời điểm, sản phẩm và chương trình áp dụng. Hãy gọi 0979 083 300 để nhận thông tin chính thức.'],
  ['Tiến độ bàn giao dự kiến khi nào?', 'Source dự án hiện ghi bàn giao dự kiến Quý 2/2029. Đây là mốc dự kiến và cần được kiểm tra lại theo thông báo chính thức mới nhất.'],
];

export default function FaqSection() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return <section id="faq" className="bg-[#f1eee5] px-[10%] py-[14vh] text-[#294630]" aria-labelledby="faq-title">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="mx-auto max-w-[1000px]"><p className="text-[10px] font-semibold tracking-[.24em] text-[#c7922c]">GIẢI ĐÁP NHANH</p><h2 id="faq-title" className="mt-4 font-serif text-[clamp(42px,5vw,76px)] font-normal leading-none">Câu hỏi thường gặp<br /><em className="text-[#c7922c]">về BCONS Central Park</em></h2><div className="mt-12 grid gap-0 border-t border-[#294630]/20">{faqs.map(([question, answer]) => <details key={question} className="border-b border-[#294630]/20 py-5"><summary className="cursor-pointer text-[17px] font-semibold">{question}</summary><p className="max-w-[720px] pt-3 text-[14px] leading-7 text-[#526157]">{answer}</p></details>)}</div><Link href="/tin-tuc" className="mt-8 inline-flex rounded-full border border-[#294630] px-5 py-3 text-[12px] font-semibold tracking-[.12em] text-[#294630] no-underline transition-colors hover:bg-[#294630] hover:text-white">XEM TIN TỨC DỰ ÁN ↗</Link></div>
  </section>;
}
