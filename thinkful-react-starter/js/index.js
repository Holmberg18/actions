//
//
//import * as actions from './actions/index';
//import store from './store';
//
//store.dispatch(actions.newGame());
//store.dispatch(actions.guessNumber(10));
//console.log(store.getState());
//
////node index.js test run


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repository-list';
import Game from './components/game';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    <Game />
//        <Provider store={store}>
//            <RepositoryList />
       // </Provider>,
        document.getElementById('app')
    )
);