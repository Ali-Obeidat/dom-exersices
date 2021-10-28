function initGrid() {
  // collect colors in an array
  var colors = [];
  var range = ["00", "33", "66", "99", "cc", "ff"];

  for (var r = 0; r < range.length; r++) {
    for (var g = 0; g < range.length; g++) {
      for (var b = 0; b < range.length; b++) {
        colors.push("#" + range[r] + range[g] + range[b]);
      }
    }
  }
  let colorsPick = document.querySelector("#colors");

  for (let i = 0; i < colors.length; i++) {
    let color = document.createElement("div");
    color.className = "choice";
    color.style.backgroundColor = colors[i];
    colorsPick.appendChild(color);
  }
  let selected = document.querySelector("#selected");
  colorsPick.addEventListener("click", (e) => {
    selected.innerText = e.target.style.backgroundColor;
    selected.style.backgroundColor = e.target.style.backgroundColor;
  });
}


initGrid();
