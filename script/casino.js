var n1 = document.getElementById('casino_number1');
var n2 = document.getElementById('casino_number2');
var n3 = document.getElementById('casino_number3');

const game_casino_winlose = document.getElementById('game_casino_winlose');
const winlose_pic = document.getElementById('winlose_pic');

var r1;
var r2;
var r3;

var stavka;

function open_casino() {
    game_casino.style.width = "300px";
    game_casino_close.style.width = "1920px";
}

function close_casino() {
    game_casino.style.width = "0";
    game_casino_close.style.width = "0";
    audio.src = "files/audio/delete.mp3";
    audio.load();
    n1.textContent = "-";
    n2.textContent = "-";
    n3.textContent = "-";
    game_casino_winlose.textContent = "";
    winlose_pic.src = "files/gif/base.gif";
    winlose_pic.style.height = "150px";
}

function casino_play() {
    stavka = Number(document.getElementById('stavki').value);
    game_casino_winlose.textContent = "";
    switch (true) {
        case stavka > money:
            game_casino_winlose.textContent = "ставка больше баланса";
            winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
            winlose_pic.style.height = "150px";
            break;
        case stavka === 0:
            game_casino_winlose.textContent = "укажи ставку";
            winlose_pic.src = "https://media.tenor.com/sADndc5QpsQAAAAC/no-score.gif";
            winlose_pic.style.height = "115px"
            break;
        case stavka < 0:
            game_casino_winlose.textContent = "ставка меньше нуля";
            winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
            winlose_pic.style.height = "150px";
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
    n1.innerHTML = '<img class="gems" src="files/pic/gems/' + r1 + '.png">';

    //кристал номер 2
    n2.innerHTML = '<img class="gems" src="files/pic/gems/' + r2 + '.png">';

    //кристал номер 3
    n3.innerHTML = '<img class="gems" src="files/pic/gems/' + r3 + '.png">';

    kzcheck();
}

function kzcheck() {
    switch (true) {
        case r1 === 1 && r2 === 1 && r3 === 1:
            game_casino_winlose.textContent = "нормально";
            winlose_pic.src = "https://media.tenor.com/lXrTXpd6W8YAAAAC/jadeyanh-vylerria.gif";
            winlose_pic.style.height = "110px"
            money = money + (stavka * 2);
            moneychange();
            break;
        case r1 === 2 && r2 === 2 && r3 === 2:
            game_casino_winlose.textContent = "на мотороллер хватит";
            winlose_pic.src = "https://media.tenor.com/ROmWbzs_aSQAAAAC/maddy-murk-murk-power.gif";
            winlose_pic.style.height = "84px";
            money = money + Math.round(stavka * 2.5);
            moneychange();
            break;
        case r1 === 3 && r2 === 3 && r3 === 3:
            game_casino_winlose.textContent = "Всем пиво за мой счёт!";
            winlose_pic.src = "https://psv4.userapi.com/c235031/u470760053/docs/d9/415d440fea1b/ded_pyot_pivo.gif?extra=V00f-0PytKuGlQN-yQOCDc2NmKN4TAZBf8OenzbD70tzLY8jtcVnKcs3MgtEV5TxKWNvQsGSez8dD-tG8CAA_GfiXc3_Z0VErrKh5MjgYqQ7DugNwJkcpzCnODNxxXsMMw4YTQKcZ3kzXJyg3tpnvLQAMg";
            winlose_pic.style.height = "274px"
            money = money + (stavka * 3);
            moneychange();
            break;
        case r1 === 4 && r2 === 4 && r3 === 4:
            game_casino_winlose.textContent = "Победа!";
            winlose_pic.src = "https://media.tenor.com/vBj5YoMJbo8AAAAC/%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0-%D0%BA%D1%83%D1%85%D0%BD%D1%8F.gif";
            winlose_pic.style.height = "86px"
            money = money + (stavka * 4);
            moneychange();
            break;
        case r1 === 5 && r2 === 5 && r3 === 5:
            game_casino_winlose.textContent = "ДЖЕКПОТ";
            winlose_pic.src = "https://media.tenor.com/qNDgTlYUYwAAAAAC/jackpot-%D0%B4%D0%B6%D0%B5%D0%BA%D0%BF%D0%BE%D1%82.gif";
            winlose_pic.style.height = "112px"
            money = money + (stavka * 5);
            moneychange();
            break;
        case r1 === r2 || r2 === r3:
            game_casino_winlose.textContent = "почти...";
            winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
            winlose_pic.style.height = "150px";
            money = money + Math.round(stavka * 1.16);
            moneychange();
            break;
        case r1 === r3:
            game_casino_winlose.textContent = "почти...";
            winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
            winlose_pic.style.height = "150px";
            money = money + Math.round(stavka * 1.16);
            moneychange();
            break;
        default:
            money = money - stavka;
            moneychange();
            game_casino_winlose.textContent = "...";
            winlose_pic.src = "https://psv4.userapi.com/c237231/u704977679/docs/d52/3f9992bac2a9/clowndoomer.gif?extra=SPobilmhiUq1ovcXZjD7F_n88UrmJdlm8WQL-_t5d6JE5mAli5fq9_YNI4D3IOaEJDBeDkDopp8Pjal8dWWBPkgy4I14JSIuWpSKHQiu0UWnLOukyQl1YNKK4mhyHc4oR_jogn1UqAuL6qOpfTX_dXVPeg";
            winlose_pic.style.height = "113px";
            break;
    }
}