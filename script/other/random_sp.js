const rname = document.getElementById('rname');
const rchoice1 = document.getElementById('rchoice1');
const rchoice2 = document.getElementById('rchoice2');

const robj = [
    {
        name: 'сегодня вас укусила пчела',
        choice1: 'затерпеть',
        choice2: 'лечится',
    },
    {
        name: 'вы пришли в колледж и обнаружили, что потеряли пропуск',
        choice1: 'пойти домой',
        choice2: 'пройти по студенческому',
    },
    {
        name: 'вы наткнулись на голосование, результатом которого должна решиться судьба жителей Зимбабве. что вы выберете?',
        choice1: 'я за жителей зимбабве',
        choice2: 'я против жителей зимбабве',
    },
];

let trackindex = 0;

function openchoice() {
    randomobj.style.zIndex = "4";
    randomobj.style.opacity = "1";
}

function randomsob() {
    var random = Math.floor(Math.random() * 7) + 1;
    if (money < 200000) {
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
    } else {
        openchoice();
        document.getElementById('randomsod').innerHTML = '<video src="files/video/theend.mp4" autoplay></video>';
    }
}
