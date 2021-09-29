const quizForm = document.querySelector("#quiz-form");
const scoreOutput = document.querySelector("#score-output");

const answers = [
  "90",
  "YES",
  "NO",
  "YES",
  "isosceles",
  "30",
  "equilateral",
  "5",
  "45",
  "no",
];

function calculateScore(event) {
  event.preventDefault();
  console.log(event);
  let score = 0;
  let index = 0;
  const data = new FormData(quizForm);
  // data.values() and data.entries() is an iterator.
  for (let value of data.values()) {
    console.log(value);
    if (answers[index] == value) {
      score += 1;
      console.log(score);
    }
    index += 1;
  }
  console.log(score);
  scoreOutput.innerText = score;
}
quizForm.addEventListener("submit", calculateScore);
// As we want to use submit btn inside form, we add the event listener to form itself and not the button.
