describe('View Booking Page', () => {

  it('View All Bookings', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Bookings').click()
  })

  it('Filter Bookings By Status', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Bookings').click()
  })

  it('View Detailed Booking Information', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Bookings').click()
  })

  it('View Booking History', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Bookings').click()
  })

  it('Filter Bookings By Date', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
    cy.get('.menuLabel').contains('Bookings').click()
  })

})