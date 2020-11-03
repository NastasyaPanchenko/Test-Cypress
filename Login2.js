// @Anastasia Panchenko

context('The exercise # 3 part 2', () => {
  //beforeEach(() => {
  it ('Login with incorrect credentials', () => {
    cy.visit('https://www.phptravels.net')
    cy.get('MY ACCOUNT').click()
    cy.get('Login').click()
    cy.get('#email').type('user@phptravels.com')
    cy.get('#password').type('demouser123')
    cy.get('#LOGIN > span').click()
    cy.title().should('include', 'Invalide Email or Password')

  })
})
