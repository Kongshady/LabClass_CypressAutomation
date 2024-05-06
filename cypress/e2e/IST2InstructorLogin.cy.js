describe('Instructor Login Page', () => {

  it('Enter Valid Credentials', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
  })

  it('Enter Valid Username', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
  })

  it('Enter Incorrect Password', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
  })

  it('Submit Blank Fields', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
  })
})