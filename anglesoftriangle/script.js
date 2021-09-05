const anglesForm = document.querySelector("#angle-check");
const submitBtn = document.querySelector("#submit-angles");
const anglesOutput = document.querySelector("#angles-output");

function isTriangle() {
  let angle1 = parseInt(document.querySelector("#angle-1").value);
  let angle2 = parseInt(document.querySelector("#angle-2").value);
  let angle3 = parseInt(document.querySelector("#angle-3").value);

  if (angle1 + angle2 + angle3 === 180) {
    anglesOutput.innerText = "Yes! It's a triangle!";
  } else {
    anglesOutput.innerText = "That can't be a triangle!";
  }
}

submitBtn.addEventListener("click", isTriangle);
