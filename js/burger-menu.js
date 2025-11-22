// Бургер меню
const body = document.body;
const nav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');


const toogleBurger = () => {
  if (nav && burgerButton) {
    burgerButton.addEventListener('click', () => {
      console.log('click');
      
      nav.classList.toggle('active');    
      burgerButton.classList.toggle('active');    
      body.classList.toggle('lock'); 
      
      nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');    
          burgerButton.classList.remove('active');    
          body.classList.remove('lock'); 
        })
      });    
    });
  }
}

export default toogleBurger;