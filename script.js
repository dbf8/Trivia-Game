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

var questions = [
  {
    question: '1 2 3 4, which number is third?',
    choices: ['1', '2', '3', '4'],
    answer: 2
  },
  {
    question: ' ',
    choices: ['1 ', '2', '3', '4'],
    answer: 0
  }
]

mainQuestion.addEventListener('click', () => {
    mainQuestion.innerHTML = 'this test worked'
})

// create event listener for each answer
// create submit button
//