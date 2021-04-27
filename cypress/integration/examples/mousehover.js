/// <reference types="Cypress"/>


describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // show content menu with jqwery
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        //without opening content menu by cypress
        //cy.contains('Top').click({forse: true})
        cy.url().should('include','top')

        


        
        





    })
  })