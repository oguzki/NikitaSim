const event1_subname = document.getElementById('event1_subname');
const event2_name = document.getElementById('event2_name');
const event2_subname = document.getElementById('event2_subname');
const event1_button1 = document.getElementById('event1_button1');
const event1_button2 = document.getElementById('event1_button2');
const audio = document.getElementById('audio');

const robj = [
    {
        name: 'заглушка',
        choice1: 'заглушка',
        choice2: 'заглушка',
    },
    {
        name: 'сегодня вас укусила пчела',
        choice1: 'затерпеть',
        choice2: 'попытаться убить',
    },
    {
        name: 'вы пришли в шарагу, а там фсб с проверкой. у себя в кармане вы нашли 50кг кокаина. что будете делать?',
        choice1: 'попытаться скрыть',
        choice2: 'пойти домой',
    },
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я против жителей зимбабве',
        choice2: 'я за жителей зимбабве',
    },
    {
        name: 'вы нашли закладку с солью. что будете делать?',
        choice1: 'продать',
        choice2: 'захавать',
    },
    {
        name: 'опять утро. идти в шарагу желания нет. что предпримем?',
        choice1: 'пойти в колледж',
        choice2: 'хряпнуть',
    },
];

let trackindex = 0;

var random;

function udacha() {
    event2_name.textContent = "Ваше благородие, Госпожа Удача...";
    audio.src = "files/audio/random.mp3";
    audio.load();
}

function choice1() {
    changeEvent();
    switch (random) {
        case 1:
            event2_name.textContent = "Озон терпел и нам велел";
            event2_subname.textContent = "Вы решили затерпеть. Вы потеряли 5 единиц здоровья.";
            health = health - 5;
            healthchange();
            break;
        case 2:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                event2_subname.textContent = "Увы, но в этот раз у вас ничего не получилось. Все нелегальные предметы были конфискованы, а вы потеряли 2 единицы здоровья.";
                health = health - 2;
                healthchange();
            } else {
                event2_name.textContent = "Счастливчик. Хотя, кто знает, что для тебя лучше...";
                event2_subname.textContent = "В это раз всё прошло гладко.";
            }
            break;
        case 3:
            event2_name.textContent = "Интернет не анонимен";
            event2_subname.textContent = "Жители Зимбабве нашли вас (я сам хз как) и МЯГКО намекнули, что они тоже люди. Вы потеряли 10 единиц здоровья.";
            health = health - 10;
            healthchange();
            break;
        case 4:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                event2_name.textContent = "кладмен мудак";
                event2_subname.textContent = "Оказалось, что данный прикол был заранее спланирован ФСБ. НО, добрые дяденьки отпустили Вас всего лишь за каких-то 300 рублей.";
                money = money - 300;
                moneychange();
            } else {
                event2_name.textContent = "спасибо кладмен";
                event2_subname.textContent = "Вы успешно продали соль. Вы заработали 300 рублей.";
                money = money + 300;
                moneychange();
            }
            break;
        case 5:
            event2_name.textContent = "Озон терпел и нам велел";
            event2_subname.textContent = "Вы решили пойти в колледж (зачем?). Вы потратили 30 рублей за проезд.";
            money = money - 30;
            moneychange();
            break;
    }
}

function choice2() {
    changeEvent();
    switch (random) {
        case 1:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                event2_subname.textContent = "Увы, но вы промахнулись. Пчела нанесла ответный удар. Вы потеряли 5 единиц здоровья";
                health = health - 5;
                healthchange();
            } else {
                event2_name.textContent = "Точно в цель";
                event2_subname.textContent = "Вы успешно убили пчелу";
            }
            break;
        case 2:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                udacha();
                event2_subname.textContent = '"Зачем сидеть на парах" - подумали вы и отправились домой. Но по пути вы встретили куратора. Поздравляю, Вы снова в шараге. Вы потеряли 2 единицы здоровья и 30 рублей.';
                health = health - 2;
                money = money - 30;
                healthchange();
                moneychange();
            } else {
                event2_name.textContent = "В гостях хорошо, а дома лучше.";
                event2_subname.textContent = "Вы успешно добрались до дома.";
            }
            break;
        case 3:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                event2_name.textContent = "Интернет не анонимен";
                event2_subname.textContent = "Жители Зимбабве нашли вас (я сам хз как) и поблагодарили Вас за ваш выбор. Они вручили Вам 150 рублей.";
                money = money + 150;
                moneychange();
            } else {
                udacha();
                event2_name.textContent = "Интернет не анонимен";
                event2_subname.textContent = "Хейтеры Зимбабве нашли вас и МЯГКО намекнули, что Вы сделали плохой выбор. Вы потерял 10 единиц здоровья.";
                health = health - 10;
                healthchange();
            }
            break;
        case 4:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                event2_name.textContent = "реально соль";
                event2_subname.textContent = "Вот Вы думали, что это та соль, но нет. Это оказалась столовая соль. С вами ничего не произошло.";
            } else {
                udacha();
                event2_name.textContent = "давай раскумаримся по полной";
                event2_subname.textContent = "Вы захавали соль и Вас, сделайте удивлённое лицо, накрыло. Вы проснулись на следующий день и потеряли 10 здоровья.";
                health = health - 7;
                healthchange();
                nextDay_withoutEvent();
            }
            break;
        case 5:
            var podrandom = Math.floor(Math.random() * 2);
            if (podrandom === 0) {
                closeEvent();
                drink();
                video_name.textContent = "давай раскумаримся по полной";
            } else {
                udacha();
                event2_subname.textContent = "Мало того, что дома ничего нечего выпить, так ещё и куратор забил тревогу из-за вашего отсутствия. Вы потеряли 7 здоровья";
                health = health - 7;
                healthchange();
            }
            break;
    }
}

function openchoice() {
    event1.style.zIndex = "4";
    event1.style.opacity = "1";
}

function daychecker() {
    if (code == 'lilium' || code == 'Lilium') {
        switch (true) {
            case money >= 100000:
                video_event.style.zIndex = "4";
                video_event.style.opacity = "1";
                video.src = "files/video/theend.mp4";
                video_name.textContent = "Happy End";
                video_subname.style.display = "none";
                video_button.style.display = "none";
                break;
        }
    } else {
        switch (true) {
            case money >= 100000:
                video_event.style.zIndex = "4";
                video_event.style.opacity = "1";
                video.src = "files/video/theend.mp4";
                video_name.textContent = "Happy End";
                video_subname.style.display = "none";
                video_button.style.display = "none";
                break;
            case health <= 0:
                event2.style.zIndex = "4";
                event2.style.opacity = "1";
                event2_name.textContent = "инсульт жопы";
                event2_subname.textContent = "Вы не дожили до следующего дня...";
                event2_button.textContent = "принять судьбу"
                break;
            default:
                randomevent();
                break;
        }
    }
}

function randomevent() {
    random = Math.floor(Math.random() * 11) + 1;
    if (random <= 5) {
        openchoice();
        event1_subname.textContent = robj[trackindex = random].name;
        event1_button1.textContent = robj[trackindex = random].choice1;
        event1_button2.textContent = robj[trackindex = random].choice2;
    }
}
