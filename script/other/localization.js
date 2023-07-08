document.getElementById('flag1').style.filter = "grayscale(1)";

var lang = 0;

function rus() {
    lang = 0;
    document.getElementById('flag1').style.filter = "grayscale(1)";
    document.getElementById('flag2').style.filter = "grayscale(0)";
    document.getElementById('flag3').style.filter = "grayscale(0)";

    document.getElementById('lang1').textContent = "начать";
    document.getElementById('lang2').textContent = "или введите пароль";
    document.getElementById('lang3').textContent = "продолжить";
    document.getElementById('lang4').textContent = "данная игра является шуточной и не имеет ничего общего с реальностью (кроме Никиты)";
    document.getElementById('lang6').textContent = "вау, это же случайное событие";
}
function eng() {
    lang = 1;
    document.getElementById('flag1').style.filter = "grayscale(0)";
    document.getElementById('flag2').style.filter = "grayscale(1)";
    document.getElementById('flag3').style.filter = "grayscale(0)";

    document.getElementById('lang1').textContent = "start";
    document.getElementById('lang2').textContent = "or enter a password";
    document.getElementById('lang3').textContent = "continue";
    document.getElementById('lang4').textContent = "this game is a joke and has nothing to do with reality (except Nikita)";
    document.getElementById('lang6').textContent = "wow, it's a random event";
}
function jp() {
    lang = 2;
    document.getElementById('flag1').style.filter = "grayscale(0)";
    document.getElementById('flag2').style.filter = "grayscale(0)";
    document.getElementById('flag3').style.filter = "grayscale(1)";

    document.getElementById('lang1').textContent = "立ち上がり";
    document.getElementById('lang2').textContent = "またはパスワードを入力する";
    document.getElementById('lang3').textContent = "続ける";
    document.getElementById('lang4').textContent = "このゲームは冗談で、現実とは関係ない（ニキータを除く）";
    document.getElementById('lang6').textContent = "わー、ランダムイベントだー";
}
