describe('Login', () => {

    it('Should login successfully', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Já sou grato').click();
        cy.get('input[placeholder=Email]').type('test@test.com');
        cy.get('input[placeholder=Senha]').type('test');
        cy.contains('Login').click();
        cy.url().should('equal', 'http://localhost:3000/home');
    });

    it('Should receive 409 for user email', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Quero começar').click();
        cy.get('input[placeholder=Nome]').type('test');
        cy.get('input[placeholder=Email]').type('test@test.com');
        cy.get('input[placeholder=Senha]').type('test');
        cy.get("input[placeholder='Confirmar senha']").type('test');
        cy.contains('Cadastrar').click();
        cy.contains('Email já cadastrado').should('be.visible');
    });
})