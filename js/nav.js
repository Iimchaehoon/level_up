function initHeaderNav() {
  const allLecturesBtn = document.getElementById("allLecturesBtn");
  const navDropdown = document.getElementById("navDropdown");
  const menuToggleIcon = document.getElementById("menuToggleIcon");

  if (!allLecturesBtn || !navDropdown || !menuToggleIcon) return;

  let open = false;

  function closeDropdown() {
    open = false;
    navDropdown.style.display = "none";
    menuToggleIcon.classList.remove("open");
  }

  allLecturesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    open = !open;

    if (!open) return closeDropdown();

    navDropdown.style.display = "block";
    menuToggleIcon.classList.add("open");

    const rect = allLecturesBtn.getBoundingClientRect();
    navDropdown.style.top = rect.bottom + window.scrollY -15 + "px";
    navDropdown.style.left = rect.left + window.scrollX + "px";
  });

  document.addEventListener("click", (e) => {
    if (!open) return;
    if (!navDropdown.contains(e.target) && !allLecturesBtn.contains(e.target)) closeDropdown();
  });

  document.querySelectorAll(".js-go-ai-basic").forEach((el) => {
    el.addEventListener("click", () => (window.location.href = "lecture_ai_basic.html"));
  });

  // 마이페이지 이동
  document.addEventListener("click", (e) => {
    const btn = e.target.closest('[data-nav="mypage"]');
    if (!btn) return;
    window.location.href = "mypage.html";
  });
}

// ★ 전역으로 꺼내기 (layout.js에서 호출할 수 있게)
window.initHeaderNav = initHeaderNav;
