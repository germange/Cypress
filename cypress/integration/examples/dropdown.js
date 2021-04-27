/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('uk')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='Ukraine'){
                $el.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'Ukraine')
 //visible//invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        


        
        





    })
  })