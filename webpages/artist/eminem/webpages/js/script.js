//NAVIGATION-SCRIPT//
{
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav-hidden");
    }
    
     else {
        nav.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;
});
}




// -----SONG PLAYER -----
// Player 0
var mySong = document.getElementById("mySong_0");
var icon = document.getElementById("icon_0");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "../images/pause.png";
    }

    else {
        mySong.pause();
        icon.src = "../images/play.png";
    }
}

// Player 1
var mySong_1 = document.getElementById("mySong_1");
var icon_1 = document.getElementById("icon_1");

icon_1.onclick = function () {
    if (mySong_1.paused) {
        mySong_1.play();
        icon_1.src = "../images/pause.png";
    }

    else {
        mySong_1.pause();
        icon_1.src = "../images/play.png";
    }
}

// Player 2
var mySong_2 = document.getElementById("mySong_2");
var icon_2 = document.getElementById("icon_2");

icon_2.onclick = function () {
    if (mySong_2.paused) {
        mySong_2.play();
        icon_2.src = "../images/pause.png";
    }

    else {
        mySong_2.pause();
        icon_2.src = "../images/play.png";
    }
}

// Player 3
var mySong_3 = document.getElementById("mySong_3");
var icon_3 = document.getElementById("icon_3");

icon_3.onclick = function () {
    if (mySong_3.paused) {
        mySong_3.play();
        icon_3.src = "../images/pause.png";
    }

    else {
        mySong_3.pause();
        icon_3.src = "../images/play.png";
    }
}

// Player 4
var mySong_4 = document.getElementById("mySong_4");
var icon_4 = document.getElementById("icon_4");

icon_4.onclick = function () {
    if (mySong_4.paused) {
        mySong_4.play();
        icon_4.src = "../images/pause.png";
    }

    else {
        mySong_4.pause();
        icon_4.src = "../images/play.png";
    }
}

// Player 5
var mySong_5 = document.getElementById("mySong_5");
var icon_5 = document.getElementById("icon_5");

icon_5.onclick = function () {
    if (mySong_5.paused) {
        mySong_5.play();
        icon_5.src = "../images/pause.png";
    }

    else {
        mySong_5.pause();
        icon_5.src = "../images/play.png";
    }
}


