// @Anastasia Panchenko

context('The exercise # 2', () => {
  //beforeEach(() => {
  it ('Select a few checkboxes and click search', () => {
    cy.visit('https://www.phptravels.net/hotels/search/united-states/chicago/11-01-2020/11-05-2020/3/1')

// to check the checkboxes
    cy.get('.custom-checkbox').check(['62','99','des'])

    cy.contains('SEARCH').click()
//verify those boxes are still checked after clicking search.
    //cy.title().should('.custom-checkbox', 'Airport Transport', 'Guest House', 'High to Low').check()

    cy.title().should ('.custom-checkbox').check(['62','99','des'])

})
})
