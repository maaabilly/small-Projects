// quizData object storing questions, choices, and answer data 
const quizData = [
    {
        question: 'what is 1 + 1 = ',
        a: '1',
        b: '11',
        c: '2',
        d: '0',
        correct: 'c'
    }, {
        question: '5 x 5 = ',
        a: '10',
        b: '15',
        c: '25',
        d: '55',
        correct: 'c'
    }, {
        question: '5 + 2 = ',
        a: '7',
        b: '12',
        c: '25',
        d: '52',
        correct: 'a'
    }, {
        question: '5 x 2 = ',
        a: '7',
        b: '10',
        c: '52',
        d: '55',
        correct: 'b'
    }, {
        question: '12345678 + 87654321 = ',
        a: '12345678',
        b: '87654321',
        c: '19191919',
        d: '99999999',
        correct: 'd'
    }, 
];

// get id's and classes from html to for DOM manipulation 
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// setting currentQuiz and score to 0
let currentQuiz = 0;
let score = 0;

// call loadQuiz function
loadQuiz();

// innerHTML to display question and choices 
function loadQuiz() {
    // clear the selected choice every time quiz is loaded
    deselectAnswers();

    // set currentQuizData to quizData[0]
        // first question and choice in quizData Object
    const currentQuizData = quizData[currentQuiz];
    
    // DOM Manipulation, change text to display question and choices
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

// return selected choice into answer
function getSelected() {

    // assign answer to undefined
    let answer = undefined;

    // loop each answerEls then return answer when a selection is made
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            return answer = answerEl.id;
        } 
    });

    return answer;
}

// clear selected fields every time new question is displayed
function deselectAnswers() {
    // each 
    answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
    })
}

// event listener for when submit button is clicked
submitBtn.addEventListener('click', () => {
    // reassign getSelected() to answer
    const answer  = getSelected();

    if(answer) {
        // check if answer matches quizData[].correct value
        if(answer == quizData[currentQuiz].correct) {
            score++;
        }

        // increment currentQuiz to move onto next question
        currentQuiz++;

        // check if there are any more constructors in the quizData object
        if (currentQuiz < quizData.length) {
            // if yes then load next question
            loadQuiz();
        } else {
            // if NO then load HTML to display score and button to restart quiz
            quiz.innerHTML = `
            <h2> 
            You answered correctly ${score} / ${quizData.length} questions!
            </h2>

            <button onClick="location.reload()">
            Reload
            </button>`
        }
    } else {
        alert(`Please select one of the multiple choices below`)
    }

})