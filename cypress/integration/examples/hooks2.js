/// <reference types="Cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'



describe('Hooks', () => {

    beforeEach(()=> {
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function(testdata) {
            this.testdata = testdata
            cy.log(testdata.name)
        })
    })

    it('login', function() {
        
        const homePage= new HomePage()
        const productsPage= new ProductsPage()

        // tables
        homePage.getEditBox().type(this.testdata.name)
        homePage.getGender().select(this.testdata.gender)
        homePage.getTwoWayDataBinding().should('have.value',"Bob")
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')

    })

    it('shop', function() {
        const homePage= new HomePage()
        const productsPage= new ProductsPage()
        // shop
        homePage.getShopTab().click()
        
        this.testdata.productName.forEach(function(element) {
            cy.selectProduct(element) 
        })

        productsPage.getCheckOutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            
                const amount=$el.text()
                const res=amount.split(" ")
                const res1=res[1].trim()
                sum=Number(sum)+Number(res1)
                cy.log(res1)
                
            }).then(()=>{
                cy.log(sum)

            })
            cy.get('h3 > strong').then((element)=>{
                element.text()
                const amount=element.text()
                const res=amount.split(" ")
                var total=res[1].trim()
                expect(Number(total)).to.equal(sum)

            })
            

        cy.contains("Checkout").click()
        cy.get('#country').type('india')
        Cypress.config('defaultCommandTimeout', 100000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text'," Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then((element)=>{
            const actualText=element.text()
            expect(actualText.includes('Success')).to.be.true 
        })
    })
    
  })