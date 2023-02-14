describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('should create a paste with password and open it with the same password without any issues', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#message').click();
    cy.get('#message').type('Je suis Philippe Dosch');
    cy.get('#passwordinput').clear('p');
    cy.get('#passwordinput').type('philippe');
    cy.wait(10000);
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('p');
    cy.get('#passworddecrypt').type('philippe');
    cy.get('#passwordform > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
})