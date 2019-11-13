import React, { useState } from 'react';

import './login.css';
import logo from '../assets/logo.svg';
import api from '../services/api';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();

        const response = await api.post('/devs', {
            username,  //@username guarda o parametro do json da api na const 
        });
        const { _id } = response.data;
        history.push(`/home/${_id}`);
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