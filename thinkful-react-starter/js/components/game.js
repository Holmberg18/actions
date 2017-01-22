import {guessNumber} from '../actions/index';

import React from 'react';
import {connect} from 'react-redux';


export class Game extends React.Component {
    constructor(props) {
        super(props);   
        
        this.makeGuess = this.makeGuess.bind(this);
    }
    
//    gameState(gameResult)) {
//        var state = String(gameResult);
//    }

    makeGuess(event){
       event.preventDefault();
        this.props.dispatch(guessNumber(this.inputText.value));
    }
    
  
    render() {
        console.log(this.props.feedback);
        let form;
        if (this.props.win == false){
            form = ( <form class="number-guess" onSubmit={this.makeGuess}>
                <input type="text" ref={(input) => this.inputText = input } name="number-input"/>
                <button type='submit' id="guess-button">Guess</button>                
                &nbsp;
            </form>); //JSX syntax where you can use html markup as JS objects
        }
        return (
            <div className="game">
            {form}
            <h2>{this.props.feedback}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    feedback: state.feedback,
    guesses: state.guesses
});

export default connect(mapStateToProps)(Game);
