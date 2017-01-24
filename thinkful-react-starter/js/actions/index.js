

import 'isomorphic-fetch';

//Instantiate Actions
export const GUESS_NUMBER = 'GUESS_NUMBER';//Create a function and a variable, function we use in the component. In the reducer, we use the constant, the variable. Instead of checking the type with a string, we check the type with a variable. 

export const guessNumber = (number) => ({ //=>make it as a function
    type: GUESS_NUMBER,
    number: number
});


export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({ //define this as a function like guessNumber
    type: NEW_GAME
});

export const FETCH_SUCCESS = 'FETCH_SUCESS';
export const fetchSuccess = () => ({
	type: FETCH_SUCCESS
});

export const SAVE_SUCCESS = 'SAVE_SUCESS';
export const saveSuccess = () => ({
	type: SAVE_SUCCESS
});

export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchFailure = () => ({
	type: FETCH_FAILURE
});


export const SAVE_FAILURE = 'SAVE_FAILURE';
export const saveFailure = () => ({
	type: SAVE_FAILURE
});


export const fetchFewestGuesses = () => ({
	

});



export const saveFewestGuesses = () => ({
	

});


//export const guessList = () => ({
//   guesses:  
//});



//export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
//export const fetchDescriptionSuccess = (repository, description) => ({
//    type: FETCH_DESCRIPTION_SUCCESS,
//    repository,
//    description
//});
//
//export const FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
//export const fetchDescriptionError = (repository, error) => ({
//    type: FETCH_DESCRIPTION_ERROR,
//    repository,
//    error
//});


//export const fetchDescription = repository => dispatch => {
//    const url = `https://api.github.com/repos/${repository}`;
//    return fetch(url).then(response => {
//        if (!response.ok) {
//            const error = new Error(response.statusText)
//            error.response = response
//            throw error;
//        }
//        return response;
//    })
//    .then(response => response.json())
//    .then(data =>
//        dispatch(fetchDescriptionSuccess(repository, data.description))
//    )
//    .catch(error =>
//        dispatch(fetchDescriptionError(repository, error))
//    );
//};
      
      
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