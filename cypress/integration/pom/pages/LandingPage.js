const MainNavigationPanel = require('../panels/MainNavigationPanel.js');

function LandingPage() {
    var BasePage = require('../../../support/BasePage.js');

    var btnMakeAppointment = "#btn-make-appointment";

    this.Visit = function (baseUrl) {
        BasePage.NavigateTo(baseUrl);
        return require('./LandingPage.js');
    }

    this.ClickToMakeAnAppointment = function () {
        BasePage.Click(btnMakeAppointment);
        return require('../pages/LoginPage');
    }

    this.CheckMakeAppointmentButton = function () {
        BasePage.CheckElementPresent(btnMakeAppointment);
        return require('../pages/LandingPage');
    }

    this.Logout = function () {
        return MainNavigationPanel.Logout();
    }

    this.NavigateToHistoryPage = function () {
        return MainNavigationPanel.History();
    }
}
module.exports = new LandingPage();