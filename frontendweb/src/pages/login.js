import React, { useState } from 'react';

import './login.css';
import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log(username);
        history.push('/home');
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev logo"/>
                <input 
                placeholder="Type your username from GitHub"
                value={username}
                onChange= {evt => setUsername(evt.target.value)}
                />
                <button type="submit">Join</button>
            </form>
        </div>
    );
}