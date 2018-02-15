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

var questions = [
  {question: `In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?`,
    choices: ['Ping! Ping!', 'Beep! Beep!', 'Aooga! Aooga!', 'Vroom! Vroom!'],
    answer: 'Beep! Beep!'
  },
  {
    question: 'Where should choking victims place their hands to indicate to others that they need help?',
    choices: ['Over the eyes', 'On the knees', 'Around the throat', 'On the hips?'],
    answer: 'Around the throat'
  },
  {
    question: 'Which of these dance names is used to describe a fashionable dot?',
    choices: ['Hora', 'Swing', 'Lambada', 'Polka'],
    answer: 'Polka'
  },
  {
    question: `In what 'language' would you say 'ello-hay' to greet your friends?`,
    choices: ['Bull Latin', 'Dog Latin', 'Duck Latin', 'Pig Latin'],
    answer: 'Pig Latin'
  },
  {
    question: `What part of a chicken is commonly called the 'drumstick'?`,
    choices: ['Breast', 'Wing', 'Leg', 'Gizzard'],
    answer: 'Leg'
  },
  {
    question: `What is the only position on a football team that can be 'sacked'?`,
    choices: ['Center', 'Wide Receiver', 'Tight End', 'Quarterback'],
    answer: 'Quarterback'
  },
  {
    question: 'What god of love is often depicted as a chubby winged infant with a bow and arrow?',
    choices: ['Zeus', 'Mercury', 'Cupid', 'Poseidon'],
    answer: 'Cupid'
  },
  {
    question: `What Steven Spielberg film climaxes at a place called Devil's Tower?`,
    choices: ['E.T.', 'Jurassic Park', 'Raiders of the Lost Ark', 'Close Encounters of the Third Kind'],
    answer: 'Close Encounters of the Third Kind'
  },
  {
    question: 'In what U.S. town did the famous 1881 shoot-out at the O.K. Corral take place?',
    choices: ['Laramie', 'Tombstone', 'El Paso', 'Dodge City'],
    answer: 'Tombstone'
  },
  {
    question: 'Which of the following months has no U.S. federal holiday?',
    choices: ['August', 'February', 'September', 'November'],
    answer: 'August'
  },
  {
    question: 'What mythological beast is reborn from its own ashes?',
    choices: ['Phoenix', 'Minotaur', 'Dragon', 'Superman'],
    answer: 'Phoenix'
  }, {
    question: 'Who developed the first effective vaccine against polio?',
    choices: ['Albert Sabin', 'Niels Bohr', 'Louis Pasteur', 'Jonas Salk'],
    answer: 'Jonas Salk'
  }, {
    question: 'Which of the following is not a monotheistic religion?',
    choices: ['Islam', 'Christianity', 'Hinduism', 'Judaism'],
    answer: 'Hinduism'
  }, {
    question: 'What architect designed the glass pyramid in the courtyard of the Louvre?',
    choices: ['Phillip Johnson', 'Le Corbusier', 'Frank Gehry', 'I.M. Pei'],
    answer: 'I.M. Pei'
  },
  {
    question: 'Which of these U.S. Presidents appeared on the television series "Laugh-In"?',
    choices: ['Lyndon Johnson', 'Richard Nixon', 'Jimmy Carter', 'Gerald Ford'],
    answer: 'Richard Nixon'
  }
]

//gamestart
document.addEventListener('keypress', quizStart)
//in case no keypress exists:
document.addEventListener('click', quizStart)

function quizStart () {
  mainQuestion.innerHTML = questions[i].question
  // shuffle array!!!
  shuffle(questions[i].choices)
  answerA.innerHTML = questions[i].choices[0]
  answerB.innerHTML = questions[i].choices[1]
  answerC.innerHTML = questions[i].choices[2]
  answerD.innerHTML = questions[i].choices[3]
}

  // create event listener for each answer
answerA.addEventListener('click', clickyClicky)
answerB.addEventListener('click', clickyClicky)
answerC.addEventListener('click', clickyClicky)
answerD.addEventListener('click', clickyClicky)

function clickyClicky () {
  var finalAnswer = confirm('Final Answer?')
  if (finalAnswer === true) {
    if ((this.innerHTML === questions[i].answer) && (i >= (questions.length - 1))) {
      alert('YOU WIN $1000 FOR AN IPHONE X, GO TO IT')
      window.location.href = 'https://www.apple.com/iphone-x/'
    } else if (this.innerHTML === questions[i].answer) {
      alert('correct, onward toward the iPhone')
      i++
      quizStart()
    } else {
      alert('YOU LOSE ALL THE MONEY (just kidding, try again)')
    }
  } else {
    alert('ok, take your time')
  }
}

//   else {
    // alert('ok, try again')
//   }

// var finalAnswer = confirm('Final Answer?')

// quizStart()
// clickyClicky () =>

// create event listener
// create if statement for true or false
//

// score counter.... div background nonsesnse

// if i get to it:
// randomizer for answers
// yes or no prompt
// a you lose and autorefresh
// maybe a question randomizer

// I know you guys told us to never copy and paste but I copied and pasted the below this from the internet as a test

function shuffle (randomized) {
  let ctr = randomized.length
  let temp
  let index

    // While there are elements in the array
  while (ctr > 0) {
// Pick a random index
    index = Math.floor(Math.random() * ctr)
// Decrease ctr by 1
    ctr--
// And swap the last element with it
    temp = randomized[ctr]
    randomized[ctr] = randomized[index]
    randomized[index] = temp
  }
  return randomized
}

// shuffle(questions[i].choices)

// console.log(shuffle(questions[1].question.choices))

// cutting room floor
//   if (i <= questions.length === true) {
//     window.location.href = 'http://www.apple.com/'
// }
