
let divs = document.getElementsByClassName("head");
let icone = document.querySelectorAll("i");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    let parage = document.getElementsByClassName("content");
    parage[i].classList.toggle("hide");
    icone[i].classList.toggle("active");
  });
}