import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    clikedEmojiList: [],
    stillinGame: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({
      clikedEmojiList: [],
      stillinGame: true,
    })
  }

  finalGameResult = currentScore => {
    const {topScore} = this.state
    let newTopscore = topScore

    if (currentScore > topScore) {
      newTopscore = currentScore
    }

    this.setState({
      stillinGame: false,
      topScore: newTopscore,
    })
  }

  gameResult = () => {
    const {emojisList} = this.props
    const {clikedEmojiList} = this.state
    const isWon = emojisList.length === clikedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clikedEmojiList.length}
        totalScore={emojisList.length}
        resetGame={this.resetGame}
      />
    )
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clikedEmojiList} = this.state
    const isPresent = clikedEmojiList.includes(id)

    if (isPresent) {
      this.finalGameResult(clikedEmojiList.length)
    } else {
      if (emojisList.length - 1 === clikedEmojiList.length) {
        this.finalGameResult(emojisList.length)
      }
      this.setState(prevState => ({
        clikedEmojiList: [...prevState.clikedEmojiList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getEmojiList = () => {
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <ul>
        {shuffledEmojis.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            clickedEmoji={this.clickedEmoji}
            eachEmoji={eachItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clikedEmojiList, stillinGame, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          stillinGame={stillinGame}
          clikedEmojiList={clikedEmojiList}
          topScore={topScore}
        />
        <div className="game-box-container">
          {stillinGame ? this.getEmojiList() : this.gameResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
