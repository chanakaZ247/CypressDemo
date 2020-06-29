/// <reference types = 'Cypress' />

describe('Test Suite 0000 : My First Test Suite', function () {
    it('Test Case 1111 : Add an appointment', function () {
        //Navigate to page
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        //Login to the web app
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

        //Enter facility 
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');
        
        //Enter readmission status
        cy.get('#chk_hospotal_readmission').click().should('be.checked');

        //Enter programe
        cy.get('#radio_program_medicare').should('be.checked');
        cy.get('#radio_program_medicaid').should('not.be.checked');
        cy.get('#radio_program_none').should('not.be.checked');
        cy.get('#radio_program_medicaid').click().should('be.checked');

        //Enter visit date
        cy.get('#txt_visit_date').type('21/11/2022');
        cy.focused().tab();

        //Enter comment
        cy.get('#txt_comment').type('This is sample test appointment');

        //Add appointment
        cy.get('#btn-book-appointment').click();

        //Validate the confirmation page header
        cy.get('.text-center > h2').should('be.visible');

        // Validate the confirmation page details
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicaid');
        cy.get('#visit_date').should('have.text', '21/11/2022');
        cy.get('#comment').should('have.text', 'This is sample test appointment');

        //Navigate to home page
        cy.get('.btn-default').click();
        cy.get('#btn-make-appointment').should('be.visible');

        //Logout
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(6)').click();
    });

    it('Test Case 2222 : Check History for appointment', function () {
        //Navigate to page
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        //Login to the web app
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

        //Enter facility 
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');
        
        //Enter readmission status
        cy.get('#chk_hospotal_readmission').click().should('be.checked');

        //Enter programe
        cy.get('#radio_program_medicare').should('be.checked');
        cy.get('#radio_program_medicaid').should('not.be.checked');
        cy.get('#radio_program_none').should('not.be.checked');
        cy.get('#radio_program_medicaid').click().should('be.checked');

        //Enter visit date
        cy.get('#txt_visit_date').type('21/11/2021');
        cy.focused().tab();

        //Enter comment
        cy.get('#txt_comment').type('This is sample test appointment');

        //Add appointment
        cy.get('#btn-book-appointment').click();

        //Navigate to history page
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(4)').click();

        // Validate the appointment details in history page
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicaid');
        cy.get('.panel-heading').should('have.text', '21/11/2021');
        cy.get('#comment').should('have.text', 'This is sample test appointment');

        //Logout
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(6)').click();
    });
});