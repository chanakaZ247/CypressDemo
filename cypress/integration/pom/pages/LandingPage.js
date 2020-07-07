const MainNavigationPanel = require('../panels/MainNavigationPanel.js');

function LandingPage() {
    var BasePage = require('../../../support/BasePage.js');

    var btnMakeAppointment = "#btn-make-appointment";

    /**
     * Navigate to Base URL
     * @param {string} baseUrl 
     */
    this.Visit = function (baseUrl) {
        BasePage.NavigateTo(baseUrl);
        return require('./LandingPage.js');
    }

    /**
     * Click to Make an Appointment
     */
    this.ClickToMakeAnAppointment = function () {
        BasePage.Click(btnMakeAppointment);
        return require('../pages/LoginPage');
    }

    /**
     * Check make Appointment Button
     */
    this.CheckMakeAppointmentButton = function () {
        BasePage.CheckElementPresent(btnMakeAppointment);
        return require('../pages/LandingPage');
    }

    /**
     * Logout from the Application
     */
    this.Logout = function () {
        return MainNavigationPanel.Logout();
    }

    /**
     * Navigate to History Page
     */
    this.NavigateToHistoryPage = function () {
        return MainNavigationPanel.History();
    }
}
module.exports = new LandingPage();