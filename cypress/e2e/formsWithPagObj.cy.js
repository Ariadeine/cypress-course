import Forms from "../PageObjects/FormsPage.js"

describe('test forms with page object', () => {
    

     it('checks correct form input and message', () => {
        const form = new Forms()
        form.visitForms()
        form.setEmail('testmail.com')
        form.clickSubscribe()
        form.verifySubscription('testmail.com')
     }) 

     it('checks wrong form input and message', () => { //validation: email has to have '.com' to be correct
        const form = new Forms()
        form.visitForms()
        form.setEmail('testmail.123')
        form.clickSubscribe()
        form.verifyInvalidSubscription('testmail.123')
     })

     it('checks empty form input and message', () => {
        const form = new Forms()
        form.visitForms()
        form.clickSubscribe()
        form.verifyInvalidSubscription('')
    })

    it('checks empty form input and message', () => {
        const form = new Forms()
        form.visitForms()
        cy.get(form.accordionBtn).first().click()
        form.verifyExpandedAccordion('First, we need to get the form')
        cy.get(form.accordionBtn).first().click()
        form.verifyCollapsedAccordion('First, we need to get the form')
        cy.get(form.accordionBtn).eq(1).click()
        form.verifyExpandedAccordion("cy.type('words')")
        cy.get(form.accordionBtn).eq(1).click()
        form.verifyCollapsedAccordion("cy.type('words')")
    })
       
  })