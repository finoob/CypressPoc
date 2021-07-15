describe('My First Test', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Basic test', function(){
    expect(true).to.equal(true)
    })
    it('Basic test', function(){
        cy.visit('https://www.orangehrm.com/')
        cy.get('.nav-logo').click()
        cy.contains('a', 'Contact Sales').click()
        cy.get('#Form_submitForm_FirstName').type('Alan')
        cy.get('#Form_submitForm_LastName').type('Alex')
        cy.get('#Form_submitForm_CompanyName').type('OrangeHrm')
        cy.get('#Form_submitForm_NoOfEmployees').select('0 - 10')     
        cy.get('#Form_submitForm_Contact').type('987654321')
        cy.get('#Form_submitForm_JobTitle').type('Softaware QE')
        cy.get('#Form_submitForm_Email').type('Alan.Alex@orangehram.com')
        cy.get('#Form_submitForm_Country').select('India')
        cy.get('#Form_submitForm_State').select('Kerala')       
        cy.get('#Form_submitForm_Comment').type('Completed first cypress test')
        cy.get('#Form_submitForm_action_request').click()
        
       
    })
    

    
})