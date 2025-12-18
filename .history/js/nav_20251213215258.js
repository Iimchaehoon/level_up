// js/nav.js
document.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-nav="mypage"], .mypage-btn');
  if (!btn) return;

  // 원하는 마이페이지 경로로 이동
  window.location.href = "/mypage.html"; // 필요하면 "./mypage.html" 또는 "../mypage.html"
});
