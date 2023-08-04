const menu_image = document.getElementById('menu_image');

function holidays() {
    var prik = Math.floor(Math.random() * 2);
    switch (prik) {
        case 0:
            var roflan = Math.floor(Math.random() * 5) + 1;
            menu_image.src = "files/pic/samara/" + roflan + ".jpg";
            break;
        case 1:
            var prikolsi = Math.floor(Math.random() * 23) + 1;
            menu_image.src = "files/pic/days/" + prikolsi + ".jpg";
            break;
    }
}

function nextDay() {
    day = day + 1;
    randomsob();
    holidays();
    if (mon === 2) {
        if (day === 29) {
            nextMon();
            stp();
        }
    }
    if (day === 32) {
        nextMon();
        stp();
    } else {
        daychange();
    }
    if (mon >= 13) {
        nextYear();
    }
}

function nextMon() {
    mon = mon + 1;
    day = 1;
    monchange();
    daychange();
}
function nextYear() {
    year = year + 1;
    mon = 1;
    monchange();
    yearchange();
}

function daychange() {
    document.getElementById('day_game').textContent = day;
}

function monchange() {
    document.getElementById('mon_game').textContent = mon;
}

function yearchange() {
    document.getElementById('year_game').textContent = year;
}

function moneychange() {
    document.getElementById('money_game').textContent = money;
}

function healthchange() {
    document.getElementById('hp_game').textContent = health;
}
