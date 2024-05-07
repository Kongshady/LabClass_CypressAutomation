describe('Semester Schedules Users Route API', () => {
  it('It reads all existing Semester schedule data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Semester Schedules').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Creates a Semester schedule', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Create Semester Schedule').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('204')
    cy.get('input').eq(1).type('Thursday')
    cy.get('input').eq(2).type('09:30:00')
    cy.get('input').eq(3).type('12:00:00')
    cy.get('input').eq(4).type('2nd Semester')
    cy.get('input').eq(5).type('2025')
    cy.get('input').eq(6).type('IT221 Networking 2')
    cy.get('input').eq(7).type('100006')
    cy.get('input').eq(8).type('2nd Year')
    cy.get('input').eq(9).type('Section B')
    cy.get('input').eq(10).type('BSIT')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })

  it('Existed semester schedule is deletable', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Semester Schedule').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2004')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })
})