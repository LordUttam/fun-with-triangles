let sideA = document.getElementById("side-a");
let sideB = document.getElementById("side-b");

const calculateBtn = document.getElementById("submit-sides");
const hypotenuseOutput = document.getElementById("hypotenuse-output");

function calculateHypo() {
  sideA = Number(sideA.value);
  sideB = Number(sideB.value);

  let hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  hypotenuseOutput.innerText = hypotenuse;
}

function clickHandler() {
  if (sideA.value != "" && sideB.value != "") {
    if (sideA.value > 0 && sideB.value > 0) {
      calculateHypo();
    } else {
      hypotenuseOutput.innerText =
        "Inputs must be positive numbers. Try again.";
    }
  } else {
    hypotenuseOutput.innerText =
      "Can't calculate with blank inputs, fill them and try again";
  }
}

calculateBtn.addEventListener("click", clickHandler);
