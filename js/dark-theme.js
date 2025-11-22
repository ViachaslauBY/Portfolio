const html = document.documentElement;

const buttonThemeToggle = document.getElementById('button-toggle');
const iconThemeToggle = document.getElementById('icon-toggle');

const toogleTheme = () => {
  buttonThemeToggle.addEventListener('click', (event) => {
    event.preventDefault();  

    localStorage.getItem('theme') === 'page--dark' ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'page--dark');  

    addClass();
  });

  const addClass = () => {  
    if (localStorage.getItem('theme') === 'page--dark') {
      html.classList.add('page--dark');
      iconThemeToggle.textContent = 'light_mode'; 
    } else {
      html.classList.remove('page--dark');
      iconThemeToggle.textContent = 'nightlight_round';
    }       
  }

  addClass();
}

export default toogleTheme;