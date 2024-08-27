function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp.value);
  if (temp.value > 40) {
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "blue";
    console.log("it is burning hot");
  } else if (temp.value < 40 && temp.value >= 30) {
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "red";
    console.log("it is sunny");
  } else if (temp.value < 30 && temp.value >= 15) {
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "grey";
    console.log("it is okay weather");
  } else {
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "aqua";
    console.log("it is freezing");
  }
}
