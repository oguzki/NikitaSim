var n1 = document.getElementById('casino_number1');
var n2 = document.getElementById('casino_number2');
var n3 = document.getElementById('casino_number3');

const game_casino = document.getElementById('game_casino');
const game_casino_close = document.getElementById('game_casino_close');
const game_casino_last_win = document.getElementById('game_casino_last_win');
const game_casino_last_win_sum = document.getElementById('game_casino_last_win_sum');
const game_casino_winlose = document.getElementById('game_casino_winlose');
const winlose_pic = document.getElementById('winlose_pic');

var r1;
var r2;
var r3;

var stavka;

function open_casino() {
    game_casino.style.width = "300px";
    game_casino_close.style.width = "1920px";
    last_win();
}

function last_win() {
    var lw1 = Math.floor(Math.random() * 8) + 1;
    var lw2 = Math.floor(Math.random() * 8) + 1;
    var lw3 = Math.floor(Math.random() * 8) + 1;
    var lw4 = Math.floor(Math.random() * 8) + 1;
    var lw5 = Math.floor(Math.random() * 8) + 1;
    var lw6 = Math.floor(Math.random() * 8) + 1;
    game_casino_last_win.textContent = lw1 + "" + "" + lw2 + "**********" + lw3 + "" + lw4 + "" + lw5 + "" + lw6;
    game_casino_last_win_sum.textContent = "+" + (Math.floor(Math.random() * 9999) + 1) + "₽";
    setTimeout(last_win, 5000);
}

function close_casino() {
    game_casino.style.width = "0";
    game_casino_close.style.width = "0";
    audio.src = "files/audio/delete.mp3";
    audio.load();
    n1.textContent = "-";
    n2.textContent = "-";
    n3.textContent = "-";
    game_casino_last_win.textContent = "";
    game_casino_last_win_sum.textContent = "";
    game_casino_winlose.textContent = "";
    winlose_pic.src = "files/gif/base.gif";
    winlose_pic.style.height = "150px";
}

function casino_play() {
    stavka = Number(document.getElementById('stavki').value);
    switch (true) {
        case stavka > money:
            game_casino_winlose.textContent = "ставка больше баланса";
            winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
            winlose_pic.style.height = "200px";
            break;
        case stavka === 0:
            game_casino_winlose.textContent = "укажи ставку";
            winlose_pic.src = "https://media.tenor.com/sADndc5QpsQAAAAC/no-score.gif";
            winlose_pic.style.height = "153px"
            break;
        case stavka < 0:
            game_casino_winlose.textContent = "ставка меньше нуля";
            winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
            winlose_pic.style.height = "200px";
            break;
        default:
            r1 = Math.floor(Math.random() * 7) + 1;
            r2 = Math.floor(Math.random() * 5) + 1;
            r3 = Math.floor(Math.random() * 6) + 1;
            kzpicks();
            break;
    }
}

function kzpicks() {

    //кристал номер 1
    n1.innerHTML = '<img class="gems" src="files/img/gems/' + r1 + '.png">';

    //кристал номер 2
    n2.innerHTML = '<img class="gems" src="files/img/gems/' + r2 + '.png">';

    //кристал номер 3
    n3.innerHTML = '<img class="gems" src="files/img/gems/' + r3 + '.png">';

    kzcheck();
}

function kzcheck() {
    switch (code) {
        case 'lilium':
        case 'Lilium':
            n1.innerHTML = '<img class="gems" src="files/img/gems/' + '5' + '.png">';
            n2.innerHTML = '<img class="gems" src="files/img/gems/' + '5' + '.png">';
            n3.innerHTML = '<img class="gems" src="files/img/gems/' + '5' + '.png">';
            game_casino_winlose.textContent = "взлом казино";
            money = money + ((stavka * 5) - stavka);
            moneychange();
            break;
        default:
            switch (true) {
                case r1 === 1 && r2 === 1 && r3 === 1:
                    game_casino_winlose.textContent = "нормально";
                    winlose_pic.src = "https://media.tenor.com/lXrTXpd6W8YAAAAC/jadeyanh-vylerria.gif";
                    winlose_pic.style.height = "147px"
                    money = money + (stavka * 2);
                    moneychange();
                    break;
                case r1 === 2 && r2 === 2 && r3 === 2:
                    game_casino_winlose.textContent = "на мотороллер хватит";
                    winlose_pic.src = "https://media.tenor.com/ROmWbzs_aSQAAAAC/maddy-murk-murk-power.gif";
                    winlose_pic.style.height = "112px";
                    money = money + Math.round(stavka * 2.5);
                    moneychange();
                    break;
                case r1 === 3 && r2 === 3 && r3 === 3:
                    game_casino_winlose.textContent = "Всем пиво за мой счёт!";
                    winlose_pic.src = "https://media.tenor.com/I046lf0JnigAAAAd/deadp47-%D0%BF%D0%B8%D0%B2%D0%BE.gif";
                    winlose_pic.style.height = "365px"
                    money = money + (stavka * 3);
                    moneychange();
                    break;
                case r1 === 4 && r2 === 4 && r3 === 4:
                    game_casino_winlose.textContent = "Победа!";
                    winlose_pic.src = "https://media.tenor.com/vBj5YoMJbo8AAAAC/%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0-%D0%BA%D1%83%D1%85%D0%BD%D1%8F.gif";
                    winlose_pic.style.height = "115px"
                    money = money + (stavka * 4);
                    moneychange();
                    break;
                case r1 === 5 && r2 === 5 && r3 === 5:
                    game_casino_winlose.textContent = "ДЖЕКПОТ";
                    winlose_pic.src = "https://media.tenor.com/qNDgTlYUYwAAAAAC/jackpot-%D0%B4%D0%B6%D0%B5%D0%BA%D0%BF%D0%BE%D1%82.gif";
                    winlose_pic.style.height = "149px"
                    money = money + (stavka * 5);
                    moneychange();
                    break;
                case r1 === r2 || r2 === r3 || r1 === r3:
                    game_casino_winlose.textContent = "почти...";
                    winlose_pic.src = "https://media.tenor.com/ViC3bHngL0QAAAAC/%D0%B1%D1%8D%D0%B1%D1%8D%D0%B9-%D0%B1%D0%B5%D0%B1%D0%B5%D0%B9.gif";
                    winlose_pic.style.height = "151px";
                    money = money + (Math.round(stavka * 1.39) - stavka);
                    moneychange();
                    break;
                default:
                    game_casino_winlose.textContent = "...";
                    winlose_pic.src = "https://media.tenor.com/GIVLitDIxr8AAAAC/breaking-bad-walter-white.gif";
                    winlose_pic.style.height = "147px";
                    money = money - stavka;
                    moneychange();
                    break;
            }
    }
}
