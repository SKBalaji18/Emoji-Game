import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, totalScore, resetGame} = props

  const playAgain = () => {
    resetGame()
  }

  return (
    <div className="result-container">
      <div>
        <h1 className="result">{isWon ? 'You Won' : 'You Lose'}</h1>
        <div className="result-detail-container">
          <p className="result-desc">{isWon ? 'Best Score' : 'Score'}</p>
          <p className="result-score">
            {score}/{totalScore}
          </p>
          <button type="button" onClick={playAgain} className="result-btn">
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img
          className="result-img"
          src={
            isWon
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
