const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light Images
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(currentTheme){

    let oldIcon;
    let newIcon;
    let mode;
    let navBackgroundColor;
    let textBoxColor;

    if(currentTheme === LIGHT_THEME){
        toggleSwitch.checked = false;
        oldIcon = 'fa-moon';
        newIcon = 'fa-sun';
        navBackgroundColor = 'rgb(255 255 255 / 50%)';
        textBoxColor = 'rgb(0 0 0 / 50%)';
        mode = 'Light Mode';

    }else{
        toggleSwitch.checked = true;
        oldIcon = 'fa-sun';
        newIcon = 'fa-moon';
        navBackgroundColor = 'rgb(0 0 0 / 50%)';
        textBoxColor = 'rgb(255 255 255 / 50%)';
        mode = 'Dark Mode';
    }    

    document.documentElement.setAttribute('data-theme', currentTheme);
    nav.style.backgroundColor = navBackgroundColor;
    textBox.style.backgroundColor = textBoxColor;
    toggleIcon.children[0].textContent = mode;
    toggleIcon.children[1].classList.replace(oldIcon, newIcon);    
    imageMode(currentTheme);
}


// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){ 
        localStorage.setItem('theme', 'dark');       
        toggleDarkLightMode('dark');        
    }else{        
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode('light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

toggleDarkLightMode(currentTheme);