const rname = document.getElementById('rname');
const pname = document.getElementById('pname');
const spname = document.getElementById('spname');
const rchoice1 = document.getElementById('rchoice1');
const rchoice2 = document.getElementById('rchoice2');
const music = document.getElementById('music');
const audio = document.getElementById('audio');

const robj = [
    {
        name: 'на вас напала пчела',
        choice1: 'игнорировать',
        choice2: 'попытаться убить',
    },
    {
        name: 'вы пришли в колледж и вспомнили, что сегодня контрольная',
        choice1: 'остаться в колледже',
        choice2: 'пойти домой',
    },
];

let trackindex = 0;

var random;

function udacha() {
    spname.textContent = "Не повезло...";
}

function choice1() {
    if (random === 1) {
        changepole();
        spname.textContent = "...";
        pname.textContent = "Вы решили проигнорировать. Вы потеряли 10 единиц здоровья.";
        health = health - 10;
        healthchange();
    }

    if (random === 2) {
        changepole();
        spname.textContent = "...";
        pname.textContent = "Вы решили остаться в колледже";
    }
}

function choice2() {
    if (random === 1) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            pname.textContent = "Увы, но вы промахнулись. Пчела нанесла ответный удар. Вы потеряли 10 единиц здоровья";
            health = health - 10;
            healthchange();
        } else {
            changepole();
            spname.textContent = "Точно в цель";
            pname.textContent = "Вы успешно убили пчелу";
        }
    }

    if (random === 2) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            pname.textContent = '"Зачем сидеть на парах" - подумали вы и отправились домой. Но по пути вы встретили куратора. Поздравляю, Вы снова в колледже. Вы потеряли 5 единиц здоровья и 30 рублей.';
            health = health - 5;
            money = money - 30;
            healthchange();
            moneychange();
        } else {
            changepole();
            spname.textContent = "В гостях хорошо, а дома лучше.";
            pname.textContent = "Вы успешно добрались до дома.";
        }
    }
}

function openchoice() {
    randomobj.style.zIndex = "4";
    randomobj.style.opacity = "1";
}

function randomsob() {
    if (money >= 100000) {
        openchoice();
        document.getElementById('randomsod').innerHTML = '<video src="files/video/theend_press.mp4" autoplay style="max-width: 70%"></video>';
    } else {
        if (health < 1) {
            posle.style.zIndex = "4";
            posle.style.opacity = "1";
            spname.textContent = "...";
            pname.textContent = "Вы не дожили до следующего дня...";
            ballzb.textContent = "принять судьбу"
        } else {
            random = Math.floor(Math.random() * 5) + 1;
            if (money < 100000) {
                if (random === 1) {
                    openchoice();
                    rname.textContent = robj[trackindex = 0].name;
                    rchoice1.textContent = robj[trackindex = 0].choice1;
                    rchoice2.textContent = robj[trackindex = 0].choice2;
                };
                if (random === 2) {
                    openchoice();
                    rname.textContent = robj[trackindex = 1].name;
                    rchoice1.textContent = robj[trackindex = 1].choice1;
                    rchoice2.textContent = robj[trackindex = 1].choice2;
                };
            }
        }
    }
}
