class Forms{
    setEmail(email)
    {
        cy.get('input[type="text"]').type(email)
    }

    clickSubscribe()
    {
        cy.get('button').contains('Subscribe').click()
    }

    verifySubscription()
    {
        cy.get('p').contains('Successfully subbed: testmail.com!').should('exist')
    }
}