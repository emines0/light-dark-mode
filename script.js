const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


function toggleDarkLightMode(DARK_THEME) {
    nav.style.backgroundColor = DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = DARK_THEME ? 'Dark Mode' : 'Light Mode';
    
    const modeIcon = DARK_THEME ? ['fa-sun', 'fa-moon'] : ['fa-moon', 'fa-sun'];
    toggleIcon.children[1].classList.replace(...modeIcon);
    
    DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Dark or Light Images
function imageMode(color) {
    image1.src= `./img/undraw_proud_coder_${color}.svg`;
    image2.src= `./img/undraw_feeling_proud_${color}.svg`;
    image3.src= `./img/undraw_conceptual_idea_${color}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(DARK_THEME);
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// EventListeners
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage For Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) { //check if local storage exist if yes then ...
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }else {
        toggleSwitch.checked = false;
        toggleDarkLightMode(LIGHT_THEME);
    }
}