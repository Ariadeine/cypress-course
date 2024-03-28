describe('test auto complete search', () => {

    it('checks auto complete google search', () => {
        cy.visit('https://www.google.com/')
        if(cy.get('h1').contains('Zanim przejdziesz do Google')){
            cy.get('button').contains('Odrzuć wszystko').click()
        }
        cy.get('textarea[title="Szukaj"]').type('autumn for')
        cy.get('li[data-attrid="AutocompletePrediction"]')
            .contains(/^autumn forest$/)
            .click();
        cy.get('textarea').contains('autumn forest').should('exist')
    }) 

    it('checks auto complete wikipedia search', () => {
        cy.visit('https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna')
        cy.get('div[id="p-search"]').type('Poznań')
        cy.get('li[role="option"]')
            .contains(/^Poznański Szybki Tramwaj$/)
            .click();
        cy.get('h1.firstHeading').contains('Poznański Szybki Tramwaj').should('be.visible')
    }) 

  })