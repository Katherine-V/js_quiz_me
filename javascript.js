//array can include question and answer options
//click start and timer begins
//question appears
//click answer && correct && new question || incorrect and lose 15 seconds time
//no new questions || time runs out = game over
//option to save initials and score


document.getElementById("ques1").innerHTML="click!";
//.addEventListener(click, function())

var questions=[ title, choices, answer]
var quiz-questions=[//array of questions or at least numbers]

var currentQuestion
for (var i=0; i<5; i++)
    console.log(quiz-questions[i])


var highscores= JSON.parse(window.localStorage).getitem("highscores")


  <script>
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: "Jupiter"
      },
      // Add more questions as needed
    ];

    let currentQuestionIndex = 0;
    let timer = 60;

    function startQuiz() {
      displayQuestion();
      setInterval(updateTimer, 1000);
    }

    function displayQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      document.getElementById('question-container').innerHTML = currentQuestion.question;
      document.getElementById('options-container').innerHTML = currentQuestion.options.map(option =>
        `<input type="radio" name="answer" value="${option}"> ${option}<br>`
      ).join('');
    }

    function updateTimer() {
      timer--;
      document.getElementById('time').textContent = timer;
      if (timer === 0) {
        alert("Time's up! Quiz Over.");
        // Add code for handling end of quiz
      }
    }

    function nextQuestion() {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');

      if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
          alert("Correct!");
        } else {
          alert("Incorrect!");
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          alert("Quiz Over!");
          // Add code for handling end of quiz
        }
      } else {
        alert("Please select an answer!");
      }
    }

    startQuiz();
  </script>
