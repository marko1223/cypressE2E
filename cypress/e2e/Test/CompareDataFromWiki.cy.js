/// <reference types="cypress" />
import GooglePage from "../PageObject/GooglePage"
import WikipediaPage from "../PageObject/WikipediaPage"

const googlePage = new GooglePage()
const wikipediaPage = new WikipediaPage()

//get data from fixtures->requestData.json required for getRequest from restcountries.com
beforeEach(function () {
    cy.fixture('requestData').then(function (insertRequestData) {
        this.insertRequestData = insertRequestData
    })
})

//array of countires which going trough test for verification of different data compared to wiki pages
const countries = ["Germany", "Serbia", "Belgium", "Italy", "United Kingdom", "Brasil", "Colombia", "Turkey", "Australia", "Japan", "Spain", "Peru"]



describe("Compare country data on Wiki", () => {

    it("Verify Capital of countries", function () {
        //element-> countries which are comming from array const countries
        countries.forEach((element) => {

            cy.request({

                //method and url are taken from fixtures->requestData.json
                method: this.insertRequestData.method,
                url: this.insertRequestData.url + element,

            }).then((res) => {

                //check status of response
                expect(res.status).to.eq(200)
                //read body from response 
                const [element] = res.body
                //navigate to google.com
                googlePage.navigate()
                //search desired country
                googlePage.searchForCountry(element.name.common)
                //open wiki page for desired country
                googlePage.openWikiPage()
                //verify capital restcountries.com is equal with capital wikipedia
                wikipediaPage.validateCapital(element.capital)
                console.log('Country' + element.name.common + 'complete comparation for capital')
            })



        })

    })

    it("Verify Demonym of countries", function () {

        countries.forEach((element) => {

            cy.request({

                method: this.insertRequestData.method,
                url: this.insertRequestData.url + element,

            }).then((res) => {

                expect(res.status).to.eq(200)
                const [element] = res.body
                googlePage.navigate()
                googlePage.searchForCountry(element.name.common)
                googlePage.openWikiPage()
                wikipediaPage.validateRegion(element.demonyms.eng.m)
                console.log('Country' + element.name.common + 'complete comparation for demonyms')
            })

        })
    })


    it("Verify Car driving side of countries", function () {

        countries.forEach((element) => {

            cy.request({

                method: this.insertRequestData.method,
                url: this.insertRequestData.url + element,

            }).then((res) => {

                expect(res.status).to.eq(200)
                const [element] = res.body
                googlePage.navigate()
                googlePage.searchForCountry(element.name.common)
                googlePage.openWikiPage()
                wikipediaPage.validateCarDrivingSide(element.car.side)
                console.log('Country' + element.name.common + 'complete comparation for drivingCarSide')

            })

        })

    })
})