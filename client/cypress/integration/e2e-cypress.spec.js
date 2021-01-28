/// <reference types="cypress" />

context('E2E with cypress', () => {
    const URL = 'http://localhost:3000/';

    beforeEach(() => {
        cy.visit(URL)
    });

    it(`Test open home page without user`, () => {
        cy.get('span').should('have.text', 'Hello, Anonimus!You can register or log in!');
        cy.get('ul li').should('have.length', 3);
        cy.screenshot();
    });

    it('Test login unregistered user', () => {
        const user = 'test';
        const pwd = '123';
        cy.visit(URL + 'login');
        cy.get('input[name=login]').type(user);
        cy.get('input[name=password]').type(pwd);
        cy.get('button').click();
        cy.get('.validate-error').should('have.text', 'Incorrect login or password')
        cy.screenshot();
    });

    it('Test login user with incorrect password', () => {
        const user = 'admin';
        const pwd = '123';
        cy.visit(URL + 'login');
        cy.get('input[name=login]').type(user);
        cy.get('input[name=password]').type(pwd);
        cy.get('button').click();
        cy.get('.validate-error').should('have.text', 'Incorrect login or password')
        cy.screenshot();
    });

    it('Test login form validate', () => {
        const user = 'test';
        cy.visit(URL + 'login');
        cy.get('button').click();

        cy.get('.error').should('have.length', 2).each((val) => {
            expect(val).to.have.text('This field is required')
        });
        cy.screenshot();
        cy.get('input[name=login]').type(user);
        cy.get('.error').should('have.length', 1).each((val) => {
            expect(val).to.have.text('This field is required')
        });
        cy.screenshot();
    });

    it('Test register form validate', () => {
        const user = 'test';
        cy.visit(URL + 'register');
        cy.get('button').click();

        cy.get('.error').should('have.length', 2).each((val) => {
            expect(val).to.have.text('This field is required')
        });
        cy.screenshot();
        cy.get('input[name=login]').type(user);
        cy.get('.error').should('have.length', 1).each((val) => {
            expect(val).to.have.text('This field is required')
        });
        cy.screenshot();
    });
})
