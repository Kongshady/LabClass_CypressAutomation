describe('View Laboratory Schedule', () => {
  it('View Available Labs', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Lab Details', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Filter by Availability', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Day Navigation', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Week Navigation', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Time Slot Visibility', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Schedule Confilct Warning', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#button-login').click()
    cy.get('.p-inputtext').eq(0).type('100002')
    cy.get('.p-inputtext').eq(1).type('miko1524')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Schedule').click()
  })
})