const questions = [
    {
        question:   "what operator is used for addition?",
        answers:  [ 
                    {text: "+", correct: true},
                    {text: "*", correct: false},
                    {text: "^", correct: false},
                    {text: "#", correct: false}
        ]
    },

    {
        question:   "what CSS property changes text color?",
        answers: [ 
                    {text: "Background color", correct: false},
                    {text: "Cursor", correct: false},
                    {text: "Color", correct: true},
                    {text: "Border", correct: false}
        ]
    },

    {
        question:   "what tag is used for the largest heading?",
        answers: [ 
                    {text: "Heading", correct: true},
                    {text: "Break" ,  correct: false},
                    {text: "Bold" ,   correct: false},
                    {text: "Paragraph", correct: false}
        ]
    },
] ;


const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 3;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 3;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
});



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
         selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});

nextButton.style.display = "block";
}
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
       answerButton.removeChild(answerButton.firstChild);
        }
}

function showScore() {
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!,
     THANKS FOR PLAYING!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

startQuiz()


