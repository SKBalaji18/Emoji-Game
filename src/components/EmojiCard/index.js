import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const clickEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" onClick={clickEmoji} className="emoji-button ">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
