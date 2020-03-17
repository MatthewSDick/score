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
  updateScoreBoard()
  if (newScore > 20) {
    winner(1)
  }
}

const endPeriod = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
}

const team2AddPoint = () => {
  const currScore = document.querySelector('.team-2-score').textContent
  console.log(currScore)
  const newScore = parseInt(currScore) + 1
  console.log(newScore)
  document.querySelector('.team-2-score').textContent = newScore
  updateScoreBoard()
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
  updateScoreBoard()
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
  updateScoreBoard()
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
  document.querySelector('.home1').textContent = 0
  document.querySelector('.home2').textContent = 0
  document.querySelector('.home3').textContent = 0
  document.querySelector('.homef').textContent = 0
  document.querySelector('.visit1').textContent = 0
  document.querySelector('.visit2').textContent = 0
  document.querySelector('.visit3').textContent = 0
  document.querySelector('.visitf').textContent = 0
  document.querySelector('h1').textContent = 'Game in progress'
}

const updateScoreBoard = () => {
  const homeScore = document.querySelector('.team-1-score').textContent
  const visitorScore = document.querySelector('.team-2-score').textContent
  const currPeriod = document.querySelector('[name="period"]:checked').value
  console.log(currPeriod)

  switch (currPeriod) {
    case '1':
      console.log('case 1')
      document.querySelector('.home1').textContent = homeScore
      document.querySelector('.visit1').textContent = visitorScore
      break
    case '2':
      document.querySelector('.home2').textContent = homeScore
      document.querySelector('.visit2').textContent = visitorScore
      break
    case '3':
      document.querySelector('.home3').textContent = homeScore
      document.querySelector('.visit3').textContent = visitorScore
      break
  }

  const h1 = document.querySelector('.home1').textContent
  const h2 = document.querySelector('.home2').textContent
  const h3 = document.querySelector('.home3').textContent
  const v1 = document.querySelector('.visit1').textContent
  const v2 = document.querySelector('.visit2').textContent
  const v3 = document.querySelector('.visit3').textContent
  console.log('h1 = ' + h1)
  console.log('h2 = ' + h2)
  console.log('h3 = ' + h3)
  console.log('v1 = ' + v1)
  console.log('v2 = ' + v2)
  console.log('v3 = ' + v3)

  const hf = parseInt(h1) + parseInt(h2) + parseInt(h3)
  const vf = parseInt(v1) + parseInt(v2) + parseInt(v3)

  console.log('hf = ' + hf)
  document.querySelector('.homef').textContent = hf
  document.querySelector('.visitf').textContent = vf
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

document.querySelector('.end-period').addEventListener('click', endPeriod)

document.querySelector('.reset').addEventListener('click', reset)
