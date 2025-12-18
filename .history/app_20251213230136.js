// =========================
// 공통: 카드 섹션 좌우 스크롤
// =========================
document.querySelectorAll('.section').forEach((section) => {
  const scroller = section.querySelector('.cards');
  const buttons = section.querySelectorAll('.icon-btn');
  if (!scroller || buttons.length === 0) return;

  const scrollAmount = () => scroller.clientWidth * 0.8;

  const scrollBack = () => {
    scroller.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  };

  const scrollNext = () => {
    scroller.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  };

  if (buttons[0]) buttons[0].addEventListener('click', scrollBack);
  if (buttons[1]) buttons[1].addEventListener('click', scrollNext);
});

// =========================
// "모든 강의" 드롭다운 토글
// =========================
const headerEl = document.querySelector('.header');
const menuButton = document.querySelector('.has-dropdown');
const dropdown = document.querySelector('.nav-dropdown');
const toggleIcon = document.querySelector('.menu-toggle-icon');

if (menuButton && dropdown && headerEl) {
  const toggleDropdown = () => {
    const isOpen = dropdown.style.display === 'block';

    if (isOpen) {
      dropdown.style.display = 'none';
      if (toggleIcon) toggleIcon.classList.remove('open');
      return;
    }

    const headerRect = headerEl.getBoundingClientRect();
    const btnRect = menuButton.getBoundingClientRect();

    const top = btnRect.bottom - headerRect.top + 2;
    const left = btnRect.left - headerRect.left;

    dropdown.style.top = `${top}px`;
    dropdown.style.left = `${left}px`;
    dropdown.style.display = 'block';

    if (toggleIcon) toggleIcon.classList.add('open');
  };

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
      if (toggleIcon) toggleIcon.classList.remove('open');
    }
  });
}

// =========================
// 메인 페이지: 추천 코스 카드 클릭 → course.html 이동
// =========================
const courseCards = document.querySelectorAll('.hero-card');

if (courseCards.length > 0) {
  courseCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = 'course.html';
    });
  });
}
// app.js

// 1) 이동할 페이지 경로만 한 곳에서 정의
const AI_BASIC_PAGE = 'lecture_ai_basic.html';  // 파일명에 맞게 수정

function initAiBasicNav() {
  // .js-go-ai-basic 클래스를 가진 요소 전부 찾기
  const aiLinks = document.querySelectorAll('.js-go-ai-basic');
  if (!aiLinks.length) return;

  aiLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      // a 태그에 이미 href가 lecture_ai_basic.html 인 경우엔
      // 그냥 기본 동작을 쓰고 싶다면 preventDefault() 지워도 됨
      e.preventDefault();
      window.location.href = AI_BASIC_PAGE;
    });
  });
}

// DOM 준비되면 실행
document.addEventListener('DOMContentLoaded', () => {
  initAiBasicNav();
  // 여기 다른 공통 init 함수들 있으면 같이 호출
});
document.addEventListener("click", (e) => {
  // 클릭한 곳에서 가장 가까운 "강의 카드" 찾기 (동적으로 생겨도 잡힘)
  const card = e.target.closest(".lecture-card[data-course-id]");
  if (!card) return;

  const id = card.dataset.courseId;
  window.location.href = `lecture-detail.html?id=${id}`;
});

function typeText(el, text, speed = 70, startDelay = 300) {
  if (!el) return;
  const original = text;
  el.textContent = "";
  let i = 0;

  setTimeout(() => {
    const timer = setInterval(() => {
      el.textContent += original[i];
      i += 1;
      if (i >= original.length) clearInterval(timer);
    }, speed);
  }, startDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("typingTitle");
  const subEl = document.getElementById("typingSub");

  // 원문을 그대로 가져와서 타이핑
  const titleText = titleEl?.textContent || "";
  const subText = subEl?.textContent || "";

  typeText(titleEl, titleText, 75, 250);        // 천천히 자연스럽게
  typeText(subEl, subText, 45, 1400);           // 제목 끝나고 조금 뒤에 시작
});


