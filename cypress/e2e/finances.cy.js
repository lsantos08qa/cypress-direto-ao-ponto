 describe('Transações', () => {
    //hooks ==> executa antes ou depois / de cada ou de todos os testes
    // before, after, beforeEach e afterEach 

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/") //Acessa o site antes de cada teste
    });
    //it('Cadastrar uma entrada', () => { -- Método sem usar uma função
        //cy.visit("https://dev-finance.netlify.app/") -- Usar Hook beforEach
        //cy.contains("Nova Transação").click() -- Esse formato usamos ao inspecionar diretamnete na página com o inspector
        //constains usado para texto
    //     cy.get('#transaction > .button').click()
    //     cy.get('#description').type("Freela")
    //     cy.get('#amount').type(250)
    //     cy.get('#date').type("2024-11-27") // Podemos digitar a data diretamente mas no formato yy-mm-dd
    //     //cy.contains('button, 'Salvar').click() Outra forma de usarmos nesse caso especificamos que na página que pode haver outros botões queremos usar o Salvar
    //     cy.get('button').click()
    //     cy.get("tbody tr td.description").should("have.text", "Freela") -- aqui verifica o texto informado
    // });
    
    it('Cadastrar uma entrada ', () => { // Aqui usamos uma função refatorando o código e deixando mais limpo
        criarTransacao("Freela", 250)
        criarTransacao("Freela 2", 500)
        criarTransacao("Freela 3", 800)
        //cy.get("tbody tr td.description").should("have.text", "Freela") 
        cy.get("tbody tr td.description").should("have.length", 3) // Verifica se existem 3 transações na tabela como cada um tem um nome diferente
    });

    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -45)
        criarTransacao("Jantar", -95)

        cy.get("tbody tr").should("have.length", 2)  // Verifica se existem 2 transações de saída
    });
    
     // // it('Excluir transação', () => {
    // //     criarTransacao("Freela US", 400)
    // //     criarTransacao("Mesada", 100)

    // //     cy.contains(".description", "Freela US") //td ==> referencia
    // //     .parent() //tr
    // //     .find('img') //elemento que precisamos
    // //     .click()
        
    // //     cy.get('tbody tr').should("have.length", 1)
    // // });
    
    it('Excluir transação', () => {
        criarTransacao("Freela UK", 200)
        criarTransacao("Mesada", 100)

        cy.contains(".description", "Freela UK")
        .siblings() // "usando os irmãos"
        .children('img')
        .click()    

        cy.get('tbody tr').should("have.length", 1)
    });
});