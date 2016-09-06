import React from 'react';

export default class GuessedLetters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="guessedLetters" > Letters Guessed: {
        this.props.guessedLetters.map(letter =>
          <span className="guessedLetter" > { letter }</span>
        )}
      </div>
    );
  }
}
