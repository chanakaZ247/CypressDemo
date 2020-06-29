const MainNavigationPanel = require('../panels/MainNavigationPanel.js');

function AppointmentConfirmationPage() {
    var BasePage = require('../../../support/BasePage.js');

    var lblConfirmation = '.text-center > h2';
    var lblFacility = '#facility';
    var lblHospitalReadmission = '#hospital_readmission';
    var lblProgram = '#program';
    var lblVisitDate = '#visit_date';
    var lblComment = '#comment';
    var btnGotoHomePage = '.btn-default';

    this.CheckPageHeder = function (pageHeader) {
        BasePage.CheckElementPresent(lblConfirmation);
        BasePage.CheckElementText(lblConfirmation, pageHeader);
        return require('../pages/AppointmentConfirmationPage');
    }

    this.ValidateAppointmentInfo = function (facility, reAdmission, program, visitDate, comment) {
        BasePage.CheckElementText(lblFacility, facility);
        BasePage.CheckElementText(lblHospitalReadmission, reAdmission);
        BasePage.CheckElementText(lblProgram, program);
        BasePage.CheckElementText(lblVisitDate, visitDate);
        BasePage.CheckElementText(lblComment, comment);
        return require('../pages/AppointmentConfirmationPage');
    }

    this.ClickGotoHomePageButton = function () {
        BasePage.Click(btnGotoHomePage);
        return require('../pages/LandingPage');
    }

    this.NavigateToHistoryPage = function () {
        return MainNavigationPanel.History();
    }

    this.Logout = function () {
        return MainNavigationPanel.Logout();
    }
}
module.exports = new AppointmentConfirmationPage();