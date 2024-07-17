/// <reference types="cypress" />
const csv = require('cypress-csv');

describe('User Login', () => {
  csv.toArray('cypress/fixtures/test-data.csv').forEach((user) => {
    it(`should log in with username: ${user.username}`, () => {
      cy.visit('https://example.com/login');
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
      cy.get('#loginButton').click();
      cy.url().should('eq', 'https://example.com/dashboard');
    });
  });
});
