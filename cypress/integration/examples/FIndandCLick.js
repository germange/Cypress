/// <reference types="Cypress"/>

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //visible search
        //cy.get('.product:visible').should('have.length',4)
        //parrent search
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(()=>{
            console.log('rahit')
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg= $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })
//assert log
cy.get('.brand').should('have.text','GREENKART')

        //fixture
      //expect(true).to.equal(true)
      cy.get('.brand').then((logoelement)=>
      {
        cy.log(logoelement.text())
    
      })

    })
  })
  //cy.log(logo.text())