var MainNavigationPanel = function () {

    var BasePage = require('../../../support/BasePage.js');

    var btnHamburger = '#menu-toggle';
    var btnLogout = '#sidebar-wrapper ul li:nth-child(6)';
    var btnHistory = '#sidebar-wrapper ul li:nth-child(4)';
    var btnHome = '#sidebar-wrapper ul li:nth-child(3)';

    /**
     * Logout from the Web Application
     */
    this.Logout = function () {
        BasePage.Click(btnHamburger);
        BasePage.Click(btnLogout);
        return require('../pages/LandingPage');
    }

    /**
     * To History Page
     */
    this.History = function () {
        BasePage.Click(btnHamburger);
        BasePage.Click(btnHistory);
        return require('../pages/HistoryPage');
    }

    /**
     * To Home Page
     */
    this.Home = function () {
        BasePage.Click(btnHamburger);
        BasePage.Click(btnHome);
        return require('../pages/MakeAppointmentPage');
    }
}
module.exports = new MainNavigationPanel();