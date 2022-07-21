/// <reference types="cypress" />
class WikipediaPage {

    validateCapital(capital) {

        cy.get('th[class="infobox-label"]').contains('Capital').next('td[class="infobox-data"]').children('[title]').should('contain.text', capital)

    }

    validateRegion(demonym) {

        cy.get('td[class="infobox-data"]').contains(demonym).should('contain.text', demonym)

    }

    validateCarDrivingSide(carDrivingSide) {

        cy.get('td[class="infobox-data"]').contains(carDrivingSide).should('be.visible')
        cy.log('td[class="infobox-data"]').contains(carDrivingSide)

    }

}

export default WikipediaPage