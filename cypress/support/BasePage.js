class BasePage {

    // Constructor
    BasePage () {
        this.element = cy.get(uiElementPath);
    }

    // Navigate to given URL
    NavigateTo = function (baseUrl) {
        cy.visit(baseUrl);
    }

    // Key Press
    ClickTab = function () {
        cy.focused().tab();
    }

    // Click on element
    Click = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
        element.click();
    }

    // Type on element
    Type = function (uiElementPath, userInput) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
        element.should('be.enabled');
        element.type(userInput);
    }

    // Dropdown value selection
    DropDownSelection = function (uiElementPath, option) {
        var element = cy.get(uiElementPath);
        element.select(option);
        element.should('have.value', option);
    }

    // Check Box Click
    CheckBoxClick = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.click();
        element.should('be.checked');
    }

    //Check Default Check Box State
    CheckDefaultCheckBoxState = function (uiElementPath, checkBoxState) {
        var element = cy.get(uiElementPath);
        if (checkBoxState) {
            element.should('be.checked');
        } else {
            element.should('not.be.checked');
        }
    }

    // Check Default Radio Button Selected
    CheckDefaultRadioButtonSelected = function (uiElementPath, isSelected) {
        var element = cy.get(uiElementPath);
        if (isSelected) {
            element.should('be.checked');
        } else {
            element.should('not.be.checked');
        }
    }

    // Check Element Present
    CheckElementPresent = function (uiElementPath) {
        var element = cy.get(uiElementPath);
        element.should('be.visible');
    }

    // Check Element Text
    CheckElementText = function (uiElement, text) {
        var element = cy.get(uiElement);
        element.should('have.text', text);
    }
}
module.exports = new BasePage();