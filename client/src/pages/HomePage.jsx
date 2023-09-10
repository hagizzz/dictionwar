
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import ReactCurvedText from 'react-curved-text';

const radius = 400

function HomePage() {

    return (
        <div id='container'>
            <div id="motion-demo"></div>
            <ReactCurvedText
                width={1200}
                height={450}
                cx={740}
                cy={600}
                rx={radius}
                ry={radius}
                startOffset={230}
                reversed={true}
                text='DICTION WAR'

                textProps={{ "style": { 
                    "fontSize": 100,
                    "fontFamily": 'Luckiest Guy, cursive',
                    "textShadow": '-5px -5px #4d84c8, -5px -5px #4d84c8, -4px -4px #4d84c8, -3px -3px #4d84c8, -2px -2px #4d84c8,-1px -1px #4d84c8, 1px 1px #4d84c8, 2px 2px #4d84c8,3px 3px #4d84c8, 4px 4px #4d84c8, 5px 5px #4d84c8,6px 6px #4d84c8, 7px 7px #4d84c8, 8px 8px #4d84c8,9px 9px #4d84c8, 10px 10px #4d84c8, 11px 11px #4d84c8,12px 12px #4d84c8, 13px 13px #4d84c8, 14px 14px #4d84c8,15px 15px #4d84c8, 16px 16px #4d84c8, 17px 17px #4d84c8,18px 18px #4d84c8, 19px 19px #4d84c8, 20px 20px #4d84c8,21px 21px #4d84c8, 22px 22px #4d84c8, 23px 23px #4d84c8,24px 24px #4d84c8, 25px 25px #4d84c8, 26px 26px #4d84c8,27px 27px #4d84c8, 25px 25px #4d84c8, 28px 28px #4d84c8,29px 29px #4d84c8, 30px 30px #4d84c8, 31px 31px #4d84c8,32px 32px #4d84c8, 33px 33px #4d84c8, 34px 34px #4d84c8,35px 35px #4d84c8, 36px 36px #4d84c8, 37px 37px #4d84c8,38px 38px #4d84c8, 39px 39px #4d84c8, 40px 40px',
                } }}

                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
            />


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