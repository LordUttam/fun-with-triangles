const submitBtn = document.querySelector("#submit-sides");
const areaOutput = document.querySelector("#area-output");

function calcArea() {
  let side1 = parseInt(document.querySelector("#side-a").value);
  let side2 = parseInt(document.querySelector("#side-b").value);
  let side3 = parseInt(document.querySelector("#side-c").value);
  let s = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  areaOutput.innerText = area;
}

submitBtn.addEventListener("click", calcArea);
