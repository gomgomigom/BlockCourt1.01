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
});

// 홈 스크롤 내릴수록 투명하게
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(homeHeight);
  if (window.scrollY > homeHeight) {
    return;
  }
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight / 1.1;
});

// 스크롤 함수
function scrollIntoView(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
