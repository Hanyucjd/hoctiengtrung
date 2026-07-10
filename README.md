# Học Tiếng Trung Cùng Cô — Website ôn luyện tiếng Trung

Website tĩnh (không cần máy chủ/backend), gồm 3 phần: **Giáo trình**, **Trò chơi**, **Video**.
Đưa lên **GitHub Pages** miễn phí, học sinh chỉ cần một đường link để vào học.

---

## 1. Cấu trúc thư mục

```
├── index.html                    trang chủ
├── giao-trinh.html                trang Giáo trình — lưới các bộ giáo trình
├── giao-trinh-chi-tiet.html       trang lưới các QUYỂN trong 1 bộ (dùng chung cho mọi bộ)
├── giao-trinh-bai-hoc.html        trang danh sách các BÀI trong 1 quyển (dùng chung cho mọi quyển)
├── tro-choi.html                  trang Trò chơi
├── video.html                     trang Video
├── assets/
│   ├── css/style.css              giao diện (không cần sửa)
│   ├── js/data.js                 ★ NỘI DUNG — sửa file này để thêm bài học/trò chơi/video
│   ├── js/main.js                 logic hiển thị (không cần sửa)
│   ├── audio/                     để file .mp3 của giáo trình vào đây
│   └── docs/                      (tuỳ chọn) để file PDF vào đây nếu không dùng Google Drive
└── games/                         để các file trò chơi .html tự tạo vào đây
```

**Bạn chỉ cần chỉnh sửa file `assets/js/data.js`** để thêm/sửa/xoá nội dung. Không cần đụng tới các file khác.

---

## 2. Cách thêm nội dung cho phần Giáo trình

Phần Giáo trình có **3 cấp**, học sinh đi từ ngoài vào trong:

```
giao-trinh.html                     →  chọn 1 BỘ giáo trình (HSK 2.0, Boya, Msutong...)
  → giao-trinh-chi-tiet.html        →  chọn 1 QUYỂN trong bộ đó (HSK 1, HSK 2, HSK 3...)
      → giao-trinh-bai-hoc.html     →  xem từng BÀI trong quyển đó (Bài 1, Bài 2...) + PDF/sách bài tập/audio
```

`giao-trinh-chi-tiet.html` và `giao-trinh-bai-hoc.html` là **2 file dùng chung cho tất cả** các bộ/quyển — bạn không cần tạo file `.html` mới mỗi khi thêm giáo trình, chỉ cần sửa `assets/js/data.js`. File này có 3 mục tương ứng 3 cấp: `seriesList` (bộ), `volumes` (quyển), `lessons` (bài).

### 2.1 Thêm một BỘ giáo trình hoàn toàn mới (ví dụ "Giáo trình Đương đại")

Tìm mục `seriesList:`, sao chép 1 khối có sẵn và sửa lại:

```js
{
  id: "duong-dai",            // mã riêng, không dấu cách, không trùng bộ khác
  title: "Giáo trình Đương đại",
  hanzi: "代",                // 1 chữ Hán hiển thị làm biểu tượng của ô
  description: "Mô tả ngắn về bộ giáo trình này"
}
```
Ô mới sẽ tự xuất hiện trong lưới trên trang Giáo trình.

### 2.2 Thêm một QUYỂN vào một bộ (có sẵn hoặc vừa tạo)

Tìm mục `volumes:`, sao chép 1 dòng có sẵn và sửa lại, **nhớ để `seriesId` đúng bằng `id` của bộ giáo trình muốn thêm vào**:

```js
{ id: "duong-dai-quyen-1", seriesId: "duong-dai", title: "Giáo trình Đương đại — Quyển 1", description: "Mô tả ngắn về quyển này." }
```

### 2.3 Thêm các BÀI cho một quyển (đây là bước hay dùng nhất)

Tìm mục `lessons:`, thêm một dòng theo mẫu, **nhớ để `số_bài` đúng số bài của quyển đó**:

