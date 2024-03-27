import './index.css'

const NavBar = props => {
  const {stillinGame, clikedEmojiList, topScore} = props
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-head">Emoji Game</h1>
        </div>
        {stillinGame ? (
          <div className="score-container">
            <p className="score-text">Score: {clikedEmojiList.length}</p>
            <p className="score-text">Top Score: {topScore}</p>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default NavBar
