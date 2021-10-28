document.getElementById("mydiv").onclick = changeColor;
var box = document.getElementById("mydiv");
box.style.backgroundColor = "blue";
let i = 1;
function changeColor() {
  if (i == 0) {
    document.getElementById("mydiv").style.backgroundColor = "blue";
    i++;
  } else if (i == 1) {
    document.getElementById("mydiv").style.backgroundColor = "red";
    i++;
  } else if (i == 2) {
    document.getElementById("mydiv").style.backgroundColor = "green";
    i = 0;
  }

}