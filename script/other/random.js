const rname = document.getElementById('rname');
const pname = document.getElementById('pname');
const spname = document.getElementById('spname');
const rchoice1 = document.getElementById('rchoice1');
const rchoice2 = document.getElementById('rchoice2');
const music = document.getElementById('music');
const audio = document.getElementById('audio');

const robj = [
    {
        name: 'сегодня вас укусила пчела',
        choice1: 'затерпеть',
        choice2: 'попытаться убить',
    },
    {
        name: 'вы пришли в шарагу, а там фсб с проверкой. у себя в кармане вы нашли 50кг кокаина и барахатные тяги. что будете делать?',
        choice1: 'попытаться скрыть',
        choice2: 'пойти домой',
    },
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я против жителей зимбабве',
        choice2: 'я за жителей зимбабве',
    },
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я против жителей зимбабве',
        choice2: 'я за жителей зимбабве',
    },
];

let trackindex = 0;

var random;

function udacha() {
    spname.textContent = "Ваше благородие, Госпожа Удача...";
    music.src = "files/audio/random.mp3";
    audio.load();
}

function choice1() {
    if (random === 1) {
        changepole();
        spname.textContent = "Озон терпел и нам велел";
        pname.textContent = "Вы решили затерпеть. Вы потеряли 10 единиц здоровья.";
        health = health - 10;
        healthchange();
    }

    if (random === 2) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            udacha();
            changepole();
            pname.textContent = "Увы, но в этот раз у вас ничего не получилось. Все нелегальные предметы были конфискованы, а вы потеряли 5 единиц здоровья.";
            health = health - 5;
            healthchange();
        } else {
            changepole();
            spname.textContent = "Счастливчик. Хотя, кто знает, что для тебя лучше...";
            pname.textContent = "В это раз всё прошло гладко.";
        }
    }

    if (random === 3) {
        changepole();
        spname.textContent = "Интернет не анонимен";
        pname.textContent = "Жители Зимбабве нашли вас (я сам хз как) и МЯГКО намекнули, что они тоже люди. Вы потеряли 10 единиц здоровья.";
        health = health - 10;
        healthchange();
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
            pname.textContent = '"Зачем сидеть на парах" - подумали вы и отправились домой. Но по пути вы встретили куратора. Поздравляю, Вы снова в шараге. Вы потеряли 5 единиц здоровья и 30 рублей.';
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

    if (random === 3) {
        var podrandom = Math.floor(Math.random() * 2);
        if (podrandom === 0) {
            changepole();
            spname.textContent = "Интернет не анонимен";
            pname.textContent = "Жители Зимбабве нашли вас (я сам хз как) и поблагодарили Вас за ваш выбор. Они вручили Вам 150 рублей.";
            money = money + 150;
            moneychange();
        } else {
            udacha();
            changepole();
            pname.textContent = "Хейтеры Зимбабве нашли вас и МЯГКО намекнули, что Вы сделали плохой выбор. Вы потерял 10 единиц здоровья.";
            health = health - 10;
            healthchange();
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
        document.getElementById('randomsod').innerHTML = '<video src="files/video/theend.mp4" autoplay style="max-width: 70%"></video>';
    } else {
        if (health < 1) {
            posle.style.zIndex = "4";
            posle.style.opacity = "1";
            spname.textContent = "Инсульт жопы";
            pname.textContent = "Вы не дожили до следующего дня...";
            ballzb.textContent = "смэрть"
        } else {
            random = Math.floor(Math.random() * 8) + 1;
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
                if (random === 3) {
                    openchoice();
                    rname.textContent = robj[trackindex = 2].name;
                    rchoice1.textContent = robj[trackindex = 2].choice1;
                    rchoice2.textContent = robj[trackindex = 2].choice2;
                }
            }
        }
    }
}
