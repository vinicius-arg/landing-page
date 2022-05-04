// Rascunho;
let a = document.getElementsByClassName("internal-structure")[0];
let b = document.getElementsByClassName("internal-structure")[1];
let c = document.getElementsByClassName("internal-structure")[2];
const back = document.querySelector(".back");
const forward = document.querySelector(".forward");

let n = 0;

back.addEventListener("click", function () {
    if (n == 0) {
        n = -200
    } else if (n == -100) {
        n+=100;
    } else if (n == -200) {
        n+=100;
    }
    a.style.transform = "translateX(" + n + "%)";
    b.style.transform = "translateX(" + n + "%)";
    c.style.transform = "translateX(" + n + "%)";
});

forward.addEventListener("click", function () {
    if (n == 0) {
        n-=100;
    } else if (n == -100) {
        n-=100;
    } else if (n == -200) {
        n = 0;
    }
    console.log(n)
    a.style.transform = "translateX(" + n + "%)";
    b.style.transform = "translateX(" + n + "%)";
    c.style.transform = "translateX(" + n + "%)";
});

const loading = document.getElementsByClassName("loading-overlay")[0];
onload = () => {
    loading.style.display = "none";
    document.body.style.overflow = "auto";
}