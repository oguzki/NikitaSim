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
            kartinkaprikol();
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
            document.getElementById('menu_prikol').innerHTML = '<video src="files/video/necoarc-anekdot.mp4" controls autoplay style="max-width: 50%"></video>'
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
            kartinkaprikol();
            close_mainmenu();
            break;
    }
}

function generate() {
    if (health < 1) {
        posle.style.zIndex = "4";
        posle.style.opacity = "1";
        spname.textContent = "Но мы пойдём другим путём";
        pname.textContent = "У Вас не получиться перехитрить систему...";
        ballzb.textContent = "Принять судьбу";
    } else {
        document.getElementById('posle').style.zIndex = "3";
        document.getElementById('posle').style.opacity = "1";
        spname.textContent = "ваш пароль:";
        if (mon < 10 && day < 10 && health < 100 && health >= 10) {
            var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        } else {
            if (mon < 10 && day < 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (mon < 10 && day < 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }
        }
        pname.textContent = aboba;
        console.log(aboba);
    }
}
