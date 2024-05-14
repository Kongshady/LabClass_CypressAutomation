describe('View Laboratory Schedule', () => {
  
  it('View Semester Schedules', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Filter by Semester', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
    cy.get('.p-dropdown-label').click()
    cy.get('.p-dropdown-item').eq(1).click()
  })

})