```js
...makeLessons("duong-dai-quyen-1", 12),   // tạo tự động Bài 1 → Bài 12 cho quyển vừa thêm
```

`makeLessons` sẽ tự sinh ra đủ số bài với đường dẫn PDF/audio dạng mẫu (`FILE_ID`, `ten-file.mp3`...). Sau khi sinh xong, bạn cần **sửa lại từng bài cho đúng file thật**. Có 2 cách:

- **Cách nhanh (khuyên dùng nếu file đặt theo đúng quy tắc tên)**: sửa trực tiếp trong hàm `makeLessons` những chỗ `url: "..."` để tự áp dụng cho toàn bộ các bài, nếu link PDF theo Google Drive khác nhau cho từng bài thì dùng cách dưới.
- **Cách sửa từng bài riêng lẻ**: sau dòng `...makeLessons(...)`, bạn có thể ghi đè lại một bài cụ thể bằng cách viết thẳng một khối `{ id, volumeId, title, materials, audios }` như mẫu ở mục 2.4, thay vì dùng hàm sinh tự động cho quyển đó.

### 2.4 Viết tay từng bài học (khi không dùng `makeLessons`)

Nếu một quyển có các bài không giống nhau (số lượng tài liệu khác nhau mỗi bài), bạn có thể bỏ qua `makeLessons` và viết tay từng bài trong mục `lessons`:

```js
{
  id: "duong-dai-quyen-1-bai1",         // mã riêng, không trùng bài khác
  volumeId: "duong-dai-quyen-1",        // PHẢI trùng với "id" đã đặt ở volumes
  title: "Bài 1 — Chào hỏi",
  materials: [
    { label: "Giáo trình (PDF)", type: "PDF", url: "ĐƯỜNG DẪN FILE PDF" },
    { label: "Sách bài tập (PDF)", type: "PDF", url: "ĐƯỜNG DẪN FILE PDF" }
  ],
  audios: [
    { name: "Bài 1 — Audio", src: "assets/audio/ten-file.mp3" }
  ]
}
```

### Lấy đường dẫn PDF từ Google Drive (khuyên dùng — không giới hạn dung lượng trên GitHub)
1. Tải file PDF lên Google Drive.
2. Chuột phải vào file → **Chia sẻ** → đổi thành **"Bất kỳ ai có đường liên kết"** (Anyone with the link).
3. Sao chép link, dạng: `https://drive.google.com/file/d/1AbCDeFGhIJ.../view?usp=sharing`
4. Lấy đoạn mã ở giữa (`1AbCDeFGhIJ...`), ghép vào theo mẫu sau rồi dán vào `url`:
   ```
   https://drive.google.com/file/d/1AbCDeFGhIJ.../preview
   ```
   (đổi `/view...` thành `/preview` — bản `preview` cho phép học sinh xem trực tiếp trên web thay vì bị chuyển hướng.)

### Thêm file audio
Đặt file `.mp3` vào thư mục `assets/audio/`, sau đó khai báo trong `audios` với `src: "assets/audio/ten-file.mp3"`. File audio nhỏ (vài MB/bài) tải lên GitHub bình thường; nếu giáo trình có nhiều audio dung lượng lớn, cân nhắc host trên Google Drive tương tự PDF và dùng link `.../uc?export=download&id=...` thay cho `src`.

---

## 3. Cách thêm một trò chơi mới (phần Trò chơi)

1. Tạo file trò chơi bằng HTML/CSS/JS (tự viết, hoặc dùng file `games/ghep-tu-pinyin.html` có sẵn làm mẫu để chỉnh sửa từ vựng).
2. Đặt file `.html` đó vào thư mục `games/`.
3. Mở `assets/js/data.js`, thêm một khối vào mục `games:`:
   ```js
   {
     id: "noi-tu",
     title: "Nối từ theo chủ đề",
     hanzi: "词",              // 1 chữ Hán hiển thị làm biểu tượng
     description: "Mô tả ngắn cách chơi",
     tag: "Từ vựng · HSK 2",
     file: "games/ten-file-tro-choi.html"
   }
   ```
