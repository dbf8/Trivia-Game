// create 5 divs (1 for question, 1 for each answer... and i'll push into those)
// create the words to put in divs to put in the score tracker and to highlight the background of as you answer the correct questions....
// more psudocode goes here!

// create start button to actually start the game
//

const mainQuestion = document.querySelector('.game .question')
const answerA = document.querySelector('.a')
const answerB = document.querySelector('.b')
const answerC = document.querySelector('.c')
const answerD = document.querySelector('.d')
let i = 0
let someVar = ''

var questions = [
  {
    question: '1 2 3 4, which number is third?',
    choices: ['1', '2', '3', '4'],
    answer: 2
  },
  {
    question: 'which number is second, 1234 ',
    choices: ['1 ', '2', '3', '4'],
    answer: 1
  }
]

document.addEventListener('keypress', () => {
  mainQuestion.innerHTML = questions[i].question
  answerA.innerHTML = questions[i].choices[0]
  answerB.innerHTML = questions[i].choices[1]
  answerC.innerHTML = questions[i].choices[2]
  answerD.innerHTML = questions[i].choices[3]
}, {once: true})

function quizStart () {
  answerA.addEventListener('click', 

//   var finalAnswer = confirm('Final Answer!')
//   if (finalAnswer == true) {
//       //check the answer and go to the next question...
//         } else {
//           //go back
//         }
    })

  answerB.addEventListener('click', () => {

    })

  answerC.addEventListener('click', () => {

    })

  answerD.addEventListener('click', () => {

    })
}

function clicklyClicky
// create event listener for each answer
// create event listener
// create if statement for true or false
//
