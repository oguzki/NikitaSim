const mainmenu = document.getElementById('mainmenu');

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
}

function resume() {
    var code = document.getElementById('parol').value;
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
            money = 1000;
            healthchange();
            daychange();
            monchange();
            yearchange();
            moneychange();
            document.getElementById('game_bg').innerHTML = '<video src="files/video/necoarc-anekdot.mp4" controls autoplay style="max-width: 50%"></video>'
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
