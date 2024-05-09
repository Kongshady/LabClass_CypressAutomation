describe('Booking Request Users Route API', () => {
  it('It reads all existing booking request data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Instructor can create a booking request', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Create Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('100000')
    cy.get('input').eq(1).type('201')
    cy.get('input').eq(2).type('2024-06-08')
    cy.get('input').eq(3).type('admin')
    cy.get('input').eq(4).type('admin')
    cy.get('input').eq(5).type('Advance Database System')
    cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Existed booking request is deletable', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('32')
    cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })
})