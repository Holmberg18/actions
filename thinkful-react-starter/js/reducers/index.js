import {GUESS_NUMBER, NEW_GAME} from '../actions/index';



var randNum = function(){
  return Math.floor(Math.random() * 100);  
};

const initialGuessState = {guesses: [],
                           randomNumber: randNum(),
                           win: false,
                           feedback: '',
                           lastGuess: null
                          };


export const guessGameReducer = (state=initialGuessState, action) => {
    console.log(state);
    
    switch(action.type){
        case GUESS_NUMBER:
            var difference = Math.abs(action.number - state.randomNumber);
            let feedback = state.feedback;
            let win = state.win;
            
            if(action.number == state.randomNumber){
                feedback = "You Win!";
                win = true;
            }
            else if(difference < 10){
                feedback = "You are Hot!";
            }
             else if(difference < 20){
                feedback = "You are Warm!";
            }
             else {
                feedback = "You are Cold!";
            }
//            console.log(feedback);
           return {...state, guesses: state.guesses.concat(action.number), feedback, win, lastGuess:action.number }; //same as shortcut feedback:feedback for last param
            
        //creates new object and copies everything from state into new object that was just created. 
        case NEW_GAME:
             return {...initialGuessState, randomNumber: randNum()}; //new game with empty guesses list.
        default:
            return state; //default is to keep same state that you had before.
    }
};

