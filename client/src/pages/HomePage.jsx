
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Diction War</h1>
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
        </div>
    )
}

export default HomePage;