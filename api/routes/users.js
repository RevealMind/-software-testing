const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');

const users = new Map();
users.set('admin', hash('admin'));

router.post('/login', bodyParser.json(), (req, res) => {
    const {login, password} = req.body;

    if (users.has(login) && users.get(login) === hash(password)) {
        res.status(200).json({login: login});
    } else {
        res.status(400).json({error: 'Incorrect login or password'});
    }
});

router.post('/register', bodyParser.json(), (req, res) => {
    const {login, password} = req.body;

    if (users.has(login)) {
        res.status(401).json({error: 'User with this login already exists'});
    } else {
        users.set(login, hash(password));
        res.json({login: login});
    }
});

function hash(string) {
    let hashSum = 5381;
    for (let i = 0; i < string.length; i++) {
        hashSum = (hashSum << 5) + hashSum + string.charCodeAt(i);
    }
    return hashSum;
}

module.exports = router;
