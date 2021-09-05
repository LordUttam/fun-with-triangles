let sideA = document.getElementById("side-a");
let sideB = document.getElementById("side-b");

const calculateBtn = document.getElementById("submit-sides");
const hypotenuseOutput = document.getElementById("hypotenuse-output");

function calculateHypo() {
  sideA = parseFloat(sideA.value);
  sideB = parseFloat(sideB.value);

  let hypotenuse = Math.sqrt(sideA + sideB);
  hypotenuseOutput.innerText = hypotenuse;
}

calculateBtn.addEventListener("click", calculateHypo);
