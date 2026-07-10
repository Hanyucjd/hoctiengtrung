/* ==========================================================================
   DATA.JS — Đây là nơi DUY NHẤT bạn cần chỉnh sửa để thêm nội dung mới.
   Không cần biết lập trình, chỉ cần tìm đúng bài và sửa lại giá trị trong
   dấu ngoặc kép "..." . Nhớ giữ đúng dấu phẩy, dấu ngoặc kép và ngoặc { }.

   Hướng dẫn chi tiết (lấy link Google Drive, thêm bộ/quyển/bài mới...) nằm
   trong README.md ở thư mục gốc.
   ========================================================================== */

const CONTENT = {

  /* ==========================================================================
     GIÁO TRÌNH — có 3 tầng liên kết với nhau bằng "id":

       1) seriesList  → các Ô/BỘ GIÁO TRÌNH, hiện dạng lưới trên giao-trinh.html
                         (HSK 2.0, HSK 3.0, Hán ngữ, Boya, Msutong...)
       2) volumes     → các QUYỂN cụ thể bên trong 1 bộ (HSK 1, HSK 2, HSK 3...),
                         mỗi quyển có "seriesId" trỏ tới 1 bộ trong seriesList
       3) lessons     → các BÀI HỌC cụ thể bên trong 1 quyển (Bài 1, Bài 2...),
                         mỗi bài có "volumeId" trỏ tới 1 quyển trong volumes,
                         và chứa link PDF / sách bài tập / audio của bài đó

     Đường đi của học sinh: Trang Giáo trình → chọn Bộ → chọn Quyển → chọn Bài
     ========================================================================== */

  seriesList: [
    {
      id: "hsk2-0",
      title: "Giáo trình chuẩn HSK 2.0",
      hanzi: "旧",
      description: "Bộ giáo trình HSK theo khung năng lực cũ (2.0), quen thuộc và phổ biến nhất."
    },
    {
      id: "hsk3-0",
      title: "Giáo trình chuẩn HSK 3.0",
      hanzi: "新",
      description: "Bộ giáo trình theo khung năng lực HSK 3.0 mới, chia nhỏ cấp độ hơn."
    },
    {
      id: "han-ngu",
      title: "Giáo trình Hán ngữ",
      hanzi: "汉",
      description: "Giáo trình Hán ngữ kinh điển, luyện đủ 4 kỹ năng nghe – nói – đọc – viết."
    },
    {
      id: "boya",
      title: "Giáo trình Boya",
      hanzi: "博",
      description: "Giáo trình Boya, chú trọng hội thoại thực tế và tình huống giao tiếp."
    },
    {
      id: "msutong",
      title: "Giáo trình Msutong",
      hanzi: "速",
      description: "Giáo trình Msutong dùng cho sinh viên quốc tế, tốc độ vừa phải, nhiều bài luyện tập."
    }
    // Thêm bộ giáo trình mới: sao chép 1 khối trên, đổi id/title/hanzi/description
  ],

  /* ------------------------------------------------------------------
     Các QUYỂN trong từng bộ. "seriesId" phải trùng "id" ở seriesList.
     ------------------------------------------------------------------ */
  volumes: [
    // ---- Bộ HSK 2.0 (9 quyển) ----
    { id: "hsk1-20",        seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 1 (2.0)",       description: "15 bài — nền tảng ngữ âm và giao tiếp cơ bản." },
    { id: "hsk2-20",        seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 2 (2.0)",       description: "15 bài — mở rộng vốn từ và mẫu câu." },
    { id: "hsk3-20",        seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 3 (2.0)",       description: "20 bài — ngữ pháp và hội thoại nâng cao hơn." },
    { id: "hsk4-thuong-20", seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 4 Thượng (2.0)", description: "10 bài — nửa đầu cấp độ 4." },
    { id: "hsk4-ha-20",     seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 4 Hạ (2.0)",     description: "10 bài — nửa sau cấp độ 4." },
    { id: "hsk5-thuong-20", seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 5 Thượng (2.0)", description: "10 bài — nửa đầu cấp độ 5." },
    { id: "hsk5-ha-20",     seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 5 Hạ (2.0)",     description: "10 bài — nửa sau cấp độ 5." },
    { id: "hsk6-thuong-20", seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 6 Thượng (2.0)", description: "10 bài — nửa đầu cấp độ 6." },
    { id: "hsk6-ha-20",     seriesId: "hsk2-0", title: "Giáo trình chuẩn HSK 6 Hạ (2.0)",     description: "10 bài — nửa sau cấp độ 6." },

    // ---- Bộ HSK 3.0 (thêm ví dụ 2 quyển đầu — sao chép mẫu để thêm các cấp còn lại) ----
    { id: "hsk1-30", seriesId: "hsk3-0", title: "Giáo trình chuẩn HSK 1 (3.0)", description: "10 bài — khung năng lực HSK 3.0, cấp 1." },
    { id: "hsk2-30", seriesId: "hsk3-0", title: "Giáo trình chuẩn HSK 2 (3.0)", description: "10 bài — khung năng lực HSK 3.0, cấp 2." },

    // ---- Bộ Hán ngữ (ví dụ 2 quyển — thêm tương tự cho các quyển tiếp theo) ----
    { id: "han-ngu-1", seriesId: "han-ngu", title: "Giáo trình Hán ngữ 1", description: "10 bài." },
    { id: "han-ngu-2", seriesId: "han-ngu", title: "Giáo trình Hán ngữ 2", description: "10 bài." },

    // ---- Bộ Boya (ví dụ 1 quyển — thêm tương tự cho các quyển tiếp theo) ----
    { id: "boya-so-cap-1", seriesId: "boya", title: "Boya Hán ngữ — Sơ cấp 1", description: "10 bài." },

    // ---- Bộ Msutong (ví dụ 1 quyển — thêm tương tự cho các quyển tiếp theo) ----
    { id: "msutong-so-cap-1", seriesId: "msutong", title: "Msutong Hán ngữ — Sơ cấp 1", description: "10 bài." }

    // Thêm quyển mới cho 1 bộ đã có: sao chép 1 dòng trên, giữ đúng seriesId
  ],

  /* ==========================================================================
     CÁC BÀI HỌC — liệt kê đầy đủ TỪNG BÀI MỘT (170 bài), không dùng hàm sinh
     tự động nữa. Muốn sửa link PDF / audio của bài nào, chỉ cần Ctrl+F tìm
     đúng "id" của bài đó (ví dụ "hsk1-20-bai1"), rồi sửa 3 chỗ url/src.

     Mỗi bài có dạng:
       {
         id: "...",            → mã riêng của bài, không sửa
         volumeId: "...",      → quyển chứa bài này, không sửa
         title: "...",         → tên hiển thị của bài, có thể sửa nếu muốn
         materials: [ ... ],   → 2 file PDF: Giáo trình + Sách bài tập
         audios: [ ... ]       → 1 file audio đi kèm
       }

     CÁCH ĐIỀN LINK PDF (Google Drive):
       1. Tải file PDF lên Google Drive → Chuột phải → Chia sẻ → đổi thành
          "Bất kỳ ai có đường liên kết".
       2. Sao chép link dạng: https://drive.google.com/file/d/1AbCDeFGhIJ.../view?usp=sharing
       3. Lấy đoạn mã ở giữa (1AbCDeFGhIJ...) ghép vào theo mẫu:
          https://drive.google.com/file/d/1AbCDeFGhIJ.../preview
       4. Dán link "…/preview" đó vào chỗ url tương ứng, thay cho chữ
          DAN_LINK_PDF_GIAO_TRINH hoặc DAN_LINK_PDF_BAI_TAP.

     CÁCH ĐIỀN FILE AUDIO:
       - Đặt file .mp3 vào thư mục assets/audio/, rồi sửa "src" thành đúng
         tên file đó, ví dụ: src: "assets/audio/hsk1-20-bai1.mp3"
       - Hoặc nếu audio để trên Google Drive, dùng link dạng:
         https://drive.google.com/uc?export=download&id=1AbCDeFGhIJ...
     ========================================================================== */
  lessons: [

    // ==================== hsk1-20 (15 bài) ====================
    {
      id: "hsk1-20-bai1",
      volumeId: "hsk1-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk1-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai2",
      volumeId: "hsk1-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk1-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai3",
      volumeId: "hsk1-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk1-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai4",
      volumeId: "hsk1-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk1-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai5",
      volumeId: "hsk1-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk1-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai6",
      volumeId: "hsk1-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk1-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai7",
      volumeId: "hsk1-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk1-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai8",
      volumeId: "hsk1-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk1-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai9",
      volumeId: "hsk1-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk1-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai10",
      volumeId: "hsk1-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk1-20-bai10.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai11",
      volumeId: "hsk1-20",
      title: "Bài 11",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 11 — Audio", src: "assets/audio/hsk1-20-bai11.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai12",
      volumeId: "hsk1-20",
      title: "Bài 12",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 12 — Audio", src: "assets/audio/hsk1-20-bai12.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai13",
      volumeId: "hsk1-20",
      title: "Bài 13",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 13 — Audio", src: "assets/audio/hsk1-20-bai13.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai14",
      volumeId: "hsk1-20",
      title: "Bài 14",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 14 — Audio", src: "assets/audio/hsk1-20-bai14.mp3" }
      ]
    },
    {
      id: "hsk1-20-bai15",
      volumeId: "hsk1-20",
      title: "Bài 15",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 15 — Audio", src: "assets/audio/hsk1-20-bai15.mp3" }
      ]
    },

    // ==================== hsk2-20 (15 bài) ====================
    {
      id: "hsk2-20-bai1",
      volumeId: "hsk2-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk2-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai2",
      volumeId: "hsk2-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk2-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai3",
      volumeId: "hsk2-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk2-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai4",
      volumeId: "hsk2-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk2-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai5",
      volumeId: "hsk2-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk2-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai6",
      volumeId: "hsk2-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk2-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai7",
      volumeId: "hsk2-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk2-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai8",
      volumeId: "hsk2-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk2-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai9",
      volumeId: "hsk2-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk2-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai10",
      volumeId: "hsk2-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk2-20-bai10.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai11",
      volumeId: "hsk2-20",
      title: "Bài 11",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 11 — Audio", src: "assets/audio/hsk2-20-bai11.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai12",
      volumeId: "hsk2-20",
      title: "Bài 12",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 12 — Audio", src: "assets/audio/hsk2-20-bai12.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai13",
      volumeId: "hsk2-20",
      title: "Bài 13",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 13 — Audio", src: "assets/audio/hsk2-20-bai13.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai14",
      volumeId: "hsk2-20",
      title: "Bài 14",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 14 — Audio", src: "assets/audio/hsk2-20-bai14.mp3" }
      ]
    },
    {
      id: "hsk2-20-bai15",
      volumeId: "hsk2-20",
      title: "Bài 15",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 15 — Audio", src: "assets/audio/hsk2-20-bai15.mp3" }
      ]
    },

    // ==================== hsk3-20 (20 bài) ====================
    {
      id: "hsk3-20-bai1",
      volumeId: "hsk3-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk3-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai2",
      volumeId: "hsk3-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk3-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai3",
      volumeId: "hsk3-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk3-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai4",
      volumeId: "hsk3-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk3-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai5",
      volumeId: "hsk3-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk3-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai6",
      volumeId: "hsk3-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk3-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai7",
      volumeId: "hsk3-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk3-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai8",
      volumeId: "hsk3-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk3-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai9",
      volumeId: "hsk3-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk3-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai10",
      volumeId: "hsk3-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk3-20-bai10.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai11",
      volumeId: "hsk3-20",
      title: "Bài 11",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 11 — Audio", src: "assets/audio/hsk3-20-bai11.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai12",
      volumeId: "hsk3-20",
      title: "Bài 12",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 12 — Audio", src: "assets/audio/hsk3-20-bai12.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai13",
      volumeId: "hsk3-20",
      title: "Bài 13",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 13 — Audio", src: "assets/audio/hsk3-20-bai13.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai14",
      volumeId: "hsk3-20",
      title: "Bài 14",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 14 — Audio", src: "assets/audio/hsk3-20-bai14.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai15",
      volumeId: "hsk3-20",
      title: "Bài 15",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 15 — Audio", src: "assets/audio/hsk3-20-bai15.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai16",
      volumeId: "hsk3-20",
      title: "Bài 16",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 16 — Audio", src: "assets/audio/hsk3-20-bai16.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai17",
      volumeId: "hsk3-20",
      title: "Bài 17",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 17 — Audio", src: "assets/audio/hsk3-20-bai17.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai18",
      volumeId: "hsk3-20",
      title: "Bài 18",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 18 — Audio", src: "assets/audio/hsk3-20-bai18.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai19",
      volumeId: "hsk3-20",
      title: "Bài 19",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 19 — Audio", src: "assets/audio/hsk3-20-bai19.mp3" }
      ]
    },
    {
      id: "hsk3-20-bai20",
      volumeId: "hsk3-20",
      title: "Bài 20",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 20 — Audio", src: "assets/audio/hsk3-20-bai20.mp3" }
      ]
    },

    // ==================== hsk4-thuong-20 (10 bài) ====================
    {
      id: "hsk4-thuong-20-bai1",
      volumeId: "hsk4-thuong-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk4-thuong-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai2",
      volumeId: "hsk4-thuong-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk4-thuong-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai3",
      volumeId: "hsk4-thuong-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk4-thuong-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai4",
      volumeId: "hsk4-thuong-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk4-thuong-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai5",
      volumeId: "hsk4-thuong-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk4-thuong-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai6",
      volumeId: "hsk4-thuong-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk4-thuong-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai7",
      volumeId: "hsk4-thuong-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk4-thuong-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai8",
      volumeId: "hsk4-thuong-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk4-thuong-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai9",
      volumeId: "hsk4-thuong-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk4-thuong-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk4-thuong-20-bai10",
      volumeId: "hsk4-thuong-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk4-thuong-20-bai10.mp3" }
      ]
    },

    // ==================== hsk4-ha-20 (10 bài) ====================
    {
      id: "hsk4-ha-20-bai1",
      volumeId: "hsk4-ha-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk4-ha-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai2",
      volumeId: "hsk4-ha-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk4-ha-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai3",
      volumeId: "hsk4-ha-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk4-ha-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai4",
      volumeId: "hsk4-ha-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk4-ha-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai5",
      volumeId: "hsk4-ha-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk4-ha-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai6",
      volumeId: "hsk4-ha-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk4-ha-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai7",
      volumeId: "hsk4-ha-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk4-ha-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai8",
      volumeId: "hsk4-ha-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk4-ha-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai9",
      volumeId: "hsk4-ha-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk4-ha-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk4-ha-20-bai10",
      volumeId: "hsk4-ha-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk4-ha-20-bai10.mp3" }
      ]
    },

    // ==================== hsk5-thuong-20 (10 bài) ====================
    {
      id: "hsk5-thuong-20-bai1",
      volumeId: "hsk5-thuong-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk5-thuong-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai2",
      volumeId: "hsk5-thuong-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk5-thuong-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai3",
      volumeId: "hsk5-thuong-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk5-thuong-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai4",
      volumeId: "hsk5-thuong-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk5-thuong-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai5",
      volumeId: "hsk5-thuong-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk5-thuong-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai6",
      volumeId: "hsk5-thuong-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk5-thuong-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai7",
      volumeId: "hsk5-thuong-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk5-thuong-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai8",
      volumeId: "hsk5-thuong-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk5-thuong-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai9",
      volumeId: "hsk5-thuong-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk5-thuong-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk5-thuong-20-bai10",
      volumeId: "hsk5-thuong-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk5-thuong-20-bai10.mp3" }
      ]
    },

    // ==================== hsk5-ha-20 (10 bài) ====================
    {
      id: "hsk5-ha-20-bai1",
      volumeId: "hsk5-ha-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk5-ha-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai2",
      volumeId: "hsk5-ha-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk5-ha-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai3",
      volumeId: "hsk5-ha-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk5-ha-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai4",
      volumeId: "hsk5-ha-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk5-ha-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai5",
      volumeId: "hsk5-ha-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk5-ha-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai6",
      volumeId: "hsk5-ha-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk5-ha-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai7",
      volumeId: "hsk5-ha-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk5-ha-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai8",
      volumeId: "hsk5-ha-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk5-ha-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai9",
      volumeId: "hsk5-ha-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk5-ha-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk5-ha-20-bai10",
      volumeId: "hsk5-ha-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk5-ha-20-bai10.mp3" }
      ]
    },

    // ==================== hsk6-thuong-20 (10 bài) ====================
    {
      id: "hsk6-thuong-20-bai1",
      volumeId: "hsk6-thuong-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk6-thuong-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai2",
      volumeId: "hsk6-thuong-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk6-thuong-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai3",
      volumeId: "hsk6-thuong-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk6-thuong-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai4",
      volumeId: "hsk6-thuong-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk6-thuong-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai5",
      volumeId: "hsk6-thuong-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk6-thuong-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai6",
      volumeId: "hsk6-thuong-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk6-thuong-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai7",
      volumeId: "hsk6-thuong-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk6-thuong-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai8",
      volumeId: "hsk6-thuong-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk6-thuong-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai9",
      volumeId: "hsk6-thuong-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk6-thuong-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk6-thuong-20-bai10",
      volumeId: "hsk6-thuong-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk6-thuong-20-bai10.mp3" }
      ]
    },

    // ==================== hsk6-ha-20 (10 bài) ====================
    {
      id: "hsk6-ha-20-bai1",
      volumeId: "hsk6-ha-20",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk6-ha-20-bai1.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai2",
      volumeId: "hsk6-ha-20",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk6-ha-20-bai2.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai3",
      volumeId: "hsk6-ha-20",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk6-ha-20-bai3.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai4",
      volumeId: "hsk6-ha-20",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk6-ha-20-bai4.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai5",
      volumeId: "hsk6-ha-20",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk6-ha-20-bai5.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai6",
      volumeId: "hsk6-ha-20",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk6-ha-20-bai6.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai7",
      volumeId: "hsk6-ha-20",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk6-ha-20-bai7.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai8",
      volumeId: "hsk6-ha-20",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk6-ha-20-bai8.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai9",
      volumeId: "hsk6-ha-20",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk6-ha-20-bai9.mp3" }
      ]
    },
    {
      id: "hsk6-ha-20-bai10",
      volumeId: "hsk6-ha-20",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk6-ha-20-bai10.mp3" }
      ]
    },

    // ==================== hsk1-30 (10 bài) ====================
    {
      id: "hsk1-30-bai1",
      volumeId: "hsk1-30",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk1-30-bai1.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai2",
      volumeId: "hsk1-30",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk1-30-bai2.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai3",
      volumeId: "hsk1-30",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk1-30-bai3.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai4",
      volumeId: "hsk1-30",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk1-30-bai4.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai5",
      volumeId: "hsk1-30",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk1-30-bai5.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai6",
      volumeId: "hsk1-30",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk1-30-bai6.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai7",
      volumeId: "hsk1-30",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk1-30-bai7.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai8",
      volumeId: "hsk1-30",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk1-30-bai8.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai9",
      volumeId: "hsk1-30",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk1-30-bai9.mp3" }
      ]
    },
    {
      id: "hsk1-30-bai10",
      volumeId: "hsk1-30",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk1-30-bai10.mp3" }
      ]
    },

    // ==================== hsk2-30 (10 bài) ====================
    {
      id: "hsk2-30-bai1",
      volumeId: "hsk2-30",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/hsk2-30-bai1.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai2",
      volumeId: "hsk2-30",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/hsk2-30-bai2.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai3",
      volumeId: "hsk2-30",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/hsk2-30-bai3.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai4",
      volumeId: "hsk2-30",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/hsk2-30-bai4.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai5",
      volumeId: "hsk2-30",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/hsk2-30-bai5.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai6",
      volumeId: "hsk2-30",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/hsk2-30-bai6.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai7",
      volumeId: "hsk2-30",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/hsk2-30-bai7.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai8",
      volumeId: "hsk2-30",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/hsk2-30-bai8.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai9",
      volumeId: "hsk2-30",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/hsk2-30-bai9.mp3" }
      ]
    },
    {
      id: "hsk2-30-bai10",
      volumeId: "hsk2-30",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/hsk2-30-bai10.mp3" }
      ]
    },

    // ==================== han-ngu-1 (10 bài) ====================
    {
      id: "han-ngu-1-bai1",
      volumeId: "han-ngu-1",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/han-ngu-1-bai1.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai2",
      volumeId: "han-ngu-1",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/han-ngu-1-bai2.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai3",
      volumeId: "han-ngu-1",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/han-ngu-1-bai3.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai4",
      volumeId: "han-ngu-1",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/han-ngu-1-bai4.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai5",
      volumeId: "han-ngu-1",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/han-ngu-1-bai5.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai6",
      volumeId: "han-ngu-1",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/han-ngu-1-bai6.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai7",
      volumeId: "han-ngu-1",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/han-ngu-1-bai7.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai8",
      volumeId: "han-ngu-1",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/han-ngu-1-bai8.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai9",
      volumeId: "han-ngu-1",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/han-ngu-1-bai9.mp3" }
      ]
    },
    {
      id: "han-ngu-1-bai10",
      volumeId: "han-ngu-1",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/han-ngu-1-bai10.mp3" }
      ]
    },

    // ==================== han-ngu-2 (10 bài) ====================
    {
      id: "han-ngu-2-bai1",
      volumeId: "han-ngu-2",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/han-ngu-2-bai1.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai2",
      volumeId: "han-ngu-2",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/han-ngu-2-bai2.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai3",
      volumeId: "han-ngu-2",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/han-ngu-2-bai3.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai4",
      volumeId: "han-ngu-2",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/han-ngu-2-bai4.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai5",
      volumeId: "han-ngu-2",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/han-ngu-2-bai5.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai6",
      volumeId: "han-ngu-2",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/han-ngu-2-bai6.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai7",
      volumeId: "han-ngu-2",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/han-ngu-2-bai7.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai8",
      volumeId: "han-ngu-2",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/han-ngu-2-bai8.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai9",
      volumeId: "han-ngu-2",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/han-ngu-2-bai9.mp3" }
      ]
    },
    {
      id: "han-ngu-2-bai10",
      volumeId: "han-ngu-2",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/han-ngu-2-bai10.mp3" }
      ]
    },

    // ==================== boya-so-cap-1 (10 bài) ====================
    {
      id: "boya-so-cap-1-bai1",
      volumeId: "boya-so-cap-1",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/boya-so-cap-1-bai1.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai2",
      volumeId: "boya-so-cap-1",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/boya-so-cap-1-bai2.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai3",
      volumeId: "boya-so-cap-1",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/boya-so-cap-1-bai3.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai4",
      volumeId: "boya-so-cap-1",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/boya-so-cap-1-bai4.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai5",
      volumeId: "boya-so-cap-1",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/boya-so-cap-1-bai5.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai6",
      volumeId: "boya-so-cap-1",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/boya-so-cap-1-bai6.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai7",
      volumeId: "boya-so-cap-1",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/boya-so-cap-1-bai7.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai8",
      volumeId: "boya-so-cap-1",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/boya-so-cap-1-bai8.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai9",
      volumeId: "boya-so-cap-1",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/boya-so-cap-1-bai9.mp3" }
      ]
    },
    {
      id: "boya-so-cap-1-bai10",
      volumeId: "boya-so-cap-1",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/boya-so-cap-1-bai10.mp3" }
      ]
    },

    // ==================== msutong-so-cap-1 (10 bài) ====================
    {
      id: "msutong-so-cap-1-bai1",
      volumeId: "msutong-so-cap-1",
      title: "Bài 1",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 1 — Audio", src: "assets/audio/msutong-so-cap-1-bai1.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai2",
      volumeId: "msutong-so-cap-1",
      title: "Bài 2",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 2 — Audio", src: "assets/audio/msutong-so-cap-1-bai2.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai3",
      volumeId: "msutong-so-cap-1",
      title: "Bài 3",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 3 — Audio", src: "assets/audio/msutong-so-cap-1-bai3.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai4",
      volumeId: "msutong-so-cap-1",
      title: "Bài 4",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 4 — Audio", src: "assets/audio/msutong-so-cap-1-bai4.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai5",
      volumeId: "msutong-so-cap-1",
      title: "Bài 5",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 5 — Audio", src: "assets/audio/msutong-so-cap-1-bai5.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai6",
      volumeId: "msutong-so-cap-1",
      title: "Bài 6",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 6 — Audio", src: "assets/audio/msutong-so-cap-1-bai6.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai7",
      volumeId: "msutong-so-cap-1",
      title: "Bài 7",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 7 — Audio", src: "assets/audio/msutong-so-cap-1-bai7.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai8",
      volumeId: "msutong-so-cap-1",
      title: "Bài 8",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 8 — Audio", src: "assets/audio/msutong-so-cap-1-bai8.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai9",
      volumeId: "msutong-so-cap-1",
      title: "Bài 9",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 9 — Audio", src: "assets/audio/msutong-so-cap-1-bai9.mp3" }
      ]
    },
    {
      id: "msutong-so-cap-1-bai10",
      volumeId: "msutong-so-cap-1",
      title: "Bài 10",
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "DAN_LINK_PDF_GIAO_TRINH" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "DAN_LINK_PDF_BAI_TAP" }
      ],
      audios: [
        { name: "Bài 10 — Audio", src: "assets/audio/msutong-so-cap-1-bai10.mp3" }
      ]
    },
  ],

  /* ==========================================================================
     TRÒ CHƠI
     ========================================================================== */
  games: [
    {
      id: "ghep-tu",
      title: "Ghép từ — Pinyin",
      hanzi: "配",
      description: "Ghép chữ Hán với phiên âm Pinyin đúng trong thời gian giới hạn.",
      tag: "Từ vựng · HSK 1–2",
      file: "games/ghep-tu-pinyin.html"
    }
    // Thêm trò chơi mới: sao chép khối trên, đổi id/title/file cho trò chơi kế tiếp
  ],

  /* Nguồn dữ liệu từ vựng dùng làm nền tảng để thiết kế trò chơi (chỉ hiển thị
     dạng link tham khảo trên trang Trò chơi — không nhúng trực tiếp nội dung). */
  vocabSources: [
    {
      title: "Bộ từ vựng tham khảo #1",
      description: "Google Sheet tổng hợp từ vựng dùng làm nền tảng thiết kế trò chơi.",
      url: "https://docs.google.com/spreadsheets/d/1SaHecPlwAHllaoklq0nvJ03M2aQH9P38/edit?gid=1444012645#gid=1444012645"
    },
    {
      title: "Bộ từ vựng tham khảo #2",
      description: "Google Sheet tổng hợp từ vựng dùng làm nền tảng thiết kế trò chơi.",
      url: "https://docs.google.com/spreadsheets/d/1V2ZzKcbFp2qIEtPEq2MfbLrzA2w287z__LiIwUaIpqk/edit?gid=1560068896#gid=1560068896"
    }
    // Thêm nguồn dữ liệu từ vựng khác: sao chép 1 khối trên
  ],

  /* ==========================================================================
     VIDEO — nhóm theo chủ đề. Mỗi video là YouTube hoặc TikTok.
       - YouTube: chỉ cần "id" là mã video (đoạn sau ?v= trong đường link)
       - TikTok: dùng "url" là link đầy đủ tới video TikTok
     ========================================================================== */
  videoTopics: [
    {
      topic: "Giao tiếp hằng ngày",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Chào hỏi và tự giới thiệu bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Phát âm & Thanh điệu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "4 thanh điệu cơ bản trong tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Văn hoá Trung Hoa",
      videos: [
        {
          platform: "tiktok",
          url: "https://www.tiktok.com/@tiktok/video/7000000000000000000",
          title: "Tết Nguyên Đán ở Trung Quốc",
          thumb: ""
        }
      ]
    },
    {
      topic: "Văn mẫu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Cách viết bài văn miêu tả bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm video giảng/đọc văn mẫu khác vào đây, theo mẫu YouTube hoặc TikTok ở trên
      ]
    },
    {
      topic: "Âm nhạc",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Học tiếng Trung qua bài hát 月亮代表我的心",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm MV / bài hát tiếng Trung khác vào đây
      ]
    }
    // Thêm chủ đề mới: sao chép cả khối { topic: ..., videos: [...] }
  ]
};
