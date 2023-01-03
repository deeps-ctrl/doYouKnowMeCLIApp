const readline = require("readline-sync");
const userName = readline.question("What is your name ? ");
console.log(`\nHey ${userName}\n`);
console.log(`Do you know me ?\n`);

console.log("Lets test that with a game \n");
console.log("Note: We are expecting only one or two word as answer\n");

let score = 0;
const questionAnswer = function (question, answer) {
  const userAnswer = readline.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct Answer\n");
    score += 1;
  } else {
    console.log("Wrong Answer\n");
  }
};

const questions = [
  {
    question: "Where do i live ? ",
    answer: "Delhi",
  },
  {
    question: "Which is my favourite webseries ? ",
    answer: "Breaking Bad",
  },
  {
    question: "Which sports do i love the most ? ",
    answer: "Cricket",
  },
  {
    question: "Who is my favourite cricketer ? ",
    answer: "Virat Kohli",
  },
  {
    question: "What i like to eat ? ",
    answer: "Pizza",
  },
];

for (let i = 0; i < questions.length; i += 1) {
  questionAnswer(questions[i].question, questions[i].answer);
}

console.log(
  `Your final score is ${score}. ${
    score > 3
      ? "You know me quite well"
      : "I guess we need to spend more time to know each other"
  }`
);
