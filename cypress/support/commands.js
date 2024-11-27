Cypress.Commands.add('criarTransacao', (descricao, valor) => {
    cy.contains("Nova Transação").click();
    cy.get('#description').type(descricao);
    cy.get('#amount').type(valor);
    cy.get('#date').type("2024-11-27");
    cy.contains('button', 'Salvar').click();
  });
  