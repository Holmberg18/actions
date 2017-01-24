// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {guessGameReducer} from './reducers/index';

export default createStore(reducers.guessGameReducer, applyMiddleware(thunk));

// export default createStore(reducers.repositoryReducer, applyMiddleware(thunk));