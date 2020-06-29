const MainNavigationPanel = require('../panels/MainNavigationPanel.js');

function HistoryPage() {
    var BasePage = require('../../../support/BasePage.js');

    var lblFacility = '#facility';
    var lblHospitalReadmission = '#hospital_readmission';
    var lblProgram = '#program';
    var lblVisitDate = '.panel-heading';
    var lblComment = '#comment';

    this.ValidateAppointmentInfo = function (facility, reAdmission, program, visitDate, comment) {
        BasePage.CheckElementText(lblFacility, facility);
        BasePage.CheckElementText(lblHospitalReadmission, reAdmission);
        BasePage.CheckElementText(lblProgram, program);
        BasePage.CheckElementText(lblVisitDate, visitDate);
        BasePage.CheckElementText(lblComment, comment);
        return require('../pages/HistoryPage');
    }

    this.Logout = function () {
        return MainNavigationPanel.Logout();
    }
}
module.exports = new HistoryPage();