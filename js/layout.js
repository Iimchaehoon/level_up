async function inject(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

(async () => {
  await inject("#siteHeader", "./partials/header.html");
  await inject("#siteFooter", "./partials/footer.html");

  await loadScript("./js/nav.js");

  // ✅ 헤더가 생긴 뒤에 이벤트 연결
  if (window.initHeaderNav) window.initHeaderNav();
})();

