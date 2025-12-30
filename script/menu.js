const mainmenu1 = document.getElementById('mainmenu1');
const mainmenu2 = document.getElementById('mainmenu2');
const mainmenu3 = document.getElementById('mainmenu3');
const mainmenu4 = document.getElementById('mainmenu4');
const menu_wrong = document.getElementById('menu_wrong');

var code;

var abc = 0;

function close_mainmenu() {
    mainmenu1.style.zIndex = "-1";
    mainmenu1.style.opacity = "0";
    mainmenu2.style.zIndex = "-1";
    mainmenu2.style.opacity = "0";
    mainmenu3.style.zIndex = "-1";
    mainmenu3.style.opacity = "0";
    mainmenu4.style.zIndex = "-1";
    mainmenu4.style.opacity = "0";
}

function rules() {
    video_event.style.zIndex = "4";
    video_event.style.opacity = "1";
    video_name.textContent = "правила";
    video.src = "files/video/rules.mp4";
    video_subname.style.display = "none";
    video_button.textContent = "скип";
}

function changescreen() {
    if (abc == 0) {
        mainmenu2.style.width = "100%";
        mainmenu1.style.opacity = "0";
        abc = 1;
    } else {
        mainmenu2.style.width = "0%";
        mainmenu1.style.opacity = "1";
        abc = 0;
    }
}

function start() {
    healthchange();
    moneychange();
    daychange();
    monchange();
    yearchange();
    close_mainmenu();
}

function play() {
    day = 1;
    mon = 1;
    year = 23;
    money = 1000;
    health = 100;
    start();
    rules();
}

function secret_code_elem() {
    health = 100;
    year = 23;
    day = 1;
    mon = 1;
    money = 2000;
}

function resume() {
    code = document.getElementById('parol').value;
    if (code == 0) {
        menu_wrong.textContent = "а где пароль?";
    } else {
        switch (code) {
            case "wow":
            case "Wow":
                health = 100;
                year = 23;
                day = 12;
                mon = 12;
                money = 100000;
                start();
                break;
            case "necoarc":
            case "Necoarc":
                secret_code_elem();
                start();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/necoarc-anekdot.mp4" controls autoplay loop style="max-width: 57%"></video>'
                break;
            case "babai":
            case "Babai":
                secret_code_elem();
                start();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/babai.mp4" controls autoplay loop style="max-width: 90%"></video>'
                break;
            case "tatarstan":
            case "Tatarstan":
                secret_code_elem();
                start();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/tarakan.mp4" controls autoplay loop style="max-width: 90%"></video>'
                break;
            case "lilium":
            case "Lilium":
                var header1 = document.querySelectorAll('.game-menu');
                var mark1 = document.querySelectorAll('.game_hud');
                health = 100;
                year = 4;
                day = 24;
                mon = 7;
                money = 333;
                document.body.style.backgroundColor = "#a1303f";
                for (var i = 0; i < header1.length; i++) {
                    header1[i].style.backgroundColor = "#2e0e12";
                }
                for (var i = 0; i < mark1.length; i++) {
                    mark1[i].style.backgroundColor = "#2e0e12";
                }
                document.getElementsByClassName('game-menu-1')[0].style.backgroundColor = '#2e0e12';
                start();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/lilium.mp4" controls autoplay style="max-width: 90%"></video>';
                break;
            default:
                if (code.includes("Y") && code.includes("C") && code.includes("-")) {
                    var a0 = Number(code.slice(0, 3));
                    var a1 = Number(code.slice(4, 6));
                    var a2 = Number(code.slice(7, 9));
                    var a3 = Number(code.slice(10, 12));
                    var a4 = Number(code.slice(14));
                    health = a0;
                    year = a1;
                    day = a2;
                    mon = a3;
                    money = a4 / 2;
                    if (health > 100 || day > 31 || mon > 12) {
                        menu_wrong.textContent = "пароль неверный";
                    } else {
                        start();
                        break;
                    }
                } else {
                    menu_wrong.textContent = "пароль неверный";
                }
        }
    }

}
