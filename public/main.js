const main = () => {
  console.log('Hello, World')
}

const changeTeam1Name = () => {
  const newName = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = newName
}

const changeTeam2Name = () => {
  const newName = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = newName
}

const team1AddPoint = () => {
  const currScore = document.querySelector('.team-1-score').textContent
  console.log(currScore)
  const newScore = parseInt(currScore) + 1
  console.log(newScore)
  document.querySelector('.team-1-score').textContent = newScore

  if (newScore > 20) {
    winner(1)
  }
}

const team2AddPoint = () => {
  const currScore = document.querySelector('.team-2-score').textContent
  console.log(currScore)
  const newScore = parseInt(currScore) + 1
  console.log(newScore)
  document.querySelector('.team-2-score').textContent = newScore

  if (newScore > 20) {
    winner(2)
  }
}

const team1SubtractPoint = () => {
  const currScore = document.querySelector('.team-1-score').textContent
  console.log(currScore)
  const newScore = parseInt(currScore) - 1
  if (newScore < 0) {
    const zeroScore = 0
    document.querySelector('.team-1-score').textContent = zeroScore
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const team2SubtractPoint = team => {
  const currScore = document.querySelector('.team-2-score').textContent
  console.log(currScore)
  const newScore = parseInt(currScore) - 1
  if (newScore < 0) {
    const zeroScore = 0
    document.querySelector('.team-2-score').textContent = zeroScore
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

const winner = team => {
  document.querySelector('.team-1-add-1-button').disabled = true
  document.querySelector('.team-2-add-1-button').disabled = true
  document.querySelector('.team-1-subtract-1-button').disabled = true
  document.querySelector('.team-2-subtract-1-button').disabled = true
  document.querySelector('h1').textContent = 'Team ' + team + ' won the game'
}

const reset = () => {
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('h1').textContent = 'Game in progress'
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', changeTeam1Name)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', changeTeam2Name)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1AddPoint)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', team2AddPoint)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1SubtractPoint)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', team2SubtractPoint)

document.querySelector('.reset').addEventListener('click', reset)
