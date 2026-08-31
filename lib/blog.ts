export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  image: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

const editorialNote = 'Nội dung khung cần chủ site kiểm duyệt và bổ sung nguồn chính thức trước khi xuất bản. Không sử dụng đoạn này như cam kết về giá, pháp lý, tiến độ hoặc chính sách nếu chưa có tài liệu xác nhận.';

export const blogPosts: BlogPost[] = [
  {
    slug: 'bcons-central-park-bien-hoa-tong-quan',
    title: 'BCons Central Park Biên Hòa: Tổng quan dự án, vị trí, tiện ích',
    description: 'Khung nội dung tổng quan BCons Central Park Biên Hòa tại phường Tam Hiệp, gồm vị trí, mặt bằng, tiện ích và thông tin cần kiểm chứng.',
    keyword: 'bcons central park biên hòa',
    image: '/assets/banner.webp',
    sections: [
      { heading: 'Tổng quan BCons Central Park Biên Hòa', paragraphs: [editorialNote, 'BCons Central Park là tên thương mại được sử dụng trong website cho khu nhà ở phức hợp cao tầng tại phường Tam Hiệp. Trang tổng quan hiện ghi nhận vị trí trên đường Phan Trung, Thành phố Đồng Nai, cùng định hướng phát triển một không gian sống xanh giữa lòng Biên Hòa.', 'Khi hoàn thiện bài chính thức, phần này nên giới thiệu rõ tên pháp lý, chủ đầu tư, quy mô và thời điểm bàn giao dự kiến theo hồ sơ được duyệt. Các thông tin cần có nguồn trích dẫn hoặc tài liệu đính kèm để người đọc dễ kiểm tra.'] },
      { heading: 'Vị trí tại Tam Hiệp và khả năng kết nối', paragraphs: ['Vị trí là một trong những chủ đề người tìm kiếm BCons Central Park quan tâm. Nội dung nên mô tả đường Phan Trung, phường Tam Hiệp và các điểm kết nối đã được chủ site xác nhận, đồng thời phân biệt khoảng cách tham khảo với thời gian di chuyển thực tế.', 'Bản đồ liên kết vùng trên trang chủ là tài sản trực quan giúp người đọc hình dung khu vực. Khi xuất bản, chủ site nên cập nhật chú thích, ngày kiểm tra và nguồn dữ liệu bản đồ nếu có thay đổi hành chính hoặc hạ tầng.'] },
      { heading: 'Mặt bằng, tiện ích và trải nghiệm sống', paragraphs: ['Website đang có các nhóm mặt bằng block Bamboo, Orchid, Tamarind và nhiều loại căn hộ 1PN, 2PN, 3PN. Bài pillar nên liên kết đến bài mặt bằng riêng để người đọc xem hình ảnh chi tiết thay vì lặp lại toàn bộ thông số ở một trang.', 'Các khu vực hồ bơi, nhà mẫu và tiện ích được thể hiện bằng hình ảnh trong landing page. Cần bổ sung mô tả chính thức cho từng tiện ích, tình trạng triển khai và điều kiện sử dụng trước khi dùng như thông tin bán hàng.'] },
      { heading: 'Thông tin cần xem trước khi đăng ký', paragraphs: ['Người quan tâm nên đối chiếu thông tin dự án, hồ sơ pháp lý, chính sách thanh toán và tiến độ với đơn vị tư vấn. Website chỉ nên dùng các nội dung đã được phê duyệt và ghi rõ thời điểm cập nhật.', 'Phần kết bài có thể dẫn về form tư vấn, bài vị trí, bài mặt bằng, bài pháp lý và bài tiện ích. Cách liên kết này giúp người đọc đi từ thông tin tổng quan đến câu hỏi cụ thể mà không cần tìm lại trên menu.'] },
    ],
  },
  {
    slug: 'vi-tri-bcons-central-park-tam-hiep',
    title: 'Vị trí BCons Central Park tại phường Tam Hiệp có gì đặc biệt?',
    description: 'Khung bài SEO về vị trí BCons Central Park tại phường Tam Hiệp, Biên Hòa và cách kiểm chứng các điểm kết nối quanh dự án.',
    keyword: 'bcons tam hiệp', image: '/assets/map_lien_ket_vung.webp',
    sections: [
      { heading: 'Địa chỉ dự án và bối cảnh khu vực', paragraphs: [editorialNote, 'BCons Central Park được giới thiệu tại đường Phan Trung, phường Tam Hiệp, Biên Hòa. Đây là điểm thông tin nên đặt ở đầu bài để trả lời trực tiếp nhu cầu tìm kiếm “BCons Tam Hiệp”. Chủ site cần rà lại cách ghi địa danh theo hồ sơ và cập nhật nếu tên đơn vị hành chính thay đổi.', 'Bài viết nên dùng bản đồ, ảnh khu vực và mốc thời gian cập nhật để tránh tạo kỳ vọng sai về kết nối.'] },
      { heading: 'Kết nối tiện ích và giao thông', paragraphs: ['Trang chủ hiện liệt kê các điểm đến tham khảo như Vincom Biên Hòa, Co.op Mart Biên Hòa, GO! Tân Hiệp, bệnh viện, trường học, khu công nghiệp và TP. Thủ Đức. Các khoảng thời gian hiển thị trên site cần được hiểu là thông tin tham khảo, không phải cam kết thời gian di chuyển.', 'Để tăng độ tin cậy, chủ site nên bổ sung nguồn bản đồ, điều kiện giao thông và ngày khảo sát. Những thay đổi đường sá hoặc quy hoạch cần được cập nhật định kỳ.'] },
      { heading: 'Tam Hiệp phù hợp với ai?', paragraphs: ['Phần này có thể phân tích nhu cầu của người làm việc tại Biên Hòa, gia đình cần tiếp cận trường học và y tế, hoặc người muốn tìm hiểu một dự án gần các tiện ích hiện hữu. Không nên đưa ra kết luận đầu tư hay lợi nhuận nếu chưa có dữ liệu được phê duyệt.', 'Một đoạn CTA phù hợp là mời người đọc xem mặt bằng, tìm hiểu tiện ích hoặc gửi câu hỏi cho đội ngũ tư vấn.'] },
      { heading: 'Checklist kiểm tra vị trí', paragraphs: ['Người đọc nên xem địa chỉ trên hồ sơ chính thức, đối chiếu bản đồ, kiểm tra đường vào thực tế và hỏi rõ các tiện ích đã hiện hữu hay mới ở kế hoạch. Đây là cách biến bài SEO thành nội dung hữu ích thay vì chỉ lặp từ khóa.', 'Liên kết nội bộ về trang chủ và bài tổng quan giúp người đọc tiếp tục khám phá dự án.'] },
    ],
  },
  {
    slug: 'mat-bang-can-ho-bcons-central-park', title: 'Mặt bằng căn hộ BCons Central Park: 1PN, 2PN, 3PN chi tiết', description: 'Khung bài về mặt bằng căn hộ BCons Central Park với các nhóm 1PN, 2PN, 3PN và hướng dẫn đọc bản vẽ.', keyword: 'mặt bằng bcons central park', image: '/assets/mat_bang_can_2pn_b1_66m2.jpg', sections: [
      { heading: 'Cách đọc mặt bằng BCons Central Park', paragraphs: [editorialNote, 'Mặt bằng căn hộ cần được trình bày cùng mã căn, diện tích, hướng cửa, vị trí ban công và các ghi chú kỹ thuật theo tài liệu chính thức. Người đọc thường cần một phần giải thích ngắn về ký hiệu để có thể so sánh các phương án.', 'Website hiện có các hình ảnh mặt bằng căn hộ và mặt bằng tầng. Bài viết nên dùng ảnh đúng mã căn, alt text mô tả rõ và ghi ngày cập nhật.'] },
      { heading: 'Nhóm căn 1PN, 2PN và 3PN', paragraphs: ['Các nhóm 1PN, 2PN và 3PN được liệt kê trong thông tin dự án. Phần nội dung chi tiết về diện tích và công năng nên để placeholder cho đến khi chủ site xác nhận bảng hàng và bản vẽ được phép công bố.', 'Thay vì khẳng định một phương án là tốt nhất, bài nên mô tả tiêu chí lựa chọn: số người ở, nhu cầu làm việc tại nhà, ngân sách và mong muốn về ánh sáng, thông thoáng.'] },
      { heading: 'Mặt bằng tầng và trải nghiệm sử dụng', paragraphs: ['Mặt bằng tầng điển hình giúp người xem hiểu vị trí thang máy, hành lang và cách các căn bố trí quanh lõi giao thông. Cần chú thích rõ block và tầng để tránh nhầm giữa ảnh minh họa với bản vẽ chính thức.', 'Một liên kết đến trang chủ và bài tổng quan sẽ giúp người đọc nắm được bối cảnh vị trí, tiện ích trước khi xem chi tiết căn hộ.'] },
      { heading: 'Câu hỏi nên hỏi khi nhận tư vấn', paragraphs: ['Người mua nên hỏi rõ diện tích thông thủy, tim tường, hướng, nội thất bàn giao, phí quản lý và tình trạng pháp lý của sản phẩm. Những thông tin này cần được xác nhận bằng tài liệu và thời điểm cụ thể.', 'Bài viết là khung biên tập, không thay thế bảng hàng hoặc tư vấn pháp lý.'] },
    ] },
  {
    slug: 'gia-ban-chinh-sach-thanh-toan-bcons-central-park', title: 'Bảng giá & chính sách thanh toán BCons Central Park mới nhất', description: 'Khung bài cập nhật giá bán và chính sách thanh toán BCons Central Park, có vùng chờ dữ liệu chính thức từ chủ site.', keyword: 'giá bán bcons central park', image: '/assets/banner.webp', sections: [
      { heading: 'Lưu ý về giá bán', paragraphs: [editorialNote, 'Giá bán bất động sản có thể thay đổi theo thời điểm, block, tầng, hướng, diện tích và chính sách kinh doanh. Vì vậy bài viết cần có ngày cập nhật rõ ràng và không nên dùng cụm “mới nhất” nếu chưa được kiểm tra lại.', 'Khu vực này nên để bảng giá hoặc file chính thức do chủ site cung cấp, kèm điều kiện áp dụng và thông tin liên hệ.'] },
      { heading: 'Các thành phần của chính sách thanh toán', paragraphs: ['Một bài hữu ích nên giải thích các mốc thanh toán, khoản đặt cọc, lịch ký hợp đồng và điều kiện vay nếu có. Tất cả tỷ lệ, số tiền và thời hạn đều là placeholder cho đến khi có văn bản được duyệt.', 'Không nên suy đoán ưu đãi, chiết khấu, lãi suất hoặc cam kết lợi nhuận.'] },
      { heading: 'Cách so sánh phương án tài chính', paragraphs: ['Người đọc có thể lập bảng dòng tiền theo thu nhập, khoản vốn sẵn có và mức dự phòng. Phần này nên mang tính giáo dục chung, không phải lời khuyên tài chính cá nhân.', 'Liên kết đến bài mặt bằng giúp người đọc xác định loại căn trước khi hỏi giá.'] },
      { heading: 'Đăng ký nhận thông tin chính thức', paragraphs: ['CTA nên hướng người đọc đến hotline 0979 083 300 hoặc form tư vấn trên trang chủ. Nên ghi rõ thông tin được tiếp nhận để tư vấn và có thể thay đổi theo từng thời điểm.', 'Chủ site cần cập nhật bài ngay khi chính sách hết hiệu lực.'] },
    ] },
  {
    slug: 'phap-ly-chu-dau-tu-bcons-group', title: 'Tiến độ pháp lý & chủ đầu tư BCons Group', description: 'Khung bài về chủ đầu tư và tiến độ pháp lý BCons Central Park, chỉ xuất bản số liệu sau khi đối chiếu hồ sơ.', keyword: 'chủ đầu tư bcons central park', image: '/assets/cdt_ra_so.webp', sections: [
      { heading: 'Vai trò của thông tin pháp lý', paragraphs: [editorialNote, 'Thông tin pháp lý là phần người mua cần kiểm tra độc lập và theo tài liệu chính thức. Bài viết nên phân biệt tên thương mại, tên pháp lý, chủ đầu tư, đơn vị phát triển và đơn vị phân phối nếu có.', 'Source hiện ghi tên pháp lý và chủ đầu tư trong phần tổng quan dự án; hãy giữ nguyên cách ghi đã được duyệt khi bổ sung tài liệu.'] },
      { heading: 'Hồ sơ nên được dẫn nguồn', paragraphs: ['Tùy giai đoạn, hồ sơ có thể gồm quyết định, giấy phép, văn bản đủ điều kiện và tài liệu liên quan. Không nên liệt kê một loại giấy tờ nếu chưa có bản scan hoặc nguồn xác minh.', 'Mỗi tài liệu nên có ngày ban hành, cơ quan ban hành và phạm vi áp dụng rõ ràng.'] },
      { heading: 'Cập nhật tiến độ minh bạch', paragraphs: ['Bài nên có timeline theo mốc tháng/quý và hình ảnh hiện trường nếu được phép sử dụng. Nội dung cần ghi rõ mốc “dự kiến” và “đã xác nhận” để tránh nhầm lẫn.', 'Chủ site có thể dùng nhật ký cập nhật để người đọc biết thông tin nào đã thay đổi.'] },
      { heading: 'Nguồn tham khảo cho người mua', paragraphs: ['Người đọc nên yêu cầu xem tài liệu, hỏi đơn vị tư vấn và tham khảo ý kiến chuyên gia độc lập trước quyết định. Website có thể cung cấp checklist câu hỏi thay vì đưa ra kết luận thay người mua.', 'Liên kết về bài tổng quan và trang liên hệ hoàn thiện hành trình thông tin.'] },
    ] },
  {
    slug: 'so-sanh-bcons-central-park-bien-hoa', title: 'So sánh BCons Central Park với các dự án khác tại Biên Hòa', description: 'Khung bài so sánh BCons Central Park với dự án khác tại Biên Hòa theo vị trí, mặt bằng, tiện ích và dữ liệu cần kiểm chứng.', keyword: 'dự án bcons biên hòa', image: '/assets/vi_tri_gan.webp', sections: [
      { heading: 'Nguyên tắc so sánh công bằng', paragraphs: [editorialNote, 'So sánh dự án cần dùng cùng tiêu chí và cùng thời điểm: vị trí, quy mô, loại căn, diện tích, tiện ích, pháp lý, bàn giao và chi phí liên quan. Không nên chọn số liệu thuận lợi của một dự án rồi so với số liệu chưa đầy đủ của dự án khác.', 'Bài viết nên nêu rõ nguồn và ngày lấy dữ liệu.'] },
      { heading: 'Vị trí và kết nối', paragraphs: ['BCons Central Park được giới thiệu tại đường Phan Trung, phường Tam Hiệp. Khi so sánh, cần đo cùng một mốc và điều kiện giao thông, thay vì dùng những khoảng cách quảng cáo không đồng nhất.', 'Bản đồ và bảng tiêu chí có thể giúp người đọc tự đánh giá theo nhu cầu của họ.'] },
      { heading: 'Thiết kế và tiện ích', paragraphs: ['Mặt bằng, mật độ, không gian xanh và tiện ích nên được mô tả bằng tài liệu hoặc hình ảnh đã được phép công bố. Nếu thiếu dữ liệu của dự án đối chiếu, hãy đánh dấu “chưa có dữ liệu” thay vì suy đoán.', 'Internal link đến bài mặt bằng và tiện ích giúp giảm lặp nội dung.'] },
      { heading: 'Ai nên tham khảo bài viết?', paragraphs: ['Bài so sánh phù hợp với người đang lập shortlist. Quyết định cuối cùng nên dựa trên nhu cầu ở, khả năng tài chính, hồ sơ pháp lý và mức độ phù hợp thực tế.', 'Đây là nội dung khung cần biên tập cùng dữ liệu chính thức trước khi xuất bản.'] },
    ] },
  {
    slug: 'tien-ich-noi-khu-lien-ket-vung-bcons-central-park', title: 'Tiện ích nội khu & liên kết vùng quanh BCons Central Park', description: 'Khung bài về tiện ích nội khu và liên kết vùng quanh BCons Central Park Biên Hòa, kèm checklist cập nhật dữ liệu.', keyword: 'tiện ích bcons central park', image: '/assets/BeBoi.webp', sections: [
      { heading: 'Tiện ích nội khu', paragraphs: [editorialNote, 'Website hiện có hình ảnh hồ bơi, nhà mẫu và các khu vực trải nghiệm. Bài viết nên phân nhóm tiện ích theo vận động, thư giãn, trẻ em, cộng đồng và thương mại nếu có thông tin chính thức.', 'Mỗi tiện ích cần ghi rõ trạng thái: đã có, đang triển khai hay dự kiến; không nên dùng hình phối cảnh như bằng chứng đã hoàn thành.'] },
      { heading: 'Liên kết vùng tại Biên Hòa', paragraphs: ['Bản đồ liên kết vùng trên trang chủ cho người đọc góc nhìn tổng quát về các điểm đến quanh khu vực. Các mốc trường học, bệnh viện, trung tâm thương mại và khu công nghiệp nên được kiểm tra lại theo bản đồ hiện hành.', 'Khoảng cách và thời gian di chuyển chỉ nên dùng như thông tin tham khảo có ngày cập nhật.'] },
      { heading: 'Trải nghiệm sống và cộng đồng', paragraphs: ['Phần nội dung có thể mô tả cách các không gian chung hỗ trợ sinh hoạt hàng ngày, kết nối cư dân và tạo thêm lựa chọn thư giãn. Hãy tránh các tính từ tuyệt đối nếu không có tiêu chí đo lường.', 'Ảnh cần alt text mô tả nội dung thực tế, không nhồi từ khóa.'] },
      { heading: 'Checklist trước khi tham khảo', paragraphs: ['Người đọc nên hỏi rõ thời điểm hoàn thiện, quy chế sử dụng, phí dịch vụ và phạm vi sở hữu/quản lý của từng tiện ích. Những câu hỏi này giúp phân biệt thông tin bán hàng với trải nghiệm có thể sử dụng.', 'Liên kết về bài vị trí, mặt bằng và trang liên hệ giúp người đọc đi sâu hơn.'] },
    ] },
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
