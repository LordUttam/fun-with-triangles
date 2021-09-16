const anglesForm = document.querySelector("#angle-check");
const submitBtn = document.querySelector("#submit-angles");
const anglesOutput = document.querySelector("#angles-output");

const angle1 = document.querySelector("#angle-1");
const angle2 = document.querySelector("#angle-2");
const angle3 = document.querySelector("#angle-3");

function isTriangle() {
  let angle1 = Number(angle1.value);
  let angle2 = Number(angle2.value);
  let angle3 = Number(angle3.value);

  if (angle1 + angle2 + angle3 === 180) {
    anglesOutput.innerText = "Yes! It's a triangle!";
  } else {
    anglesOutput.innerText = "That can't be a triangle!";
  }
}

function clickHandler() {
  if (angle1.value != "" && angle2.value != "" && angle3.value != "") {
    if (angle1.value > 0 && angle2.value > 0 && angle3.value > 0) {
      isTriangle();
    } else {
      anglesOutput.innerText = "Inputs must be positive numbers. Try again.";
    }
  } else {
    anglesOutput.innerText =
      "Can't calculate with blank inputs, fill them and try again";
  }
}

submitBtn.addEventListener("click", clickHandler);
