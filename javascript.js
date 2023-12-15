//click start and timer begins
//question appears
//click answer && correct && new question || incorrect and lose 15 seconds time
//no new questions || time runs out = game over
//option to save initials and score


var questions=[ title, choices, answer]
var quiz-questions=[//array of questions or at least numbers]

var currentQuestion
for (var i=0; i<5; i++)
    console.log(quiz-questions[i])


var highscores= JSON.parse(window.localStorage).getitem("highscores")


document.getElementById("ques1").innerHTML="click!";
//.addEventListener(click, function())

var questions = [
      {
        question: "Arrays in JavaScript are defined by which of the following statements?",

        options: ["A) It is an ordered list of values", "B) It is an ordered list of objects", "C) It is an ordered list of strings", 
                  "D) It is an ordered list of functions"],
        correctAnswer: "A"
      },
      {
        question: "Which of the following objects is the main entry point to all client-side JavaScript features and APIs?",
            
        options: ["A) Position", "B) Window", "C) Standard", "D) Location"],

        correctAnswer: "B"  
      },
      {
        question: "What is the basic difference between JavaScript and Java?",
          
        options: "A) Functions are considered as fields", "B) Functions are values, and there is no hard distinction between methods and fields",
"C) Variables are specific", "D) There is no difference"
     
        correctAnswer: "B"
      }
      {
        question: "Which of the following is not an error in JavaScript?"
        
        options: "A) Missing of Bracket", "B) Division by zero", "C) Syntax error", "D) Missing of semicolons"
        
        correctAnswer: "B"
      }
      {
        question: "Which of the following is the ultimate element selection method?"
        
        options: ["A) querySelectorAll()","B) querySelector(), "C) queryAll()", "D) query()"     
        
        correctAnswer: "A"
      }

     ];

document.getElementById("ques1").innerHTML="click!";
//.addEventListener(click, function())

    let currentQuestionIndex = 0;
    let timer = 75;

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
