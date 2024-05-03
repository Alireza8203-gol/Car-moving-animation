const surface = document.querySelector(".surface");
const carDiv = document.querySelector(".car");
const carImg = document.querySelector("img");
let lightsOn;

let carsLights = () => {
  if (lightsOn) {
    localStorage.setItem('lightsOn', "false")
    lightsOn = false;
    carImg.setAttribute('src', "images/Img_05.png");
  } else {
    localStorage.setItem('lightsOn', "true")
    lightsOn = true;
    carImg.setAttribute('src', "images/Img_06.png");
  }
}

window.addEventListener("load", () => {
  lightsOn = localStorage.getItem("lightsOn");
  carsLights()
});

window.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    surface.classList.toggle("moveRight");
    carDiv.classList.toggle("suspension");
  } else if (e.key === "l") {
    carsLights()
  }
});