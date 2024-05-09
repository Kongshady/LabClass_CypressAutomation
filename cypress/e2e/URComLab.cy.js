describe('Computer Labs Users Route API', () => {
  it('It reads all existing computer lab data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Computer Labs').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Creates new computer lab data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Create Computer Lab').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('207')
    cy.get('input').eq(1).type('105')
    cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Existed computer lab is deletable', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Computer Lab').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('207')
    cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })
})