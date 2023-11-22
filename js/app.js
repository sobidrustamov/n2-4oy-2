let btnE = document.querySelector("button");
let inputE = document.querySelector("#input");
let ulE = document.querySelector("#ul");
let formE = document.querySelector("#form");
let btnT = document.querySelector("#button-2");
let inputT = document.querySelector("#input-2");
let ulT = document.querySelector("#ul-2");
let formT = document.querySelector("#form-2");

formE.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputE.value) {
    return;
  }
  let liE = document.createElement("li");
  liE.classList.add("align-self-start");
  liE.textContent = inputE.value;
  ulE.append(liE);
  inputE.value = "";
});
formT.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputE.value) {
    return;
  }
  let li = document.createElement("li");
  li.classList.add("align-self-end");
  li.textContent = inputE.value;
  ulT.append(liE);
});
