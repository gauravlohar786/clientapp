describe('template spec', () => {

  it('passes', () => {
    cy.viewport(1536, 960) 
    cy.visit('https://profile.w3schools.com/signup')

    cy.get('[placeholder="email"]').type('gaurav@aivhub.com');
    cy.get('[type="password"]').type('SAmple@123$')
    
    cy.get('[placeholder="first name"]').type('jake')
    cy.get('[placeholder="last name"]').type('lohar')
    
    cy.get('.SignUpForm_signup_buttons__aoBad').click();

  
  })
})