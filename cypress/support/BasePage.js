class BasePage {

    /**
     * Constructor
     */
    BasePage () {
        this.element = cy.get(uiElementPath);
    }

    /**
     * Navigate to given URL
     * @param {string} baseUrl 
     */
    NavigateTo = function (baseUrl) {
        cy.visit(baseUrl);
    }

    /**
     * Key Press
     */
    ClickTab = function () {
        cy.focused().tab();
    }

    /**
     * Click on element
     * @param {string} uiElementPath 
     */
    Click = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
        element.click();
    }

    /**
     * Type on element
     * @param {string} uiElementPath 
     * @param {string} userInput 
     */
    Type = function (uiElementPath, userInput) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
        element.should('be.enabled');
        element.type(userInput);
    }

    /**
     * Dropdown value selection
     * @param {string} uiElementPath 
     * @param {string} option 
     */
    DropDownSelection = function (uiElementPath, option) {
        var element = cy.get(uiElementPath);
        element.select(option);
        element.should('have.value', option);
    }

    /**
     * Check Box Click
     * @param {string} uiElementPath 
     */
    CheckBoxClick = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.click();
        element.should('be.checked');
    }

    /**
     * Check Default Check Box State
     * @param {string} uiElementPath 
     * @param {string} checkBoxState 
     */
    CheckDefaultCheckBoxState = function (uiElementPath, checkBoxState) {
        var element = cy.get(uiElementPath);
        if (checkBoxState) {
            element.should('be.checked');
        } else {
            element.should('not.be.checked');
        }
    }

    /**
     * Check Default Radio Button Selected
     * @param {string} uiElementPath 
     * @param {string} isSelected 
     */
    CheckDefaultRadioButtonSelected = function (uiElementPath, isSelected) {
        var element = cy.get(uiElementPath);
        if (isSelected) {
            element.should('be.checked');
        } else {
            element.should('not.be.checked');
        }
    }

    /**
     * Check Element Present
     * @param {string} uiElementPath 
     */
    CheckElementPresent = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
    }

    /**
     * Check Element Text
     * @param {string} uiElement 
     * @param {string} text 
     */
    CheckElementText = function (uiElement, text) {
        var element = cy.get(uiElement);
        element.should('have.text', text);
    }
}
module.exports = new BasePage();