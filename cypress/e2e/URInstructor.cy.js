describe('Instructor Users Route API', () => {
  it('It reads existing instructor data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Instructors').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Instructor data can be logged in', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Instructor Login').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('100002')
    cy.get('input').eq(1).type('miko1524')
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Instructor verification', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Verify Instructor Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('100003')
    cy.get('input').eq(1).type('kcabonilas@example.com')
    cy.get('input').eq(2).type('Kyle')
    cy.get('input').eq(3).type('Cabonilas')
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })
})