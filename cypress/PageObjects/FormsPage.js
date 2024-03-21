class Forms{
    accordionBtn='[data-testid="ExpandMoreIcon"]'

    visitForms()
    {
        cy.visit('/forms')
    }
    setEmail(email)
    {
        cy.get('input[type="text"]').type(email)
    }

    clickSubscribe()
    {
        cy.get('button').contains('Subscribe').click()
    }

    verifySubscription(email)
    {
        cy.get('p').contains(`Successfully subbed: ${email}!`).should('exist')
    }

    verifyInvalidSubscription(email)
    {
        cy.get('p').contains(`Invalid email: ${email}!`).should('exist')
    }

    verifyExpandedAccordion(text)
    {
        cy.get('p').contains(text).should('be.visible')
    }

    verifyCollapsedAccordion(text)
    {
        cy.get('p').contains(text).should('not.be.visible')
    }
}
export default Forms;