Trò chơi sẽ hiện trong danh sách và mở ngay trong khung nổi (không rời trang web) khi học sinh bấm vào.

### 3.1 Nguồn dữ liệu từ vựng (tài liệu tham khảo để thiết kế trò chơi)

Trang Trò chơi có thêm mục **"Nguồn dữ liệu từ vựng"** — danh sách các Google Sheet bạn dùng làm nền tảng khi thiết kế trò chơi mới (không hiển thị trực tiếp bảng tính lên web, chỉ có link mở sang Google Sheets). Thêm hoặc sửa tại `assets/js/data.js`, mục `vocabSources:`:

```js
{
  title: "Tên bộ từ vựng",
  description: "Mô tả ngắn nội dung bộ từ vựng này",
  url: "https://docs.google.com/spreadsheets/d/..."
}
```
Nhớ đặt chế độ chia sẻ của Google Sheet là **"Bất kỳ ai có đường liên kết"** nếu muốn người khác (ví dụ người hỗ trợ bạn làm trò chơi) mở được link.

---

## 4. Cách thêm video mới (phần Video)

Mở `assets/js/data.js`, tìm mục `videoTopics:`.

- **Thêm video vào chủ đề có sẵn**: thêm 1 khối vào mảng `videos` của chủ đề đó.
- **Thêm chủ đề mới**: sao chép cả khối `{ topic: "...", videos: [...] }`.

**Video YouTube** — chỉ cần mã video (đoạn sau `v=` trong đường link YouTube):
```js
{ platform: "youtube", id: "dQw4w9WgXcQ", title: "Tên video", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
```

**Video TikTok** — dùng link đầy đủ của video:
```js
{ platform: "tiktok", url: "https://www.tiktok.com/@ten_kenh/video/1234567890123456789", title: "Tên video" }
```

Khi học sinh bấm vào, video phát ngay trong khung nổi trên trang web — không bị chuyển sang YouTube.com hay TikTok.com.

---

## 5. Đưa web lên GitHub Pages (miễn phí)

1. Tạo tài khoản tại [github.com](https://github.com) (nếu chưa có).
2. Tạo một **repository** mới, ví dụ đặt tên `hoc-tieng-trung`.
3. Tải toàn bộ nội dung thư mục này lên repository đó (dùng nút **"Add file → Upload files"** trên GitHub, kéo thả cả thư mục vào).
4. Vào **Settings → Pages** của repository.
5. Ở mục **Source**, chọn nhánh `main` và thư mục `/root`, bấm **Save**.
6. Sau 1–2 phút, GitHub sẽ cấp một đường link dạng:
   `https://ten-tai-khoan.github.io/hoc-tieng-trung/`
   Gửi link này cho học sinh là các em vào học được ngay.

Mỗi lần bạn sửa `assets/js/data.js` (thêm bài học/trò chơi/video) và tải file mới lên GitHub, trang web sẽ tự cập nhật sau khoảng 1 phút — không cần làm lại gì thêm.

---

## 6. Một vài lưu ý

- File `games/ghep-tu-pinyin.html` là trò chơi mẫu (ghép chữ Hán với Pinyin) — mở file này bằng trình soạn thảo văn bản, tìm mục `WORDS` gần cuối để đổi bộ từ vựng theo bài học của bạn.
- Nhúng TikTok hoạt động tốt nhất khi trình duyệt của học sinh không chặn script bên thứ ba; nếu video TikTok không hiện, trang vẫn có nút liên kết dự phòng có thể bổ sung thêm nếu cần.
- Toàn bộ giao diện dùng tiếng Việt, có thể đổi câu chữ trực tiếp trong các file `.html` nếu muốn.
