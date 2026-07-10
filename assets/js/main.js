/* ==========================================================================
   MAIN.JS — logic hiển thị. Không cần chỉnh sửa file này để thêm nội dung,
   hãy chỉnh assets/js/data.js thay vào đó.
   ========================================================================== */

/* ---------- Nav toggle (mobile) ---------- */
function initNav(){
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}

/* ---------- Brush divider SVG (signature motif, reused across pages) ---------- */
function brushRuleSVG(){
  return `<svg viewBox="0 0 1200 14" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,7 C150,2 300,11 450,6 C600,1 750,10 900,5 C1000,2 1100,9 1200,6"
      fill="none" stroke="#9C3626" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
  </svg>`;
}
function mountBrushRules(){
  document.querySelectorAll(".brush-rule").forEach(el => el.innerHTML = brushRuleSVG());
}

/* ---------- Modal (dùng chung cho video & trò chơi) ---------- */
function ensureModal(){
  if(document.querySelector(".modal-overlay")) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" aria-label="Đóng">✕</button>
      <div class="modal-title"></div>
      <div class="modal-body"></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModal(); });
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });
}
function openModal({ title, bodyHTML, kind }){
  ensureModal();
  const overlay = document.querySelector(".modal-overlay");
  const box = overlay.querySelector(".modal-box");
  box.classList.toggle("game-box", kind === "game");
  overlay.querySelector(".modal-title").textContent = title || "";
  overlay.querySelector(".modal-body").innerHTML = bodyHTML;
  overlay.classList.add("open");
}
function closeModal(){
  const overlay = document.querySelector(".modal-overlay");
  if(!overlay) return;
  overlay.classList.remove("open");
  overlay.querySelector(".modal-body").innerHTML = ""; // dừng video/game khi đóng
}

/* ---------- Trang Giáo trình — lưới các bộ giáo trình ---------- */
function renderSeriesGrid(){
  const root = document.getElementById("series-grid");
  if(!root) return;
  if(!CONTENT.seriesList.length){
    root.innerHTML = `<div class="empty-note">Chưa có bộ giáo trình nào. Thêm trong assets/js/data.js (mục seriesList)</div>`;
    return;
  }
  root.innerHTML = CONTENT.seriesList.map(s => {
    const count = CONTENT.volumes.filter(v => v.seriesId === s.id).length;
    return `
    <a class="series-card" href="giao-trinh-chi-tiet.html?series=${encodeURIComponent(s.id)}">
      <div class="series-thumb hanzi">${s.hanzi || "书"}</div>
      <div class="series-body">
        <h3>${s.title}</h3>
        <p>${s.description || ""}</p>
        <span class="series-count">${count} quyển</span>
      </div>
    </a>`;
  }).join("");
}

/* ---------- Trang chi tiết một bộ giáo trình — lưới các QUYỂN ---------- */
function renderVolumeGrid(){
  const root = document.getElementById("volume-grid");
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const seriesId = params.get("series");
  const series = CONTENT.seriesList.find(s => s.id === seriesId);

  const titleEl = document.getElementById("series-title");
  const descEl = document.getElementById("series-desc");
  const eyebrowEl = document.getElementById("series-eyebrow");

  if(!series){
    if(titleEl) titleEl.textContent = "Không tìm thấy bộ giáo trình";
    if(descEl) descEl.textContent = "Đường liên kết không hợp lệ hoặc bộ giáo trình đã bị xoá khỏi data.js.";
    root.innerHTML = "";
    return;
  }

  if(titleEl) titleEl.textContent = series.title;
  if(descEl) descEl.textContent = series.description || "";
  if(eyebrowEl) eyebrowEl.textContent = `${series.hanzi || "书"} · ${series.title}`;
  document.title = `${series.title} · 与周老师学中文`;

  const volumes = CONTENT.volumes.filter(v => v.seriesId === series.id);

  if(!volumes.length){
    root.innerHTML = `<div class="empty-note">Bộ giáo trình này chưa có quyển nào. Thêm trong assets/js/data.js (mục volumes, với seriesId: "${series.id}")</div>`;
    return;
  }

  root.innerHTML = volumes.map(v => {
    const lessonCount = CONTENT.lessons.filter(l => l.volumeId === v.id).length;
    return `
    <a class="volume-card" href="giao-trinh-bai-hoc.html?series=${encodeURIComponent(series.id)}&volume=${encodeURIComponent(v.id)}">
      <div class="volume-body">
        <h3>${v.title}</h3>
        <p>${v.description || ""}</p>
        <span class="volume-count">${lessonCount} bài</span>
      </div>
    </a>`;
  }).join("");
}

