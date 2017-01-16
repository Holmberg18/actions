


//Instantiate Actions
export const GUESS_NUMBER = 'GUESS_NUMBER';//Create a function and a variable, function we use in the component. In the reducer, we use the constant, the variable. Instead of checking the type with a string, we check the type with a variable. 

export const guessNumber(number) = {
    type: GUESS_NUMBER,
    number: number
};


export const NEW_GAME = 'NEW_GAME';
export const newGame = {
    type: NEW_GAME
};

export const guessAction = guessNumber(guess);
export const newGameAction = newGame();
      
      
//Actions required: 
//1. Guess a Number.
//2. Generate a new game.
//3. Submit Guess
//4. You are Cold
//5. You are very Cold!
//6. You are warm.
//7. You are hot.
//8. You are on fire!
//9. You win!