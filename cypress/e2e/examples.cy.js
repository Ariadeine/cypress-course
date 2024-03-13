describe('test examples page', () => {
    beforeEach( () =>{
        cy.visit('/examples')
    })

    it('checks adding grudge', () => {
      cy.get('input[type="text"]').type('This is the first grudge')
      cy.get('button').contains('Add Grudge').click()
      cy.get('li>span').contains('This is the first grudge').should('be.visible')
      cy.get('input[type="text"]').type('This is the second grudge')
      cy.get('button').contains('Add Grudge').click()
      cy.get('li>span').contains('This is the second grudge').should('be.visible')
      cy.get('li>span').contains('This is the first grudge').should('be.visible')
    }) 

    it('checks deleting grudge', () => {
        cy.get('input[type="text"]').type('This is the first grudge')
        cy.get('button').contains('Add Grudge').click()
        cy.get('li>span').contains('This is the first grudge').should('exist')
        cy.get('li>button').contains('X').click()
        cy.get('li>span').should('not.exist')
      }) 

      it('checks deleting more than one grudge', () => {
        cy.get('input[type="text"]').type('This is the first grudge')
        cy.get('button').contains('Add Grudge').as('add_grudge_btn').click()
        cy.get('input[type="text"]').type('This is the second grudge')
        cy.get('@add_grudge_btn').click()
        cy.get('input[type="text"]').type('This is the third grudge')
        cy.get('@add_grudge_btn').click()
        cy.get('ul>li').should('have.length', 3)
        cy.get('li>button').contains('X').click()
        cy.get('ul>li').should('have.length', 2)
        cy.get('li>button').contains('X').click()
        cy.get('ul>li').should('have.length', 1)
        cy.get('li>button').contains('X').click()
        cy.get('ul>li').should('have.length', 0)
      }) 

  })