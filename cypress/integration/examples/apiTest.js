/// <reference types="Cypress"/>


describe('Hooks', () => {

    it('api mocking responce', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')
        
        cy.server()

            cy.route({
                method:'PUT',
                url:'comments/*',
                status:404,
                response: {
                    error: "Command do not exist"
                },
                delay:1000

            }).as('UpdateComment')
            
        cy.get('.network-put').click()
        cy.get('.network-put-comment').should('contain', 'Command do not exist')
    })
})