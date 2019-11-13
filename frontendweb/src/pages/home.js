import React, { useEffect, useState } from 'react';

import api from '../services/api';

import './home.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Home({ match }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs',{
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();
    },[match.params.id]);
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