/* ---------- Trang chi tiết một quyển — danh sách các BÀI ---------- */
function renderLessonList(){
  const root = document.getElementById("lesson-grid");
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const seriesId = params.get("series");
  const volumeId = params.get("volume");
  const series = CONTENT.seriesList.find(s => s.id === seriesId);
  const volume = CONTENT.volumes.find(v => v.id === volumeId);

  const titleEl = document.getElementById("volume-title");
  const descEl = document.getElementById("volume-desc");
  const eyebrowEl = document.getElementById("volume-eyebrow");
  const backEl = document.getElementById("back-to-series");

  if(!series || !volume){
    if(titleEl) titleEl.textContent = "Không tìm thấy quyển giáo trình";
    if(descEl) descEl.textContent = "Đường liên kết không hợp lệ hoặc quyển này đã bị xoá khỏi data.js.";
    root.innerHTML = "";
    return;
  }

  if(backEl) backEl.href = `giao-trinh-chi-tiet.html?series=${encodeURIComponent(series.id)}`;
  if(titleEl) titleEl.textContent = volume.title;
  if(descEl) descEl.textContent = volume.description || "";
  if(eyebrowEl) eyebrowEl.textContent = `${series.hanzi || "书"} · ${series.title}`;
  document.title = `${volume.title} · 与周老师学中文`;

  const lessons = CONTENT.lessons.filter(l => l.volumeId === volume.id);

  if(!lessons.length){
    root.innerHTML = `<div class="empty-note">Quyển này chưa có bài nào. Thêm trong assets/js/data.js (mục lessons, với volumeId: "${volume.id}")</div>`;
    return;
  }

  root.innerHTML = lessons.map(l => `
    <article class="course-card">
      <div class="course-top">
        <h3>${l.title}</h3>
      </div>
      ${l.materials && l.materials.length ? `
      <ul class="material-list">
        ${l.materials.map(m => `
          <li>
            <a class="material-link" href="${m.url}" target="_blank" rel="noopener">
              <span class="material-icon">${(m.type||"PDF").slice(0,3)}</span>
              <span class="fname">${m.label}</span>
              <span class="ftag">Xem / tải</span>
            </a>
          </li>`).join("")}
      </ul>` : ""}
      ${l.audios && l.audios.length ? `
      <div class="audio-block">
        <div class="audio-title">File nghe đi kèm</div>
        ${l.audios.map(a => `
          <div class="audio-item">
            <div class="audio-name">${a.name}</div>
            <audio controls preload="none" src="${a.src}"></audio>
          </div>`).join("")}
      </div>` : ""}
    </article>
  `).join("");
}

/* ---------- Trang Trò chơi — nguồn dữ liệu từ vựng ---------- */
function renderVocabSources(){
  const root = document.getElementById("vocab-list");
  if(!root) return;
  if(!CONTENT.vocabSources || !CONTENT.vocabSources.length){
    root.innerHTML = `<div class="empty-note">Chưa có nguồn dữ liệu từ vựng nào. Thêm trong assets/js/data.js (mục vocabSources)</div>`;
    return;
  }
  root.innerHTML = CONTENT.vocabSources.map(v => `
    <a class="vocab-card" href="${v.url}" target="_blank" rel="noopener">
      <span class="vocab-icon">表</span>
      <span class="vocab-text">
        <span class="vocab-title">${v.title}</span>
        <span class="vocab-desc">${v.description || ""}</span>
      </span>
      <span class="vocab-arrow">↗</span>
    </a>
  `).join("");
}

