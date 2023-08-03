function prikoli() {
    var prik = Math.floor(Math.random() * 2);
    switch (prik) {
        case 0:
            var roflan = Math.floor(Math.random() * 5) + 1;
            menu_image.src = "files/pic/samara/" + roflan + ".jpg";
            break;
        case 1:
            var prikolsi = Math.floor(Math.random() * 23) + 1;
            menu_image.src = "files/pic/days/" + prikolsi + ".jpg";
            break;
    }
}