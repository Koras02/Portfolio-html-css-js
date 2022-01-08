/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') 

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    //   Toggle 메뉴 클릭시 class를 추가해서 position을 위로 지정
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      })

}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    // clse시 class선언한것을 remove로 지워줌
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
// 모바일 메뉴 링크 클릭시 메뉴 사라짐
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 