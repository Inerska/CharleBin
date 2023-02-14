describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Création d\'un paste avec mot de passe et vérification du mot de passe lors de l\'utilisation', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#passwordinput').clear('t');
    cy.get('#passwordinput').type('motdepasse');
    cy.get('body').click();
    cy.get('#message').click();
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('m');
    cy.get('#passworddecrypt').type('motdepasse');
    cy.get('#passwordform > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
})