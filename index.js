const colorOneButton = document.getElementById("colorOne");
const colorTwoButton = document.getElementById("colorTwo");
const colorThreeButton = document.getElementById("colorThree");

const corpo = document.querySelector("body");

colorOneButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#90ee90";
  });
colorTwoButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#87cefa";
  });
colorThreeButton.addEventListener("click", () => {
    corpo.style.backgroundColor = "#778899";
  });