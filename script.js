const myQuestions = [
    {
      question: 'Which character has a twin?',
      answers: [ 
      
      {text: 'Phoebe', correct: true},
      {optionB: 'Rachel', correct: false} 
    
      ]
    },
    {
      question: 'How many times has Ross been married?',
      answers:[
          {text:'4', correct:false},
          {text:'3', correct: true}
      ]
    },
    {
      question: 'Who got their own spinoff?',
      answers: [ 
      {text: 'Chandler', correct: false}, 
      {text: 'Joey', correct: true}
     
      ]
    },
    {
      question: 'What’s Phoebe’s sister’s name?', 
      answers: [
      {text: 'Ariel', correct: false},
      {text: 'Ursula', correct: true} 
      
      
      ]
    }, 
    {
        question: 'What is Joey’s fake name?',
        answers: [ 
        {text: 'Mike Hanningan', correct: false}, 
        {text:  'Ken Adams', correct: true}
        
        ]
      }, 
      {
        question: 'What was the name of the millionaire Monica dated?',
        answers: [ 
        {text:  'Pete', correct: true}, 
        {text:  'John', correct: false} 
       
        ]
      }, 
      {
        question: 'Who got stuck in a pair of leather pants',
        answers:[ 
        {text: 'Joey', correct: false}, 
        {text: 'Ross', correct: true}  
        ]
      }, 
      {
        question: 'Who sang the "Friends" theme song?',
        answers: [ 
        {text: 'The Academy', correct: false},  
        {text: 'The Rembrandts', correct: true}
       
        ]
      }, 
      {
        question: 'Who hates Thanksgiving?',
        answers: [ 
        {text:  'Chandler', correct: true},
        {text:  'Ross', correct: false}  
       
        ]
      }, 
      {
        question: 'Who was the maid of honor at Monica’s wedding?',
        answers: [
        {text:   'Rachel', correct: true}, 
        {text:   'Phoebe', correct: false}

        ]

      }
  ]




const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

  class currentQuestion {
    constructor() {
        this.index = index
        this.question = question
    }
}



















// for (let i = 0; i < myQuestions.length; i++) {
//    let response = window.prompt(myQuestions[i].question)
//    if (response === answers) {
//        score++;
//        alert('correct!')
//    } else {
//        alert(wrong)
//    }
    
// }
  
  let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = myQuestions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  
  const correct = selectedButton.dataset.correct.true
  console.log(selectedButton.dataset);
//   setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  
}



// function checkAnswer()

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

 
  
  
