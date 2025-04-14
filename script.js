document.addEventListener('DOMContentLoaded', () => {
  // 네비게이션 링크 클릭시 부드러운 스크롤 효과
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Home 섹션 인트로 버튼 클릭 이벤트
  const introBtn = document.getElementById('introBtn');
  if (introBtn) {
    introBtn.addEventListener('click', () => {
      alert("안녕하세요! 3년차 소프트웨어 엔지니어 재구입니다.\nINFP 감성으로 코딩 중!");
    });
  }

  // Contact 폼 제출 이벤트 (시뮬레이션)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("메시지가 전송되었습니다. 빠른 시일 내에 연락드릴게요!");
      contactForm.reset();
    });
  }
});
