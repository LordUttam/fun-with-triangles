const submitBtn = document.querySelector("#submit-sides");
const areaOutput = document.querySelector("#area-output");

const side1 = document.querySelector("#side-a");
const side2 = document.querySelector("#side-b");
const side3 = document.querySelector("#side-c");

function calcArea() {
  let side1 = Number(side1.value);
  let side2 = Number(side2.value);
  let side3 = Number(side3.value);
  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  areaOutput.innerText = area.toFixed(2);
}

function clickHandler() {
  if (side1.value != "" && side2.value != "" && side3.value != "") {
    if (side1.value > 0 && side2.value > 0 && side3.value > 0) {
      calcArea();
    } else {
      areaOutput.innerText = "Inputs must be positive numbers. Try again.";
    }
  } else {
    areaOutput.innerText =
      "Can't calculate with blank inputs, fill them and try again";
  }
}

submitBtn.addEventListener("click", clickHandler);
