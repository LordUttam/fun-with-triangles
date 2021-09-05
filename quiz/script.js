const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-quiz");
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

function calculateScore() {
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
submitBtn.addEventListener("click", calculateScore);
