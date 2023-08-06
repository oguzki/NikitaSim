const event1_name = document.getElementById('event1_name');
const event2_name = document.getElementById('event2_name');
const event2_main = document.getElementById('event2_main');
const event1_button1 = document.getElementById('event1_button1');
const event1_button2 = document.getElementById('event1_button2');
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
        name: 'вы нашли закладку с солью. что будем делать?',
        choice1: 'продать',
        choice2: 'захавать',
    },
];

let trackindex = 0;

var random;

function udacha() {
    event2_main.textContent = "Ваше благородие, Госпожа Удача...";
    audio.src = "files/audio/random.mp3";
    audio.load();
}

function choice1() {
    switch (random) {
        case 1:
            changeEvent();
            event2_main.textContent = "Озон терпел и нам велел";
            event2_name.textContent = "Вы решили затерпеть. Вы потеряли 10 единиц здоровья.";
            health = health - 10;
            healthchange();
            break;
        case 2:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                changeEvent();
                event2_name.textContent = "Увы, но в этот раз у вас ничего не получилось. Все нелегальные предметы были конфискованы, а вы потеряли 5 единиц здоровья.";
                health = health - 5;
                healthchange();
            } else {
                changeEvent();
                event2_main.textContent = "Счастливчик. Хотя, кто знает, что для тебя лучше...";
                event2_name.textContent = "В это раз всё прошло гладко.";
            }
            break;
        case 3:
            changeEvent();
            event2_main.textContent = "Интернет не анонимен";
            event2_name.textContent = "Жители Зимбабве нашли вас (я сам хз как) и МЯГКО намекнули, что они тоже люди. Вы потеряли 10 единиц здоровья.";
            health = health - 10;
            healthchange();
            break;
        case 4:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                changeEvent();
                udacha();
                event2_main.textContent = "кладмен мудак";
                event2_name.textContent = "Оказалось, что данный прикол был заранее спланирован ФСБ. НО, добрые дяденьки отпустили Вас всего лишь за каких-то 300 рублей.";
                money = money - 300;
                moneychange();
            } else {
                changeEvent();
                event2_main.textContent = "спасибо кладмен";
                event2_name.textContent = "Вы успешно продали соль. Вы заработали 300 рублей.";
                money = money + 300;
                moneychange();
            }
            break;
    }
}

function choice2() {
    switch (random) {
        case 1:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                changeEvent();
                event2_name.textContent = "Увы, но вы промахнулись. Пчела нанесла ответный удар. Вы потеряли 10 единиц здоровья";
                health = health - 10;
                healthchange();
            } else {
                changeEvent();
                event2_main.textContent = "Точно в цель";
                event2_name.textContent = "Вы успешно убили пчелу";
            }
            break;
        case 2:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                changeEvent();
                event2_name.textContent = '"Зачем сидеть на парах" - подумали вы и отправились домой. Но по пути вы встретили куратора. Поздравляю, Вы снова в шараге. Вы потеряли 5 единиц здоровья и 30 рублей.';
                health = health - 5;
                money = money - 30;
                healthchange();
                moneychange();
            } else {
                changeEvent();
                event2_main.textContent = "В гостях хорошо, а дома лучше.";
                event2_name.textContent = "Вы успешно добрались до дома.";
            }
            break;
        case 3:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                changeEvent();
                event2_main.textContent = "Интернет не анонимен";
                event2_name.textContent = "Жители Зимбабве нашли вас (я сам хз как) и поблагодарили Вас за ваш выбор. Они вручили Вам 150 рублей.";
                money = money + 150;
                moneychange();
            } else {
                udacha();
                changeEvent();
                event2_name.textContent = "Хейтеры Зимбабве нашли вас и МЯГКО намекнули, что Вы сделали плохой выбор. Вы потерял 10 единиц здоровья.";
                health = health - 10;
                healthchange();
            }
            break;
        case 4:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                changeEvent();
                event2_main.textContent = "реально соль";
                event2_name.textContent = "Вот Вы думали, что это та соль, но нет. Это оказалась столовая соль. С вами ничего не произошло.";
            } else {
                changeEvent();
                udacha();
                event2_main.textContent = "давай раскумаримся по полной";
                event2_name.textContent = "Вы захавали соль и вас, сделайте удивлённое лицо, накрыло. Вы проснулись на следующий день и потеряли 15 здоровья.";
                health = health - 15;
                healthchange();
            }
            break;
    }
}

function openchoice() {
    event1.style.zIndex = "4";
    event1.style.opacity = "1";
}

function randomevent() {
    switch (true) {
        case money >= 100000:
            video_event.style.zIndex = "4";
			video_event.style.opacity = "1";
			video.src = "files/video/theend.mp4";
			video_name.textContent = "Happy End";
            drink_button.disabled = true;
            break;
        case health <= 1:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            event2_main.textContent = "инсульт жопы";
            event2_name.textContent = "Вы не дожили до следующего дня...";
            event2_button.textContent = "смэрть"
            break;
        default:
            random = Math.floor(Math.random() * 8) + 1;
            switch (random) {
                case 1:
                    openchoice();
                    event1_name.textContent = robj[trackindex = 0].name;
                    event1_button1.textContent = robj[trackindex = 0].choice1;
                    event1_button2.textContent = robj[trackindex = 0].choice2;
                    break;
                case 2:
                    openchoice();
                    event1_name.textContent = robj[trackindex = 1].name;
                    event1_button1.textContent = robj[trackindex = 1].choice1;
                    event1_button2.textContent = robj[trackindex = 1].choice2;
                    break;
                case 3:
                    openchoice();
                    event1_name.textContent = robj[trackindex = 2].name;
                    event1_button1.textContent = robj[trackindex = 2].choice1;
                    event1_button2.textContent = robj[trackindex = 2].choice2;
                    break;
                case 4:
                    openchoice();
                    event1_name.textContent = robj[trackindex = 3].name;
                    event1_button1.textContent = robj[trackindex = 3].choice1;
                    event1_button2.textContent = robj[trackindex = 3].choice2;
                    break;
            }
            break;
    }
}
