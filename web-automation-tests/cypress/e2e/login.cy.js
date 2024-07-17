describe('template spec', () => {

  beforeEach(() => {
    // Mock the CAPTCHA verification
    cy.intercept('POST', '**/recaptcha/api/siteverify', {
      statusCode: 200,
      body: { success: true }
    });
  });

  it('passes', () => {
    cy.viewport(1536, 960) 
    cy.visit('https://profile.w3schools.com/login')

    cy.get('[placeholder="email"]').type('gaurav@aivhub.com');
    cy.get('[type="password"]').type('SAmple@123$')
    
    cy.get('.LoginForm_login_button__B4Ksc').click();
  })
})