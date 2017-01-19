import {guessGameReducer(49)} as gameResult from '../reducers/index';

import React from 'react';
import {connect} from 'react-redux';


export default class Game extends React.Component {
    constructor(props) {
        super(props);   
    }
    
    gameState(gameResult)) {
        var state = String(gameResult);
    }

  
    render() {
        return (
            <div className="game">
                {state}
                &nbsp;
            </div>
        );
    }
}

export default connect()(Repository);