import React from 'react';
import "babel-polyfill";
import playwright from "playwright";

describe(`e2e tests with playwright`, () => {
    const URL = 'http://localhost:3000';
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    let browser = null;
    let page = null;

    beforeEach(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();

        if (!page) {
            throw new Error("Connection wasn't established, try again");
        }

        await page.goto(URL);
    });

    afterEach(async () => {
        await browser.close();
    });

    it(`Home page should open`, async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('Unknown page should open with text: \'Page not found!\'', async () => {
        await page.goto(URL + '/abrakadabra');
        expect(await page.textContent('.error__text')).toBe('Page not found!');
    });

    test('Wrong login', async () => {
        let login = 'wronglogin';
        let password = '123';
        await page.goto(URL + '/login');
        await page.fill('input[name=login]', login);
        await page.fill('input[name=password]', password);
        await page.click('button[type=submit]');
        await delay(100);
        expect(await page.textContent('.validate-error')).toBe('Incorrect login or password');
    });

    test('Register', async () => {
        const login = 'Dmitriy';
        const password = 'qwerty';

        await page.goto(URL + '/register');
        await page.fill('input[name=login]', login);
        await page.fill('input[name=password]', password);
        await page.click('button[type=submit]');

        await delay(100);

        expect(await page.textContent('span')).toBe('Hello, Dmitriy!');
    });

    test('Registration, Logout, Login test', async () => {
        const login = 'test';
        const password = 'qwerty';

        await page.goto(URL + '/register');
        await page.fill('input[name=login]', login);
        await page.fill('input[name=password]', password);
        await page.click('button[type=submit]');
        await delay(100);

        await page.click('.logout__link');
        await delay(100);

        expect(await page.textContent('span')).toBe('Hello, Anonimus!You can register or log in!');

        await page.goto(URL + '/login');
        await page.fill('input[name=login]', login);
        await page.fill('input[name=password]', password);
        await page.click('button[type=submit]');
        await delay(100);

        expect(await page.textContent('span')).toBe('Hello, test!');
    });
});