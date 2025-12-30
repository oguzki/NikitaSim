function generate() {
    switch (code) {
        case 'lilium':
        case 'Lilium':
            video_event.style.zIndex = "4";
            video_event.style.opacity = "1";
            video.src = "files/video/listen.mp4";
            video_name.style.display = "none";
            video_subname.style.display = "none";
            break;
        default:
            event2.style.zIndex = "4";
            event2.style.opacity = "1";
            if (health < 1) {
                event2_name.textContent = "Но мы пойдём другим путём";
                event2_subname.textContent = "У Вас не получиться перехитрить систему...";
                event2_button.textContent = "Принять судьбу";
            } else {
                event2_name.textContent = "ваш пароль:";

                if (health < 10) {
                    pass_health = "00" + health
                } else if (health < 100 && health >= 10) {
                    pass_health = "0" + health
                } else {
                    pass_health = health
                }

                if (day < 10) {
                    pass_day = "0" + day
                } else {
                    pass_day = day
                }

                if (mon < 10) {
                    pass_mon = "0" + mon
                } else {
                    pass_mon = mon
                }

                event2_subname.textContent = pass_health + "-" + year + "Y" + pass_day + "-" + pass_mon + "C-" + (money * 2);
                console.log(password);

                // old password generator (много букв)

                // if (mon < 10 && day < 10 && health < 100 && health >= 10) {
                //     var password = "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                // } else {
                //     if (mon < 10 && day < 10 && health < 10) {
                //         var password = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon < 10 && day < 10 && health === 100) {
                //         var password = health + "-" + year + "Y" + "0" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && day >= 10 && health === 100) {
                //         var password = health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && day >= 10 && health < 100 && health >= 10) {
                //         var password = "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && day >= 10 && health < 10) {
                //         var password = "0" + "0" + health + "-" + year + "Y" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && health === 100) {
                //         var password = health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && health < 100 && health >= 10) {
                //         var password = "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (mon >= 10 && health < 10) {
                //         var password = "0" + "0" + health + "-" + year + "Y" + "0" + day + "-" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (day >= 10 && health === 100) {
                //         var password = health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (day >= 10 && health < 100 && health >= 10) {
                //         var password = "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                //     }
                //     if (day >= 10 && health < 10) {
                //         var password = "0" + "0" + health + "-" + year + "Y" + day + "-" + "0" + mon + "C" + "-" + (money * 2);
                //     }
                // }
                
                // event2_subname.textContent = password;
                // console.log(password);
            }
            break;
    }
}