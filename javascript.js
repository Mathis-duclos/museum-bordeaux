function affichermenu() {
    let menuderoulant = document.getElementById("menuderoulant");
    let fleche = document.getElementById("fleche");
    if (menuderoulant.style.opacity == "0") {
        menuderoulant.style.opacity = "1";
        menuderoulant.style.pointerEvents = "auto";
        fleche.style.transform = "scaleY(-1)";
    } else {
        menuderoulant.style.opacity = "0";
        menuderoulant.style.pointerEvents = "none";
        fleche.style.transform = "scaleY(1)";
    }
}

function cachermenu() {
    if (menuderoulant.style.opacity == "1") {
        let menuderoulant = document.getElementById("menuderoulant");
        let fleche = document.getElementById("fleche");
        menuderoulant.style.opacity = "0";
        menuderoulant.style.pointerEvents = "none";
        fleche.style.transform = "scaleY(1)";
    }
}