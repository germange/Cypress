/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //removing dom parameter
        cy.get('#opentab').invoke('removeAttr','target').click()

        //get url
        cy.url().should('include','com/#/index')

        // brovser navigation
        cy.go('back')


        //new window
        cy.get('#opentab').then((el)=>{
            const url =el.prop('href')
            cy.visit(url)

        })

        


        
        





    })
  })