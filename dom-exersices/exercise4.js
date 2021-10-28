let bold = document.getElementById("font_bold");
let text = document.getElementById("text");
let italic = document.getElementById("font_italic");
let line = document.getElementById("font_underline");
let font_size = document.getElementById("font_size");
let font_family = document.getElementById("font_family");
let i = 1;
bold.onclick = function () {
  if (bold.checked == true) {
    text.style.fontWeight = "bold";
  } else if (bold.checked == false) {
    text.style.fontWeight = "";
  }
};
italic.onclick = function () {
  if (italic.checked == true) {
    text.style.fontFamily = "italic";
  } else if (italic.checked == false) {
    text.style.fontFamily = "";
  }
};
line.onclick = function () {
  if (line.checked == true) {
    text.style.textDecoration = "underline";
  } else if (line.checked == false) {
    text.style.textDecoration = "";
  }
};

font_size.addEventListener("click", function () {
  text.style.fontSize = font_size.value;
});
font_family.addEventListener("click", function () {
  text.style.fontFamily = font_family.value;
});
// line.addEventListener("click", function () {
//   if (i == 1) {
//     text.style.textDecoration = "underline";
//     i++;
//   } else if (i == 2) {
//     text.style.textDecoration = "";
//     i = 1;
//   }
// });
