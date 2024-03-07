describe('test forms', () => {

    it('checks correct form input and message', () => {
      cy.visit('/forms')
      cy.get('input[type="text"]').type('testmail.com')
      cy.get('p').contains('Successfully subbed: testmail.com!').should('not.exist')
      cy.get('button').contains('Subscribe').click()
      cy.get('p').contains('Successfully subbed: testmail.com!').should('exist')
      cy.wait(3000) //success message disappears after 3 sec, let's check this
      cy.get('p').contains('Successfully subbed: testmail.com!').should('not.exist')
    }) 

    it('checks wrong form input and message', () => { //validation: email has to have '.com' to be correct
      cy.visit('/forms')
      cy.get('input[type="text"]').type('testmail.123')
      cy.get('p').contains('Invalid email: testmail.123!').should('not.exist')
      cy.get('button').contains('Subscribe').click()
      cy.get('p').contains('Invalid email: testmail.123!').should('exist')
      cy.wait(3000) //fail message disappears after 3 sec, let's check this
      cy.get('p').contains('Invalid email: testmail.123!').should('not.exist')
    })

    it('checks empty form input and message', () => {
        cy.visit('/forms')
        cy.get('p').contains('Invalid email: !').should('not.exist')
        cy.get('button').contains('Subscribe').click()
        cy.get('p').contains('Invalid email: !').should('exist')
        cy.wait(3000) //fail message disappears after 3 sec, let's check this
        cy.get('p').contains('Invalid email: !').should('not.exist')
      })
  })