describe('Admin Users Route API', () => {
  it('It reads existing admin data', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Admins').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Admin data can be logged in', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Admin Login').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2001')
    cy.get('input').eq(1).type('admin')
    cy.get('.opblock-control__btn').eq(0).click()
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Admin data is deletable', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Admin').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2002')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('Admin can verify the instructor', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Verify Instructor').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('8')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
    cy.request('GET','http://127.0.0.1:8000/docs#/Instructors/read_instructors_api_instructors__get').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })
})