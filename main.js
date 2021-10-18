'use strict';

// 넷바 최상단에 있을때 투명으로
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--non-transparent');
  } else {
    navbar.classList.remove('navbar--non-transparent');
  }
});

// 넷바 메뉴 클릭했을때 해당 위치로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', e => {
  const link = e.target.dataset.link || e.target.parentNode.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// 넷바 메뉴 나타내기
const hamberger = document.querySelector('.navbar__toggle');
hamberger.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarMenu.classList.add('anim-out');
  setTimeout(() => {
    navbarMenu.classList.remove('anim-out');
  }, 300);
});

// 홈 스크롤 내릴수록 투명하게
const homeContainer = document.querySelector('.home__container');
scrollTransparent(homeContainer);

function scrollTransparent(container) {
  const containerHeight = container.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    if (window.scrollY > containerHeight) {
      return;
    }
    container.style.opacity = 1 - window.scrollY / containerHeight / 1.2;
  });
}

// 스크롤 함수
function scrollIntoView(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const section = document.querySelectorAll('.section__container');
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
};
const observer = new IntersectionObserver(callback, options);
section.forEach(aaa => observer.observe(aaa));

// scroll in step
const sectionIds = ['#home', '#survey', '#intro', '#first', '#second', '#third', '#footer'];
console.log(sectionIds);
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"] button`));
console.log(navItems);
console.log(sections);

const observe2Callback = (ids, observe2) => {
  ids.forEach(id => {
    if (id.isIntersecting) {
      console.log(id.target.id);
      const idPass = `#${id.target.id}`;
      // console.log(idPass);
      scrollIntoView(idPass);
    }
  });
};
const observer2 = new IntersectionObserver(observe2Callback, options);
sections.forEach(section => observer2.observe(section));
