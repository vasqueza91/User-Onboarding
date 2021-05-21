describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3002/")
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const checkbox = () => cy.get('input[type="checkbox"]')
    const submitBtn = () => cy.get('form')

    it("Input Name into the Name Input", () => {
        cy.get('input[name="name"]').type("Alejandro Vasquez").should("have.value", "Alejandro Vasquez");
    })
    it("Input Email into the Email Input", () => {
        cy.get('input[name="email"]').type("alex123@gmail.com").should("have.value", "alex123@gmail.com");
    })
    it("Input Password into the Password Input", () => {
        cy.get('input[name="password"]').type("12345678").should("have.value", "12345678");
    })
    it("Click Terms and Service Checkbox", () => {
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
    it("Submit", () => {
        cy.get('form').submit()
    })
    describe("Submitting Form", () => {
        it('can submit a new form', () => {
            nameInput().type('Alejandro Vasquez')
            emailInput().type('alex123@gmail.com')
            passwordInput().type('12345678')
            checkbox().check()
            submitBtn().click()
        })
    })
    describe('Checking for Validation', () => {
        it('check if an input is left empty', () => {
            nameInput().type('Alejandro Vasquez')
            emailInput().type('alex123@gmail.com')
            submitBtn().should('be.disabled')
        })
    })
})