let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");

register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});

let register_btn_2 = document.querySelector(".sign-up-btn");
let login_btn_2 = document.querySelector(".log-in-btn"); 
register_btn_2.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn_2.addEventListener("click", () => {
  form.classList.remove("change-form");
});