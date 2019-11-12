import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Home({ match }) {
    return(
        <div className="home-container">
            <img src={logo} alt="Tindev logo"/>
            <ul>
                <li>
                <img src="https://avatars3.githubusercontent.com/u/48961500?v=4" alt=""/>
                <footer>
                    <strong>Morgana Fernandes</strong>
                    <p>a vida é uma life</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="dislike"/>
                    </button>
                    <button type="button">
                        <img src={like} alt="like"/>
                    </button>
                </div>
                </li>

                <li>
                <img src="https://avatars3.githubusercontent.com/u/48961500?v=4" alt=""/>
                <footer>
                    <strong>Morgana Fernandes</strong>
                    <p>a vida é uma life</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="dislike"/>
                    </button>
                    <button type="button">
                        <img src={like} alt="like"/>
                    </button>
                </div>
                </li>

                <li>
                <img src="https://avatars3.githubusercontent.com/u/48961500?v=4" alt=""/>
                <footer>
                    <strong>Morgana Fernandes</strong>
                    <p>a vida é uma life</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="dislike"/>
                    </button>
                    <button type="button">
                        <img src={like} alt="like"/>
                    </button>
                </div>
                </li>
                
                <li>
                <img src="https://avatars3.githubusercontent.com/u/48961500?v=4" alt=""/>
                <footer>
                    <strong>Morgana Fernandes</strong>
                    <p>a vida é uma life</p>
                </footer>
                <div className="buttons">
                    <button type="button">
                        <img src={dislike} alt="dislike"/>
                    </button>
                    <button type="button">
                        <img src={like} alt="like"/>
                    </button>
                </div>
                </li>
            </ul>
        </div>
    
    )} 