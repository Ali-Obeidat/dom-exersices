let list = document.getElementById("playlist");
let songText = document.getElementById("songTextInput");
let button = document.getElementById("addButton");
let myElement = document.createElement("li");
let arrayOfTasks = [];
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();
button.addEventListener("click", function () {
  if (songText.value === "") {
    return;
  } else {
    let remove = document.createElement("button");
    let myElement = document.createElement("li");
    remove.setAttribute("id", "delete");
    remove.textContent = "X";
    myElement.innerText = songText.value;
    songText.value = "";
    myElement.appendChild(remove);
    list.appendChild(myElement);
    addDataToLocalStorageFrom(arrayOfTasks);
    remove.addEventListener("click", function () {
      myElement.remove();
    });
  }
});
function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}