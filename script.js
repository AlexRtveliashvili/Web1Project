const quizData = [{
    question: "რომელ ენას იყენებს ვებ ბრაუზერი?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "რას ნიშნავს CSS აბრევიატურა?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Corresponding Switch Sequence",
    d: "Counter Strike Source",
    correct: "b",
  },
  {
    question: "რას ნიშნავს HTML აბრევიატურა?",
    a: "Hypertext Markup Language",
    b: "Hypertext Making Language",
    c: "Hypertext Modding Language",
    d: "Hypertext Mastering Language",
    correct: "a",
  },
  {
    question: "რომელ წელს გაჩნდა JavaScript?",
    a: "1991",
    b: "1989",
    c: "1995",
    d: "არცერთი ჩამოთვლილი",
    correct: "c",
  },
  {
    question: "ჩამოთვლილთაგან რომელი არაა ბრაუზერი?",
    a: "RedHat",
    b: "Tor",
    c: "Chrome",
    d: "Safari",
    correct: "a",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerHTML = currentQuizData.question
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer

}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
        <h2>თქვენ უპასუხეთ ${score}/${quizData.length} შეკითხვას სწორად</h2>

        <button onClick="location.reload()">თავიდან დაწყება</button>
      `
    }
  }
})