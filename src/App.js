import React from 'react';
import { getRandomInt } from './utils';
import LetterButton from './LetterButton';
import './App.css';

const WORDS = [
  'React',
  'Single-page Application',
  'ECMAScript',
  'Compilateurs',
  'Bundlers',
  'Gestionnaires de paquets',
  'CDN',
  'JSX',
  'Elements',
  'Composants',
  'props',
  'state',
  'Methodes de cycle de vie',
  'Composants controles',
  'non controles',
  'Cles',
  'Refs',
  'Evenements',
  'Reconciliation',
]

const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

class App extends React.Component {
  // state = {
  // 	wordToGuess: '',
  // 	wordToGuessMasked: '',
  // 	clickedLetters: [],
  // 	lettersHidden: '',
  // 	restartHidden: 'hidden',
  // 	won: false
  // }

  constructor(props) {
    super(props)
    this.state = {
      wordToGuess: this.randWord().toUpperCase(),
      wordToGuessMasked: '',
      clickedLetters: [],
      lettersHidden: '',
      restartHidden: 'hidden',
      won: false
    }
    console.log(this.state.wordToGuess)
  }

  componentDidMount() {
    this.setState({ wordToGuessMasked: this.maskWord(this.state.wordToGuess) })
  }

  randWord() {
    return WORDS[getRandomInt(19)]
  }

  maskWord(wordToMask) {
    return wordToMask.replace(/\w/gi, '_')
  }

  getClassForLetter(index) {
    const { clickedLetters } = this.state

    if (clickedLetters.includes(index))
      return 'letter-blur'
    return ''
  }

  getClassForLetterBlock(index) {
    const { clickedLetters } = this.state

    if (clickedLetters.includes(index))
      return 'letter-block-add'
    return ''
  }

  hideLetters() {
    this.setState({ lettersHidden: 'hidden' })
  }

  showRestart() {
    this.setState({ restartHidden: '' })
  }

  checkWordCompleted() {
    const { wordToGuess, wordToGuessMasked } = this.state

    if (wordToGuessMasked === wordToGuess) {
      this.setState({ won: true })
      this.hideLetters()
      this.showRestart()
    }
  }

  handleRestart() {
    this.setState({ lettersHidden: '', restartHidden: 'hidden' },
      () => {
        this.resetAll()
      })
  }

  resetAll() {
    this.setState({ wordToGuess: this.randWord().toUpperCase(), clickedLetters: [], won: false },
      () => {
        this.setState({ wordToGuessMasked: this.maskWord(this.state.wordToGuess) })
      })
  }

  handleLetterOnClick(index) {
    const { wordToGuess, wordToGuessMasked, clickedLetters } = this.state
    let tmpMasked = wordToGuessMasked.slice()

    if (!clickedLetters.includes(index)) {
      if (wordToGuess.includes(ALPHABET[index])) {
        for (var i = 0; i < wordToGuess.length; i++) {
          if (wordToGuess[i] === ALPHABET[index]) {
            tmpMasked = tmpMasked.replaceAt(i, ALPHABET[index])
            this.setState({
              wordToGuessMasked: tmpMasked, clickedLetters: clickedLetters.concat(index)
            }, () => {
              this.checkWordCompleted()
            })
          }
        }
      }
    }
  }

  render() {
    const { lettersHidden, restartHidden } = this.state
    return (
      <div>
        <div className="center-middle">
          <h1>LE PENDU EN REACT JS</h1>
          <h2>Devinez le mot qui se cache derrière les tirets à l'aide des lettres.</h2>
          <div className={`restart ${restartHidden}`}>
            <span
              aria-label="congratulation"
              role="img"
            ><p>Bien joué ! 🎉</p></span>
            <iframe src="https://giphy.com/embed/g9582DNuQppxC" title="Congratulation" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC">via GIPHY</a></p>
          </div>
          <span className="masked-text"> {this.state.wordToGuessMasked} </span>
          <div className="letters-block">
            {ALPHABET.map((letter, index) => (
              <LetterButton
                letter={letter}
                letterBlur={this.getClassForLetter(index)}
                letterBlock={this.getClassForLetterBlock(index)}
                lettersHidden={lettersHidden}
                key={index}
                index={index}
                onClick={this.handleLetterOnClick.bind(this)}>
              </LetterButton>
            )
            )
            }
            <div className={`letter-block restart ${restartHidden}`}>
              <span
                aria-label="restart"
                role="img"
                className={`letters`}
                onClick={this.handleRestart.bind(this)}
              >🔄</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;