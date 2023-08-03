var c1 = document.getElementById('chislo1');
var c2 = document.getElementById('chislo2');
var c3 = document.getElementById('chislo3');

const winlose = document.getElementById('winlose');
const winlose_pic = document.getElementById('winlose_pic');

var r1;
var r2;
var r3;

var stavka;



function kazich() {
    stavka = Number(document.getElementById('stavki').value);
    winlose.textContent = "";
    switch (true) {
        case stavka > money:
            winlose.textContent = "ставка больше баланса";
            winlose_pic.src = "https://media.tenor.com/-CfhczC_cREAAAAC/angai313-spongebob-sad.gif";
            winlose_pic.style.height = "150px";
            break;
        case stavka === 0:
            winlose.textContent = "укажи ставку";
            winlose_pic.src = "https://media.tenor.com/sADndc5QpsQAAAAC/no-score.gif";
            winlose_pic.style.height = "115px"
            break;
        case stavka < 0:
            winlose.textContent = "ставка меньше нуля";
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
    switch (r1) {
        case 7:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/7.png">';
            break;
        case 6:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/6.png">';
            break;
        case 5:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
            break;
        case 4:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
            break;
        case 3:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
            break;
        case 2:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
            break;
        case 1:
            c1.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
            break;
    }

    //кристал номер 2
    switch (r2) {
        case 5:
            c2.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
            break;
        case 4:
            c2.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
            break;
        case 3:
            c2.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
            break;
        case 2:
            c2.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
            break;
        case 1:
            c2.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
            break;
    }

    //кристал номер 3
    switch (r3) {
        case 6:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/6.png">';
            break;
        case 5:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/5.png">';
            break;
        case 4:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/4.png">';
            break;
        case 3:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/3.png">';
            break;
        case 2:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/2.png">';
            break;
        case 1:
            c3.innerHTML = '<img class="gems" src="files/pic/gems/1.png">';
            break;
    }

    kzcheck();
}

function kzcheck() {
    switch (true) {
        case r1 === 1 && r2 === 1 && r3 === 1:
            winlose.textContent = "нормально";
            winlose_pic.src = "https://media.tenor.com/lXrTXpd6W8YAAAAC/jadeyanh-vylerria.gif";
            winlose_pic.style.height = "110px"
            money = money + (stavka * 2);
            moneychange();
            break;
        case r1 === 2 && r2 === 2 && r3 === 2:
            winlose.textContent = "на мотороллер хватит";
            winlose_pic.src = "https://media.tenor.com/ROmWbzs_aSQAAAAC/maddy-murk-murk-power.gif";
            winlose_pic.style.height = "84px";
            money = money + Math.round(stavka * 2.5);
            moneychange();
            break;
        case r1 === 3 && r2 === 3 && r3 === 3:
            winlose.textContent = "Всем пиво за мой счёт!";
            winlose_pic.src = "https://psv4.userapi.com/c235031/u470760053/docs/d9/415d440fea1b/ded_pyot_pivo.gif?extra=V00f-0PytKuGlQN-yQOCDc2NmKN4TAZBf8OenzbD70tzLY8jtcVnKcs3MgtEV5TxKWNvQsGSez8dD-tG8CAA_GfiXc3_Z0VErrKh5MjgYqQ7DugNwJkcpzCnODNxxXsMMw4YTQKcZ3kzXJyg3tpnvLQAMg";
            winlose_pic.style.height = "274px"
            money = money + (stavka * 3);
            moneychange();
            break;
        case r1 === 4 && r2 === 4 && r3 === 4:
            winlose.textContent = "Победа!";
            winlose_pic.src = "https://media.tenor.com/vBj5YoMJbo8AAAAC/%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0-%D0%BA%D1%83%D1%85%D0%BD%D1%8F.gif";
            winlose_pic.style.height = "86px"
            money = money + (stavka * 4);
            moneychange();
            break;
        case r1 === 5 && r2 === 5 && r3 === 5:
            winlose.textContent = "ДЖЕКПОТ";
            winlose_pic.src = "https://media.tenor.com/qNDgTlYUYwAAAAAC/jackpot-%D0%B4%D0%B6%D0%B5%D0%BA%D0%BF%D0%BE%D1%82.gif";
            winlose_pic.style.height = "112px"
            money = money + (stavka * 5);
            moneychange();
            break;
        case r1 === r2 || r2 === r3:
            winlose.textContent = "почти...";
            winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
            winlose_pic.style.height = "150px";
            money = money + Math.round(stavka * 1.16);
            moneychange();
            break;
        case r1 === r3:
            winlose.textContent = "почти...";
            winlose_pic.src = "https://media.discordapp.net/attachments/786030245688901674/1094306737756045312/ezgif-2-b9e8a376f7.gif";
            winlose_pic.style.height = "150px";
            money = money + Math.round(stavka * 1.16);
            moneychange();
            break;
        default:
            money = money - stavka;
            moneychange();
            winlose.textContent = "...";
            winlose_pic.src = "https://psv4.userapi.com/c237231/u704977679/docs/d52/3f9992bac2a9/clowndoomer.gif?extra=SPobilmhiUq1ovcXZjD7F_n88UrmJdlm8WQL-_t5d6JE5mAli5fq9_YNI4D3IOaEJDBeDkDopp8Pjal8dWWBPkgy4I14JSIuWpSKHQiu0UWnLOukyQl1YNKK4mhyHc4oR_jogn1UqAuL6qOpfTX_dXVPeg";
            winlose_pic.style.height = "113px";
            break;
    }
}