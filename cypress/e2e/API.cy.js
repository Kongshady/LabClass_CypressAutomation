describe('Instructor API Test', () => {
  it('It Reads Instructor API', () => {
    // cy.request('GET','http://127.0.0.1:8000/docs#/').then((response) => {
    //   expect(response.status).to.eq(200)
    //   expect(response.status).to.have.length.above(0)
    // })
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Instructors').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Instructor will able to login', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Instructor Login').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('myaco@example.com')
    cy.get('input').eq(1).type('12345678')
    cy.get('.opblock-control__btn').eq(0).click()
  })
})



describe('Admin API Test', () => {
  it('It Reads Admin API', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Admins').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Admin will able to login', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Admin Login').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2001')
    cy.get('input').eq(1).type('admin')
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Existing Admin can be deleted', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Admin').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2002')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })
})



describe('Booking Request API Test', () => {
  it('GET/Read Admin', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Admin Login', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Create Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('100000')
    cy.get('input').eq(1).type('201')
    cy.get('input').eq(2).type('2024-06-08')
    cy.get('input').eq(3).type('admin')
    cy.get('input').eq(4).type('admin')
    cy.get('input').eq(5).type('Advance Database System')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })

  it('Existing Booking request can be deleted', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Booking Request').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('20')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })
})



describe('Semester Schedules API Test', () => {
  it('Read Semester schedules', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Semester Schedules').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Create Semester schedules', () => {
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

  it('Delete Semester schedules', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Semester Schedule').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('2004')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })
})



describe('Computer Labs API Test', () => {
  it('Read Computer Lab', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Read Computer Labs').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('.opblock-control__btn').eq(0).click()
  })

  it('Create Computer Lab', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Create Computer Lab').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('204')
    cy.get('input').eq(1).type('105')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })

  it('Delete Computer Lab', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Delete Computer Lab').click()
    cy.get('.try-out__btn').eq(0).click()
    cy.get('input').eq(0).type('204')
    // cy.get('.opblock-control__btn').eq(0).click() // To prevent from submitting a database
  })
})