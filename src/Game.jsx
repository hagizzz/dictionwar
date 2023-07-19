
import React  from 'react';
import { Link } from 'react-router-dom';

function Game() {

    return (
        <div id="items">
            <Link to="">
                HomePage
            </Link>

            <Link to="/solo">
                Solo
            </Link>

            <Link to="/multiple">
                Multiple
            </Link>
        </div>
    )
}

export default Game;