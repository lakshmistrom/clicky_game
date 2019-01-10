import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Header";
import Characters from './components/Characters';
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    guessedStatus: "Click an image to begin! To earn points avoid clicking the same image more than once."
  }
  render() {
    return (
      <div>
        <Header 
        score={this.state.score}
        topScore={this.state.topScore}
        guessedStatus={this.state.guessedStatus} />
        <Characters
          onCorrectGuess={() => this.correctGuess()}
          onIncorrectGuess={() => this.incorrectGuess()} />
      </div>
    );
  }

  correctGuess() {
    console.log("You guessed correctly!");
    let newScore = this.state.score + 1;
    let newTopScore = this.state.topScore;
    
    if (newScore > this.state.topScore) {
      newTopScore++;
    }

let newState = {
      score: newScore,
      topScore: newTopScore,
      guessedStatus: "You guessed correctly!"
    };
this.setState(newState);
  }
  incorrectGuess() {
    console.log("You guessed incorrectly!");
    let newState = {
      score: 0,
      guessedStatus: "You guessed incorrectly!"
    }
    this.setState(newState);
  }
}

export default App;
