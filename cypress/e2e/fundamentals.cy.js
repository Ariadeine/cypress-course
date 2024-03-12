describe('test fundamentals', () => {

  it('checks navigation', () => {
    cy.visit('/fundamentals')
    cy.get('h1').contains(/Testing Fundamentals/i).should('be.visible')
    cy.get('a').contains(/Why Cypress?/i).click()
    cy.get('h1').contains(/Why Cypress?/i).should('be.visible')
    cy.get('a').contains(/Overview/i).click()
    cy.get('h1').contains(/Overview & Install/i).should('be.visible')
    cy.get('a').contains(/Forms/i).click()
    cy.get('h1').contains(/Testing Forms/i).should('be.visible')
    cy.get('a').contains(/Examples/i).click()
    cy.get('h1').contains(/Examples/i).should('be.visible')
    cy.get('a').contains(/Component/i).click()
    cy.get('h1').contains(/Component Testing/i).should('be.visible')
    cy.get('h1').contains(/component testing/i).should('be.visible') //test with lower case
  })
  it('checks accordion', () => {
    cy.visit('/fundamentals')
    cy.get('[data-testid="ExpandMoreIcon"]').first().click()
    cy.get('p').contains("Your tests will exist in a describe block.").should('be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').first().click()
    cy.get('p').contains("Your tests will exist in a describe block.").should('not.be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(1).click()
    cy.get('p').contains("Within your describe block, you will also have it blocks.").should('be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(1).click()
    cy.get('p').contains("Within your describe block, you will also have it blocks.").should('not.be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(2).click()
    cy.get('p').contains("Cypress gives you various commands to help you test.").should('be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(2).click()
    cy.get('p').contains("Cypress gives you various commands to help you test.").should('not.be.visible')
  })

  it('checks multi accordions', () => {
    cy.visit('/fundamentals')
    cy.get('[data-testid="ExpandMoreIcon"]').first().click()
    cy.get('p').contains("Your tests will exist in a describe block.").should('be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(1).click()
    cy.get('p').contains("Your tests will exist in a describe block.").should('be.visible')
    cy.get('p').contains("Within your describe block, you will also have it blocks.").should('be.visible')
    cy.get('[data-testid="ExpandMoreIcon"]').eq(2).click()
    cy.get('p').contains("Your tests will exist in a describe block.").should('be.visible')
    cy.get('p').contains("Within your describe block, you will also have it blocks.").should('be.visible')
    cy.get('p').contains("Cypress gives you various commands to help you test.").should('be.visible')
  })
  
  
})