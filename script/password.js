function generate() {
    if (health < 1) {
        event2.style.zIndex = "4";
        event2.style.opacity = "1";
        event2_name.textContent = "Но мы пойдём другим путём";
        event2_subname.textContent = "У Вас не получиться перехитрить систему...";
        event2_button.textContent = "Принять судьбу";
    } else {
        document.getElementById('event2').style.zIndex = "3";
        document.getElementById('event2').style.opacity = "1";
        event2_name.textContent = "ваш пароль:";
        if (mon < 10 && day < 10 && health < 100 && health >= 10) {
            var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
        } else {
            if (mon < 10 && day < 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (mon < 10 && day < 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && day >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (mon >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health === 100) {
                var aboba = health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health < 100 && health >= 10) {
                var aboba = "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }

            if (day >= 10 && health < 10) {
                var aboba = "0" + "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
            }
        }
        event2_subname.textContent = aboba;
        console.log(aboba);
    }
}
