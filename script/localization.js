const lang_menu1 = document.getElementById('lang_menu1');
const lang_menu2 = document.getElementById('lang_menu2');
const lang_menu3 = document.getElementById('lang_menu3');
const lang_menu4 = document.getElementById('lang_menu4');
const lang_menu5 = document.getElementById('lang_menu5');

const lang_game1 = document.getElementById('lang_game1');

let userLanguage = navigator.language || navigator.userLanguage;
console.log("Язык пользователя: " + userLanguage);

switch (userLanguage) {
    case "en":
        lang_menu1.textContent = "start";
        lang_menu2.textContent = "or enter the password";
        lang_menu3.textContent = "continue";
        lang_menu4.textContent = "this game is meant to be humorous and has nothing to do with reality (except for Nikita).";
        lang_menu5.innerHTML = 'Are you a press representative? Try it out <a class="disclink" href="https://oguzki.github.io/NikitaSim/press" target="_blank">press release</a>';
        
        lang_game1.textContent = "wow, this is a random event";
        break;
    default:
        break;
}