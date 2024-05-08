describe(' Admin Login Page', () => {

  it('Enter valid credentials', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('admin')
    cy.get('.loginButton').click()
  })

  // // ---------------------- //

  it('Enter invalid username', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('adminpass')
    cy.get('.loginButton').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Incorrect password provided');
    });
  })

  // ---------------------- //

  it('Enter incorrect password', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext').eq(0).type('2001')
    cy.get('.p-inputtext').eq(1).type('wrongpass')
    cy.get('.loginButton').click()
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Incorrect password provided');
    });
  })

  // ---------------------- //

  it('Submit blank fields', () => {
    cy.visit('http://localhost:5173/admin')
    cy.get('.p-inputtext[type=text]').type(' ')
    cy.get('.p-inputtext[type=password]').type(' ')
    cy.get('.loginButton').click()
  })

})