/// <reference types = 'Cypress' />

var LandingPage = require('../pom/pages/LandingPage');
var data = require('../../fixtures/commonData.json');

describe('Test Suite 0000 : My First Test Suite with Page Object Model', function () {
    
    it('Test Case 1111 : Add an appointment using Page Object Model', function () {
        LandingPage
            .Visit(data.baseUrl)
            .ClickToMakeAnAppointment()
            .LoginAs(data.userName, data.password)
            .SelectFacility('Seoul CURA Healthcare Center')
            .SelectApplyReadmission(true)
            .SelectMedicalProgram('Medicaid')
            .SelectVisitDate('21/11/2021')
            .AddComment('This is sample test appointment')
            .ClickBookAppointment()
            .CheckPageHeder('Appointment Confirmation')
            .ValidateAppointmentInfo('Seoul CURA Healthcare Center', 'Yes', 'Medicaid', '21/11/2021', 'This is sample test appointment')
            .ClickGotoHomePageButton()
            .CheckMakeAppointmentButton()
            .Logout();
    });

    it('Test Case 2222 : Check History for appointment using Page Object Model', function () {
        LandingPage
            .Visit(data.baseUrl)
            .ClickToMakeAnAppointment()
            .LoginAs(data.userName, data.password)
            .SelectFacility('Seoul CURA Healthcare Center')
            .SelectApplyReadmission(true)
            .SelectMedicalProgram('Medicaid')
            .SelectVisitDate('21/11/2021')
            .AddComment('This is sample test appointment')
            .ClickBookAppointment()
            .NavigateToHistoryPage()
            .ValidateAppointmentInfo('Seoul CURA Healthcare Center', 'Yes', 'Medicaid', '21/11/2021', 'This is sample test appointment')
            .Logout();
    });
});