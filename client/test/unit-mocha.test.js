import {greetingUser} from "../src/components/Home";

const assert = require('chai').assert;

describe('Unit tests', () => {
    it('Welcome without user', () => {
        const user = {login: null};
        assert.equal(greetingUser(user)[0], "Hello, Anonimus!");
        assert.equal(greetingUser(user)[2], "You can register or log in!");
    });

    it('Welcome with user', () => {
        const user = {
            login: "TestLogin"
        };
        assert.equal(greetingUser(user), "Hello, TestLogin!");
    });
});