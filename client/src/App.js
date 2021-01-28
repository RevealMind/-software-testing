import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
    const [user, setUser] = useState({login: sessionStorage.getItem('login')});

    return (
        <Router>
            <div className="App">
                <Nav user={user} logout={setUser}/>
                <Switch>
                    <Route path="/" exact id="home" component={() => <Home user={user}/>}/>
                    {!user.login &&
                    <Route path="/login" id="login" component={() => <Login login={setUser}/>}/>}
                    {!user.login &&
                    <Route path="/register" id="register" component={() => <Register login={setUser}/>}/>}
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
