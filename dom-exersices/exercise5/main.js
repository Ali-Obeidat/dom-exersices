let Submit = document.getElementById("submitBtn");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let pw1_check = document.getElementById("pw1_check");
let pw2_check = document.getElementById("pw2_check");

Submit.style.display = "none";
password1.addEventListener("keyup", function () {
  if (password1.value.length == 0) {
    Submit.style.display = "none";
  } else if (password1.value.length <= 5) {
    pw1_check.textContent = "Too short";
    Submit.style.display = "none";
  } else {
    pw1_check.textContent = "";
  }
});
password2.addEventListener("keyup", function () {
  if (password2.value !== password1.value) {
    pw2_check.textContent = "the two password don't match";
    Submit.style.display = "none";
  } else if (password2.value == password1.value) {
    pw2_check.textContent = "";
    Submit.style.display = "";
  }
});
