const showcode = document.getElementById('showcode');
const game_casino = document.getElementById('game_casino');
const game_casino_close = document.getElementById('game_casino_close')
const event1 = document.getElementById('event1');
const event2 = document.getElementById('event2');
const video = document.getElementById('video');
const video_event = document.getElementById('video_event');
const video_name = document.getElementById('video_name');
const video_subname = document.getElementById('video_subname');
const video_button = document.getElementById('video_button');
const event2_button = document.getElementById('event2_button'); 

const game_image = document.getElementById('game_image');

function holidays() {
    var game_pics = Math.floor(Math.random() * 2);
    switch (game_pics) {
        case 0:
            var samara = Math.floor(Math.random() * 5) + 1;
            game_image.src = "files/img/samara/" + samara + ".jpg";
            drink_button.disabled = true;
            break;
        case 1:
            var holiday = Math.floor(Math.random() * 22) + 1;
            game_image.src = "files/img/days/" + holiday + ".jpg";
            drink_button.disabled = false;
            break;
    }
}

function choice3() {
    if (health < 1) {
        event2.style.zIndex = "-1";
        event2.style.opacity = "0";
        video_event.style.zIndex = "4";
        video_event.style.opacity = "1";
        video.src = "files/video/badend.mp4";
        video_name.textContent = "Bad End";
        video_subname.style.display = "none";
        video_button.style.display = "none";
    } else {
        closeEvent();
    }
}

function hospital() {
    switch (true) {
        case health === 100:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            event2_name.textContent = "Добро пожаловать в дурку";
            event2_subname.textContent = "Чел, ты полностью здоров...";
            break;
        case money <= 0:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            event2_name.textContent = "Добро пожаловать в дурку";
            event2_subname.textContent = "У вас нет денег";
            break;
        case health <= 0:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            event2_name.textContent = "инсульт жопы";
            event2_subname.textContent = "Вы не успели добраться до больницы и умерли...";
            event2_button.textContent = "принять судьбу"
            break;
        default:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            var heal_cost = (100 - health) * 6;
            event2_name.textContent = "Добро пожаловать в дурку";
            event2_subname.textContent = "Вы востановили здоровье. Стоимость лечения составила " + heal_cost + " рублей.";
            health = 100;
            money = money - heal_cost;
            healthchange();
            moneychange();
    }
}

function drink() {
    video_event.style.zIndex = "4";
    video_event.style.opacity = "1";
    var drink_random = Math.floor(Math.random() * 2) + 1;
    switch (drink_random) {
        case 1:
            video.src = "files/video/hryap.mp4";
            video_name.textContent = "В честь праздника можно и выпить";
            if (health < 100 && health >= 95) {
                video_subname.textContent = "Вы потеряли 20 рублей, но восстановили здоровье до максимума.";
                health = 100;
                healthchange();
            } else {
                if (health < 95 && health > 0) {
                    video_subname.textContent = "Вы потеряли 20 рублей, но восстановили 5 единиц здоровья.";
                    health = health + 5;
                    healthchange();
                } else {
                    video_subname.textContent = "Вы потеряли 20 рублей, но нормально так кайфанули.";
                }
            }
            break;
        case 2:
            var drink_boyarin = Math.floor(Math.random() * 4) + 2;
            video.src = "files/video/ozon.mp4";
            video_name.textContent = "В честь праздника можно и...";
            video_subname.textContent = "Вы потеряли 20 рублей и " + drink_boyarin + " здоровья."
            health = health - drink_boyarin;
            healthchange();
            break;
    }
    drink_button.disabled = true;
    money = money - 20;
    moneychange();
}

function closeEvent() {
    event1.style.zIndex = "-1";
    event1.style.opacity = "0";
    event2.style.zIndex = "-1";
    event2.style.opacity = "0";
    video_event.style.zIndex = "-1";
    video_event.style.opacity = "0";
    video.src = "";
    video.load();
}

function changeEvent() {
    event1.style.zIndex = "-1";
    event1.style.opacity = "0";
    event2.style.zIndex = "4";
    event2.style.opacity = "1";
}

function scholarship() {
    money = money + 800;
    moneychange();
}

function callmother() {
    money = money + 1000;
    moneychange();
    document.getElementById('call_mother_button').disabled = true;
    setTimeout(reset_call_mother, 120000);
}

function reset_call_mother() {
    document.getElementById('call_mother_button').disabled = false;
}

function nextDay() {
    drink_button.style.display = "block";
    day = day + 1;
    randomevent();
    holidays();
    if (mon === 2) {
        if (day === 29) {
            nextMon();
            scholarship();
        }
    }
    if (day === 32) {
        nextMon();
        scholarship();
    } else {
        daychange();
    }
    if (mon >= 13) {
        nextYear();
    }
}

function nextDay_withoutEvent() {
    day = day + 1;
    holidays();
    if (mon === 2) {
        if (day === 29) {
            nextMon();
            scholarship();
        }
    }
    if (day === 32) {
        nextMon();
        scholarship();
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
