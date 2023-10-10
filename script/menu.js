const mainmenu = document.getElementById('mainmenu');
const menu_wrong = document.getElementById('menu_wrong');

var code;

function close_mainmenu() {
    mainmenu.style.zIndex = "-1";
    mainmenu.style.opacity = "0";
}

function start() {
    day = 1;
    mon = 1;
    year = 23;
    money = 1000;
    health = 100;
    healthchange();
    moneychange();
    daychange();
    monchange();
    yearchange();
    close_mainmenu();
    video_event.style.zIndex = "4";
    video_event.style.opacity = "1";
    video_name.textContent = "правила";
    video.src = "files/video/720.mp4";
    video_subname.style.display = "none";
    video_button.textContent = "скип";
}

function resume() {
    code = document.getElementById('parol').value;
    if (code == 0) {
        menu_wrong.style.display = "block";
        menu_wrong.textContent = "а где пароль?"
    } else {
        switch (code) {
            case "wow":
                health = 100;
                year = 23;
                day = 12;
                mon = 12;
                money = 100000;
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                close_mainmenu();
                break;
            case "necoarc":
                health = 100;
                year = 23;
                day = 1;
                mon = 1;
                money = 2000;
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/necoarc-anekdot.mp4" controls autoplay style="max-width: 50%"></video>'
                close_mainmenu();
                break;
            case "babai":
                health = 100;
                year = 23;
                day = 1;
                mon = 1;
                money = 2000;
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/babai.mp4" controls autoplay style="max-width: 60%"></video>'
                close_mainmenu();
                break;
            case "tatarstan":
                health = 100;
                year = 23;
                day = 1;
                mon = 1;
                money = 2000;
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/tarakan.mp4" controls autoplay style="max-width: 50%"></video>'
                close_mainmenu();
                break;
            case "lilium":
                health = 100;
                year = 12;
                day = 12;
                mon = 7;
                money = 333;
                document.body.style.backgroundColor = "#a1303f";
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                document.getElementById('game_bg').innerHTML = '<video src="files/video/lilium.mp4" controls autoplay style="max-width: 60%"></video>'
                close_mainmenu();
                break;
            default:
                var a0 = Number(code.slice(0, 3));
                var a1 = Number(code.slice(4, 6));
                var a2 = Number(code.slice(7, 9));
                var a3 = Number(code.slice(10, 12));
                var a4 = Number(code.slice(15));
                health = a0;
                year = a1;
                day = a2;
                mon = a3;
                money = a4 / 2;
                healthchange();
                daychange();
                monchange();
                yearchange();
                moneychange();
                close_mainmenu();
                break;
        }
    }

}
