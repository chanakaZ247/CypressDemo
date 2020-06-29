const MainNavigationPanel = require('../panels/MainNavigationPanel.js');

function MakeAppointmentPage() {
    var BasePage = require('../../../support/BasePage.js');

    var drpFacility = '#combo_facility';
    var cbxReadmission = '#chk_hospotal_readmission';
    var rdoMedicare = '#radio_program_medicare';
    var rdoMediCaid = '#radio_program_medicaid';
    var rdoNone = '#radio_program_none';
    var txtDate = '#txt_visit_date';
    var txtComment = '#txt_comment';
    var btnBookAppointment = '#btn-book-appointment';

    this.SelectFacility = function (facility) {
        BasePage.DropDownSelection(drpFacility, facility);
        return require('../pages/MakeAppointmentPage');
    }

    this.SelectApplyReadmission = function (isApplyReadmission) {
        BasePage.CheckDefaultCheckBoxState(false);
        if (isApplyReadmission) {
            BasePage.CheckBoxClick(cbxReadmission);
        }
        return require('../pages/MakeAppointmentPage');
    }

    this.SelectMedicalProgram = function (program) {
        BasePage.CheckDefaultRadioButtonSelected(rdoMedicare, true);
        BasePage.CheckDefaultRadioButtonSelected(rdoMediCaid, false);
        BasePage.CheckDefaultRadioButtonSelected(rdoNone, false);
        if (program == 'Medicare') {
            BasePage.CheckBoxClick(rdoMedicare);
        } else if (program == 'Medicaid'){
            BasePage.CheckBoxClick(rdoMediCaid);
        } else {
            BasePage.CheckBoxClick(rdoNone);
        }
        return require('../pages/MakeAppointmentPage');
    }

    this.SelectVisitDate = function (date) {
        BasePage.Type(txtDate, date);
        BasePage.ClickTab();
        return require('../pages/MakeAppointmentPage');
    }

    this.AddComment = function (comments) {
        BasePage.Type(txtComment, comments);
        return require('../pages/MakeAppointmentPage');
    }

    this.ClickBookAppointment = function () {
        BasePage.Click(btnBookAppointment);
        return require('../pages/AppointmentConfirmationPage');
    }

    this.NavigateToHistoryPage = function () {
        return MainNavigationPanel.History();
    }

    this.Logout = function () {
        return MainNavigationPanel.Logout();
    }
}
module.exports = new MakeAppointmentPage();