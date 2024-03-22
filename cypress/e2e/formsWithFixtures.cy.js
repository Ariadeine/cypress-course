describe('test forms with fixtures', () => {

    it('checks form input', () => {
        cy.fixture("forms.json").then((data)=>{
            cy.visit('/forms')
            data.forEach((emaildata) => {
                cy.get('input[type="text"]').type(emaildata.email)
                cy.get('button').contains('Subscribe').click()
                cy.get('p').contains(emaildata.expected).should('exist')
                cy.wait(3000)
            });
        })
    }) 
  })