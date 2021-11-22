
describe('Login', () => {

    it('Should sign-up successfully', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Já sou grato').click();
        cy.get('input[placeholder=Email]').type('test@test.com');
        cy.get('input[placeholder=Senha]').type('test');
        cy.contains('Login').click();
        cy.url().should('equal', 'http://localhost:3000/home');
    });
})