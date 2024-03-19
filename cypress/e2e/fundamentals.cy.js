describe('test fundamentals', () => {
  beforeEach( () =>{
    cy.visit('/fundamentals')
})

  it('checks navigation', () => {
    cy.get('h1').contains(/Testing Fundamentals/i).should('be.visible') //assume we want lower/uppercase insensitivity
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

  it('checks navigation based on Url', () => {
    cy.get('h1').contains('Testing Fundamentals').should('be.visible')
    cy.get('a').contains('Why Cypress?').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('a').contains('Overview').click()
    cy.url().should('eq', 'http://localhost:3000/overview')
    cy.get('a').contains('Forms').click()
    cy.url().should('eq', 'http://localhost:3000/forms')
    cy.get('a').contains('Examples').click()
    cy.url().should('eq', 'http://localhost:3000/examples')
    cy.get('a').contains('Component').click()
    cy.url().should('eq', 'http://localhost:3000/component')
    cy.get('a').contains('Best Practices').click()
    cy.url().should('eq', 'http://localhost:3000/best-practices')
  })

  it('checks accordion', () => {
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