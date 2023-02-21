/// <reference types= "cypress" />




import loc from '../../support/locators'
import '../../support/commands'



describe('Login Incorreto', () => {    
    it('Deve realizar login com Username incorreto',() => {
        cy.loginUsernameIncorreto()             
    }) 
    it('Deve realizar login com Password incorreto',() => {
        cy.loginPasswordIncorreto()             
    }) 
})


describe('Realizar compra', () => {

    beforeEach(() => {
        // Logar com credenciais validas
        cy.login ()     
        cy.url().should('include', '/inventory.html')
       
      })    

      it('Deve adicionar itens ao cart', () => {

        cy.adicionarItensAoCarrinho()
    })

    it('Deve remover item do cart',() =>{
       
        cy.adicionarItensAoCarrinho()
        
        cy.revomerItemDoCart()

    })

    it('Deve adicionar item mais caro ao Cart', () =>{

        cy.adicionarItemMaisCaro()

    })
  

      it ('Deve fazer check out', () => {

    
        cy.adicionarItensAoCarrinho()
        cy.revomerItemDoCart()
        cy.adicionarItemMaisCaro()
        cy.fazerCheckout()           



      })


})