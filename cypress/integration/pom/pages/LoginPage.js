function LoginPage() {
    var BasePage = require('../../../support/BasePage.js');

    var txtUserName = "#txt-username";
    var txtPassword = "#txt-password";
    var btnLogin = '#btn-login';

    /**
     * Login to the Web Application
     * @param {string} userName 
     * @param {string} password 
     */
    this.LoginAs = function (userName, password) {
        BasePage.Type(txtUserName, userName);
        BasePage.Type(txtPassword, password);
        BasePage.Click(btnLogin);
        return require('../pages/MakeAppointmentPage.js')
    }
}
module.exports = new LoginPage();