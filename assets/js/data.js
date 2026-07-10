/* ==========================================================================
   DATA.JS — Đây là nơi DUY NHẤT bạn cần chỉnh sửa để thêm nội dung mới.
   Không cần biết lập trình, chỉ cần sao chép 1 khối (giữa { và }) và sửa lại
   thông tin bên trong. Nhớ giữ đúng dấu phẩy, dấu ngoặc kép "..." và ngoặc { }.

   Hướng dẫn chi tiết (lấy link Google Drive, thêm bài học hàng loạt...) nằm
   trong README.md ở thư mục gốc.
   ========================================================================== */

/* --------------------------------------------------------------------------
   HÀM TIỆN ÍCH — tự động sinh ra nhiều "Bài" giống nhau cho một quyển giáo
   trình, để bạn không phải gõ tay từng bài một (1 quyển có thể có 10-20 bài).
   Sau khi sinh ra, bạn chỉ cần vào từng bài để SỬA LẠI đường dẫn PDF/audio
   cho đúng với file thật của mình (xem README mục 2.3).
   -------------------------------------------------------------------------- */
function makeLessons(volumeId, count){
  const lessons = [];
  for(let i = 1; i <= count; i++){
    lessons.push({
      id: `${volumeId}-bai${i}`,
      volumeId: volumeId,
      title: `Bài ${i}`,
      materials: [
        { label: "Giáo trình (PDF)", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập (PDF)", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: `Bài ${i} — Audio`, src: `assets/audio/${volumeId}-bai${i}.mp3` }
      ]
    });
  }
  return lessons;
}

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

  /* ------------------------------------------------------------------
     Các BÀI trong từng quyển — sinh tự động bằng makeLessons(volumeId, số bài).
     Sau khi sinh, vào README mục 2.3 để biết cách sửa từng bài cho đúng file
     PDF/audio thật của bạn.
     ------------------------------------------------------------------ */
  lessons: [
    ...makeLessons("hsk1-20", 15),
    ...makeLessons("hsk2-20", 15),
    ...makeLessons("hsk3-20", 20),
    ...makeLessons("hsk4-thuong-20", 10),
    ...makeLessons("hsk4-ha-20", 10),
    ...makeLessons("hsk5-thuong-20", 10),
    ...makeLessons("hsk5-ha-20", 10),
    ...makeLessons("hsk6-thuong-20", 10),
    ...makeLessons("hsk6-ha-20", 10),

    ...makeLessons("hsk1-30", 10),
    ...makeLessons("hsk2-30", 10),

    ...makeLessons("han-ngu-1", 10),
    ...makeLessons("han-ngu-2", 10),

    ...makeLessons("boya-so-cap-1", 10),

    ...makeLessons("msutong-so-cap-1", 10)
    // Thêm bài cho 1 quyển mới: ...makeLessons("id-quyển-mới", số_bài),
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
      topic: "Học theo giáo trình",
      videos: [
        {
          platform: "youtube",
          id: "Tiếng Trung Lý Dinh Trân",
          title: "Giáo trình HSK1 (2.0) Bài 1",
          thumb: "https://youtu.be/FmldJqW1Hd4?si=mwwttZGdjL3NXjiY"
        }
      ]
    },
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

/* ==========================================================================
   GHI ĐÈ TỪNG BÀI HỌC CỤ THỂ
   ==========================================================================
   Mục "lessons" ở trên được SINH TỰ ĐỘNG (mỗi bài đều có link giả FILE_ID).
   Đây là nơi bạn điền link PDF / sách bài tập / audio THẬT cho từng bài,
   mà không cần đụng vào makeLessons() hay các bài khác trong cùng quyển.

   CÁCH DÙNG: thêm 1 dòng, với khoá là "id" của bài (dạng "tenQuyen-baiN"),
   value là các trường muốn ghi đè (thường là materials và audios).

   Ví dụ dưới đây đã điền sẵn cho "Bài 1" của quyển "Giáo trình chuẩn HSK 1
   (2.0)" (id quyển là "hsk1-20", nên id bài là "hsk1-20-bai1") — bạn chỉ
   cần thay 3 chỗ ĐƯỜNG_DẪN bằng link thật của mình.
   ========================================================================== */
const LESSON_OVERRIDES = {
  "hsk1-20-bai1": {
    materials: [
      { label: "Giáo trình (PDF)", type: "PDF", url: "https://drive.google.com/file/d/1W7cf43IOTJKAQmFDHhTk30j_nJGP_6I2/preview" },
      { label: "Sách bài tập (PDF)", type: "PDF", url: "https://drive.google.com/file/d/1na6SDt09iP5BXP_A5NIRlHssvcJnK6Q2/preview" }
    ],
    audios: [
      { name: "Bài 1 — Audio", src: "https://drive.google.com/file/d/1iFND3SDL8rhxBuFdcMjWiHC8COsULkWm/view?usp=drive_link" }
    ]
  }
  // Thêm bài khác: sao chép khối trên, đổi "hsk1-20-bai1" thành id bài muốn sửa
};

// Áp dụng các ghi đè ở trên vào danh sách bài học (không cần sửa dòng này)
CONTENT.lessons = CONTENT.lessons.map(l => LESSON_OVERRIDES[l.id] ? { ...l, ...LESSON_OVERRIDES[l.id] } : l);
