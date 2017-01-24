import {guessNumber} from '../actions/index';
//import {newGame} from '../actions/index';

import React from 'react';
import {connect} from 'react-redux';

export class GuessForm extends React.Component { 
    constructor(props) {
        super(props);   
        
        this.makeGuess = this.makeGuess.bind(this);
//        this.showGuesses = this
//      
    }
//    
//    showGuesses(event){
//       event.preventDefault();
//        this.props.dispatch(guessList());
//    }
//    
//    
    makeGuess(event){
       event.preventDefault();
        this.props.dispatch(guessNumber(this.inputText.value));
    }
    


    render() {
        
        let form;
              form = ( <form class="number-guess" onSubmit={this.makeGuess}>
                <input type="text" ref={(input) => this.inputText = input } name="number-input"/>
                <button type='submit' id="guess-button">Guess</button>
                
                &nbsp;
            </form>); //JSX syntax where you can use html markup as JS objects
            
            return (
                <div className="guessForm">
                    {form}
                </div>
    
            );
        }
}


export default connect()(GuessForm); //leave first argument empty