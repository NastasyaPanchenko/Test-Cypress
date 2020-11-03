// @Anastasia Panchenko

context('The exercise # 1', () => {
  //beforeEach(() => {
  it ('Search for the hotel in Chcago', () => {
    cy.visit('https://www.phptravels.net/home')

    cy.get('.select2-chosen').within(() => {
      cy.get('.select2-input').type('Chicago')

    cy.get('#checkin').type('2020-11-01')
    cy.get('#checkout').type('2020-11-05')

    cy.get('.input-group  bootstrap-touchspin bootstrap-touchspin-injected').within (() => {
      cy.get('.btn btn-white bootstrap-touchspin-up').type('3').click()

    cy.get('.input-group  bootstrap-touchspin bootstrap-touchspin-injectedext').within (() =>{
      cy.get('.btn btn-white bootstrap-touchspin-up').type('1').click()

    cy.get('SEARCH').click()
    cy.url().should('include', '/hotels/search/united-states/chicago/11-01-2020/11-05-2020/3/1')
    cy.title().should('include', 'No Results Found')
  })
  })
})
})
})
