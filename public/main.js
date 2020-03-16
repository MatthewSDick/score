const main = () => {
  console.log('Hello, World')
}

// Assign click events to the update buttons to update the corresponding values on the page.
// The score buttons should adjust the current score by a "hard-coded" value.
const changeTeam1Score = () => {
  const newScore = document.querySelector('.team-1-input').value
  console.log(newScore)
  document.querySelector('.team-1-score').textContent = newScore
}

const changeTeam2Score = () => {
  const newScore = document.querySelector('.team-2-input').value
  console.log(newScore)
  document.querySelector('.team-2-score').textContent = newScore
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', changeTeam1Score)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', changeTeam2Score)
