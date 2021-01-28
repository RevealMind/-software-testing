import {greetingUser} from "../src/components/Home";
import React from "react";

describe('Unit tests', () => {
    it('greetingUser() without user', () => {
        const user = {login: null};
        expect(greetingUser(user)[0]).toBe("Hello, Anonimus!");
        expect(greetingUser(user)[2]).toBe("You can register or log in!");
    });

    it('greetingUser() with user', () => {
        const user = {
            login: "TestLogin"
        };
        expect(greetingUser(user)).toBe("Hello, TestLogin!");
    });
});