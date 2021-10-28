document.getElementById("mydiv").onmouseover = function () {
  mouseOver();
};
document.getElementById("mydiv").onmouseout = function () {
  mouseOut();
};
function mouseOver() {
  document.getElementById("mydiv").textContent = "Can I help you?";
}

function mouseOut() {
  document.getElementById("mydiv").textContent = "Hello world!";
}
