describe('template spec', () => {

  it('View All Laboratory Schedules', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Filter Schedules by Room', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Filter schedules by Day', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('Search for Specific Lab Schedule', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('View Upcoming Laboratory Schedules', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('View Empty Laboratory Schedule', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

  it('View Detailed Schedule Information', () => {
    cy.visit('http://localhost:5173/adminDashboard')
    cy.get('.menuLabel').contains('Schedule').click()
  })

})