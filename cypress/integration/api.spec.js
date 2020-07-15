/// <reference types="Cypress" />

describe('api call', () => {
    it('API Test - Validate Headers', () => {
        cy.request('https:/pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })

    it('API Test - Validate the response status', () => {
        cy.request('https:/pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    })

    it('API Test - Validate Name value', () => {
        cy.request('https:/pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: 'pikachu'})
    })

    it('API Test - Validate neggatibe  status code', () => {
        cy.request({
            method: 'GET',
            url: 'https:/pokeapi.co/api/v2/pokemon/1000',
            failOnStatusCode: false
        }).as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 404)
    })
    it('API Test - Norris Jokes', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('joke')
        cy.get('@joke').its('status').should('equal', 200)
    })

})