/* ---------- Trang Trò chơi ---------- */
function renderGames(){
  const root = document.getElementById("game-grid");
  if(!root) return;
  if(!CONTENT.games.length){
    root.innerHTML = `<div class="empty-note">Chưa có trò chơi nào. Thêm trò chơi trong assets/js/data.js</div>`;
    return;
  }
  root.innerHTML = CONTENT.games.map((g, i) => `
    <button class="game-card" data-i="${i}">
      <div class="game-thumb">${g.hanzi || "游"}</div>
      <div class="game-body">
        <h3>${g.title}</h3>
        <p>${g.description || ""}</p>
        <span class="game-tag">${g.tag || ""}</span>
      </div>
    </button>
  `).join("");

  root.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      const g = CONTENT.games[card.dataset.i];
      openModal({
        title: g.title,
        kind: "game",
        bodyHTML: `<div class="modal-frame-wrap game"><iframe src="${g.file}" title="${g.title}" loading="lazy"></iframe></div>`
      });
    });
  });
}

/* ---------- Trang Video ---------- */
function renderVideos(){
  const tabRoot = document.getElementById("topic-tabs");
  const gridRoot = document.getElementById("video-grid");
  if(!tabRoot || !gridRoot) return;

  if(!CONTENT.videoTopics.length){
    gridRoot.innerHTML = `<div class="empty-note">Chưa có video nào. Thêm video trong assets/js/data.js</div>`;
    return;
  }

  tabRoot.innerHTML = CONTENT.videoTopics.map((t, i) =>
    `<button class="chip ${i===0 ? "active" : ""}" data-topic="${i}">${t.topic}</button>`
  ).join("");

  function paintTopic(i){
    const topic = CONTENT.videoTopics[i];
    gridRoot.innerHTML = topic.videos.map((v, vi) => {
      const thumb = v.thumb || (v.platform === "youtube" ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : "");
      return `
      <button class="video-card" data-topic="${i}" data-v="${vi}">
        <div class="video-thumb" style="${thumb ? `background-image:url('${thumb}')` : "background:#222"}">
          <span class="video-platform">${v.platform === "tiktok" ? "TikTok" : "YouTube"}</span>
          <div class="play"><span>▶</span></div>
        </div>
        <div class="video-body"><h3>${v.title}</h3></div>
      </button>`;
    }).join("");

    gridRoot.querySelectorAll(".video-card").forEach(card => {
      card.addEventListener("click", () => {
        const v = CONTENT.videoTopics[card.dataset.topic].videos[card.dataset.v];
        if(v.platform === "youtube"){
          openModal({
            title: v.title,
            kind: "video",
            bodyHTML: `<div class="modal-frame-wrap"><iframe src="https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0" title="${v.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
          });
        } else if(v.platform === "tiktok"){
          const videoId = (v.url.match(/video\/(\d+)/) || [])[1] || "";
          openModal({
            title: v.title,
            kind: "video",
            bodyHTML: `<div class="tiktok-embed-holder">
              <blockquote class="tiktok-embed" cite="${v.url}" data-video-id="${videoId}" style="max-width:340px;min-width:280px;">
                <section></section>
              </blockquote>
            </div>`
          });
          // Nạp script nhúng TikTok (script tự chạy lại mỗi lần mở modal)
          const s = document.createElement("script");
          s.src = "https://www.tiktok.com/embed.js";
          document.querySelector(".modal-body").appendChild(s);
        }
      });
    });
  }

  paintTopic(0);
  tabRoot.querySelectorAll(".chip[data-topic]").forEach(chip => {
    chip.addEventListener("click", () => {
      tabRoot.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      paintTopic(chip.dataset.topic);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  mountBrushRules();
  renderSeriesGrid();
  renderVolumeGrid();
  renderLessonList();
  renderVocabSources();
  renderGames();
  renderVideos();
});
