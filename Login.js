// @Anastasia Panchenko

context('The exercise # 3', () => {
  //beforeEach(() => {
  it ('Login with correct credentials', () => {
    cy.visit('https://www.phptravels.net')
    //cy.get('MY ACCOUNT').click()
    cy.get('#dropdownCurrency').click()
    //cy.contains('dropdownCurrency').click()

    cy.visit('https://www.phptravels.net/login')

    cy.get('Login').click()
    cy.url().should('include', '/login')

    cy.get('#email').type('user@phptravels.com')
    cy.get('#password').type('demouser')
    cy.get('#LOGIN > span').click()
    cy.url().should('include', '/account')

    cy.title().should('include', 'Demo User')

  })
})
