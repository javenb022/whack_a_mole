const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const gameView = document.querySelector('.game-view')
const titleScreen = document.querySelector('.title-screen')

let result = 0
let currentTime = timeLeft.textContent
let timerId
let moleTimer = null

function startGame() {
  titleScreen.classList.add('hidden')
  gameView.classList.remove('hidden')
  randomSquare()
  // moveMole()
  moleTimer = setInterval(randomSquare, 900)
  timerId = setInterval(countDown, 1000)
}

function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition to use later
  hitPosition = randomPosition.id
}


square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      randomSquare()
      moleTimer = null
    }
  })
})

// function moveMole() {
//   timerId = null
//   timerId = setInterval(randomSquare, 900)
// }

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('Game Over! Your final score is ' + result)
  }
}

