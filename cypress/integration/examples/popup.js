/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //pop up
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()


        //manual handle pop up window:alert
        cy.on('window:alert',(str)=>{
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })


        //manual handle pop up with choise window:confirm
        cy.on('window:confirm',(str)=>{
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        


        
        





    })
  })