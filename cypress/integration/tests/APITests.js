/// <reference types = 'Cypress' />

describe("3333 - My first API test suite", function () {
    it("4444 - My first GET API test case", function () {
        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees').then(function (response) {
            expect(response).to.have.property('status', 200);
            expect(response.body).not.to.be.null;
            expect(response.body.data).to.have.length(24);
        });
    });

    it("5555 - My first POST API test case", function () {

        const bodyData = { "name": "testName", "salary": "123", "age": "23" };

        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create', bodyData)
            .its('body')
            .its('data')
            .should('include', { name: 'testName' });
    });

    it("6666 - My first UPDATE API test case", function () {
        const bodyData = { "name": "test1" };
        cy.request({ method: 'PUT', url: 'http://dummy.restapiexample.com/api/v1/update/1', body: bodyData, failOnStatusCode: false })
            .its('status').should('eq', 401);
    });

    it("7777 - My first DELETE API test case", function () {
        cy.request('DELETE', 'http://dummy.restapiexample.com/api/v1/delete/5').then(function (response) {
            expect(response).to.have.property('status', 200);
            expect(response.body.message).to.equal('Error! Id must be greater than zerp');
        })
    });
});