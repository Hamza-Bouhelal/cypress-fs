

it('Should check that file exists', () => {
    cy.fsFileExists('cypress/e2e/testfds.cy.ts').should('be.false');
})