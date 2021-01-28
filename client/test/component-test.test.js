import Home from "../src/components/Home";
import React from "react";

const TestRenderer = require('react-test-renderer');

describe('Component test for Home page', () => {
    it('Render Home without user', () => {
        const user = {login: null};
        const testRender = TestRenderer.create(<Home user={user}/>);
        const testInstance = testRender.root;
        expect(testInstance.findByType('span').props.children[0]).toEqual('Hello, Anonimus!');
        expect(testInstance.findByType('span').props.children[2]).toEqual('You can register or log in!');
    });

    it('Render Home with user', () => {
        const user = {
            login: "TestLogin"
        };
        const testRender = TestRenderer.create(<Home user={user}/>);
        const testInstance = testRender.root;
        expect(testInstance.findByType('span').props.children).toEqual('Hello, TestLogin!');
    });
});