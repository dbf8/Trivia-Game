const mainQuestion = document.querySelector('.game .question')
const answerA = document.querySelector('.a')
const answerB = document.querySelector('.b')
const answerC = document.querySelector('.c')
const answerD = document.querySelector('.d')
let i = 0
// Nice job having your global variables at the top

var questions = [
  {
    question: `In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?`,
    choices: ['Ping! Ping!', 'Beep! Beep!', 'Aooga! Aooga!', 'Vroom! Vroom!'],
    answer: 'Beep! Beep!'
  },
  {
    question: 'Where should choking victims place their hands to indicate to others that they need help?',
    choices: ['Over the eyes', 'On the knees', 'Around the throat', 'On the hips'],
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
// Would be nice to have these questions in a separate js file so they dont' clutter up the main functionality.

// gamestart - I like the comments you added to help make the code more readable. Could make them even more clear, `This starts game initially` or something
document.addEventListener('keypress', quizStart, {once: true})
// in case no keypress exists
document.addEventListener('click', quizStart, {once: true})
//startquiz
function quizStart () {
  mainQuestion.innerHTML = questions[i].question
  shuffle(questions[i].choices)
  answerA.innerHTML = questions[i].choices[0]
  answerB.innerHTML = questions[i].choices[1]
  answerC.innerHTML = questions[i].choices[2]
  answerD.innerHTML = questions[i].choices[3]
}

answerA.addEventListener('click', clickyClicky)
answerB.addEventListener('click', clickyClicky)
answerC.addEventListener('click', clickyClicky)
answerD.addEventListener('click', clickyClicky)
//checkonclick
function clickyClicky () { // I don't know about this function name... but to each their own
  var finalAnswer = confirm('Final Answer?')
  if (finalAnswer === true) {
    if ((this.innerHTML === questions[i].answer) && (i >= (questions.length - 1))) {
      i++
      scoreboard ()
      alert('YOU WIN $1000 FOR AN IPHONE X, GO TO IT')
      window.location.href = 'https://www.apple.com/iphone-x/'
    } else if (this.innerHTML === questions[i].answer) {
      i++
      scoreboard ()
      alert('Correct, onward toward the iPhone')
      quizStart()
    } else {
      alert('YOU LOSE ALL THE MONEY (just kidding, try again)')
    }
  } else {
    alert('ok, take your time')
  }
}

// Used the https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php as a guide
function shuffle (randomized) {
  let ctr = randomized.length
  let temp
  let index
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = randomized[ctr]
    randomized[ctr] = randomized[index]
    randomized[index] = temp
  }
  return randomized
}

// scoreboard highlighting
function scoreboard () {
  const ten = document.querySelector('.ten') 
  const twenty = document.querySelector('.twenty')
  const thirty = document.querySelector('.thirty')
  const fifty = document.querySelector('.fifty')
  const one = document.querySelector('.one')
  const two = document.querySelector('.two')
  const four = document.querySelector('.four')
  const eight = document.querySelector('.eight')
  const sixteen = document.querySelector('.sixteen')
  const thirtytwo = document.querySelector('.thirtytwo')
  const sixtyfour = document.querySelector('.sixtyfour')
  const onetwentyfive = document.querySelector('.onetwentyfive')
  const twofifty = document.querySelector('.twofifty')
  const fivehundred = document.querySelector('.fivehundred')
  const onethousand = document.querySelector('.onethousand')
  // You may want to put all these constants at the top of your file so you don't have to keep reassigning them every time scoreboard() is called
  if (i > 14) {
    onethousand.classList.add('highlight')
  }
  else if (i > 13) {
    fivehundred.classList.add('highlight')
  }
  else if (i > 12) {
    twofifty.classList.add('highlight')
  }
  else if (i > 11) {
    onetwentyfive.classList.add('highlight')
  }
  else if (i > 10) {
    sixtyfour.classList.add('highlight')
  }
  else if (i > 9) {
    thirtytwo.classList.add('highlight')
  }
  else if (i > 8) {
    sixteen.classList.add('highlight')
  }
  else if (i > 7) {
    eight.classList.add('highlight')
  }
  else if (i > 6) {
    four.classList.add('highlight')
  }
  else if (i > 5) {
    two.classList.add('highlight')
  }
  else if (i > 4) {
    one.classList.add('highlight')
  }
  else if (i > 3) {
    fifty.classList.add('highlight')
  }
  else if (i > 2) {
    thirty.classList.add('highlight')
  }
  else if (i > 1) {
    twenty.classList.add('highlight')
  }
  else if (i > 0) {
    ten.classList.add('highlight')
  } // It's arguable that a switch statement might be better suited for this, but the way you did it is fine too.  
}

// Good job overall here. Your functions are well defined and for the most part do one job. 
// You made good use of the functional programming paradigm and control flow. 
// Your app works great, no major bugs with the functionality. 
// Gave a few suggestions above about how you could clean it up even more.