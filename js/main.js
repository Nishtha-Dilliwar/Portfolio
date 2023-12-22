const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

if(navToggle){
    navToggle.addEventListener('click', function(){
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

 function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
 }

 navLink.forEach(n => n.addEventListener('click', linkAction));

 const skillsContent = document.getElementsByClassName('skills__content');
 const skillsHeader = document.querySelectorAll('.skills__header');

 function toggleSkills(){
    let itemClass = this.parentNode.className;
    
    for(i = 0 ; i < skillsContent.length ; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
 }

 skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
 })

 let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.body.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
  })