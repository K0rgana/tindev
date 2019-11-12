import React from 'react';

import './login.css';
import logo from '../assets/logo.svg';

export default function Login() {
    return(
        <div className="login-container">

            <form>
                <img src={logo} alt="Tindev logo"/>
                <input placeholder="Type your username from GitHub"/>
                <button type="submit"> Join</button>
            </form>

        </div>
        

    );
}