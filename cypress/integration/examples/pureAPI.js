/// <reference types="Cypress"/>



describe('Hooks', () => {

    it('api mocking responce', function() {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"",
            "isbn":"",
            "aisle":"",
            "author": ""
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
        })
    })
})