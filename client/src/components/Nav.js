import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav(props) {
    const logoutHandler = () => {
        props.logout({login: null});
        sessionStorage.removeItem('login');
    };

    console.log('hello', props.user);
    return (
        <nav>
            <ul className="nav-links">
                <Link to='/' className='home__link'>
                    <li>Home</li>
                </Link>
                {!props.user.login &&
                <Link to='/login' className='login__link'>
                    <li>Login</li>
                </Link>}
                {props.user.login && <Link to='/' onClick={logoutHandler} className='logout__link'> <li>Logout</li> </Link>}
                {!props.user.login && <Link to='/register' className='register__link'> <li>Register</li> </Link>}
            </ul>
        </nav>
    );
}

export default Nav;
