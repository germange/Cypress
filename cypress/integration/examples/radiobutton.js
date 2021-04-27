/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //radiobutton
        cy.get('[value= "radio2"]').check().should('be.checked')


        


        
        





    })
  })