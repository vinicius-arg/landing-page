// Efeito carousel

const cardSt = document.getElementsByClassName("internal-structure")[0];
const cardNd = document.getElementsByClassName("internal-structure")[1];
const cardRd = document.getElementsByClassName("internal-structure")[2];
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

let xPercent = 0;

back.addEventListener("click", function () {
    if (xPercent == 0) {
        xPercent = -200
    } else if (xPercent == -100) {
        xPercent+=100;
    } else if (xPercent == -200) {
        xPercent+=100;
    }
    cardSt.style.transform = "translateX(" + n + "%)";
    cardNd.style.transform = "translateX(" + n + "%)";
    cardRd.style.transform = "translateX(" + n + "%)";
});

forward.addEventListener("click", function () {
    if (xPercent == 0) {
        xPercent-=100;
    } else if (xPercent == -100) {
        xPercent-=100;
    } else if (xPercent == -200) {
        xPercent = 0;
    }
    cardSt.style.transform = "translateX(" + xPercent + "%)";
    cardNd.style.transform = "translateX(" + xPercent + "%)";
    cardRd.style.transform = "translateX(" + xPercent + "%)";
});

// Loading

const loading = document.getElementsByClassName("loading-overlay")[0];
onload = () => {
    loading.style.display = "none";
    document.body.style.overflow = "auto";
}

// Menu display

const menu = document.getElementsByClassName("menu")[0];
const nav = document.getElementsByTagName("nav")[0];

nav.style.display = "none";

menu.addEventListener("click", () => {
    if (nav.style.display == "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
})