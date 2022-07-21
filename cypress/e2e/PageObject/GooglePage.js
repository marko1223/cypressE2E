/// <reference types="cypress" />
class GooglePage {

    navigate() {
        cy.visit('/')
        cy.title().should('eq', 'Google')
    }

    searchForCountry(desiredCountry) {
        cy.get('input[name="q"]').type(desiredCountry)
        cy.get('form').submit()
        cy.title().should('contains', desiredCountry)

    }

    openWikiPage() {
        const wikiPageTitle = 'Wiki'
        cy.get('h3[class="LC20lb MBeuO DKV0Md"]').contains(wikiPageTitle).click()
        cy.title().should('contains', wikiPageTitle)

    }

}
export default GooglePage