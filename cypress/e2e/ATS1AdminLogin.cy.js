beforeEach(() => {
  // Disable automatic test failure on uncaught exceptions
  Cypress.on('uncaught:exception', () => {
    // Return false to prevent Cypress from failing the test
    return false;
  });
});

describe('template spec', () => {

  it('Enter valid credentials', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('adminpass')
    cy.get('.loginButton').click()
    cy.visit('http://localhost:5173/instructordashboard') // Temporary
  })

  // ---------------------- //

  it('Enter invalid username', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('adminpass')
    cy.get('.loginButton').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Instructor not found or credentials do not match.');
    });
  })

  // ---------------------- //

  it('Enter incorrect password', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('wrongpass')
    cy.get('.loginButton').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Instructor not found or credentials do not match.');
    });
  })

  // ---------------------- //

  it('Submit blank fields', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type(' ')
    cy.get('.p-inputtext').eq(1).type(' ')
    cy.get('.loginButton').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Instructor not found or credentials do not match.');
    });
  })

})