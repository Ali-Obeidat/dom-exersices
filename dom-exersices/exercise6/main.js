let p1_show = document.getElementById("p1_show");
let p2_show = document.getElementById("p2_show");
let p3_show = document.getElementById("p3_show");
let p1_text = document.getElementById("p1_text");
let p2_text = document.getElementById("p2_text");
let p3_text = document.getElementById("p3_text");
let p1_Hide = document.getElementById("p1_Hide");
let p2_Hide = document.getElementById("p2_Hide");
let p3_Hide = document.getElementById("p3_Hide");
p1_show.style.display = "none";
p2_show.style.display = "none";
p3_show.style.display = "none";

p1_show.addEventListener("click", function () {
  p1_text.style.display = "";
  p1_show.style.display = "none";
});
p1_Hide.addEventListener("click", function () {
  p1_text.style.display = "none";
  p1_show.style.display = "";
});
////////////////////////////////////////////////////////////////////
p2_show.addEventListener("click", function () {
  p2_text.style.display = "";
  p2_show.style.display = "none";
});
p2_Hide.addEventListener("click", function () {
  p2_text.style.display = "none";
  p2_show.style.display = "";
});
/////////////////////////////////////////////////////////////////
p3_show.addEventListener("click", function () {
  p3_text.style.display = "";
  p3_show.style.display = "none";
});
p3_Hide.addEventListener("click", function () {
  p3_text.style.display = "none";
  p3_show.style.display = "";
});
