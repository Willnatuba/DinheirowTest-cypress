// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


import loc from './locators'


Cypress.Commands.add('login', (user,passwd) => {

    cy.visit('https://www.saucedemo.com/') 
    cy.title().should('be.equal', 'Swag Labs') 
    cy.get(loc.LOGIN.USER).type('standard_user')
    cy.get(loc.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get('.title').should('contain', 'Products')
    
})

Cypress.Commands.add('loginUsernameIncorreto', (user,passwd) => {

    cy.visit('https://www.saucedemo.com/') 
    cy.title().should('be.equal', 'Swag Labs') 
    cy.get(loc.LOGIN.USER).type('incorreto')
    cy.get(loc.LOGIN.PASSWORD).type('secret_sauce')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.LOGIN.MESSAGE).should('contain', 'Username and password do not match')
    
})

Cypress.Commands.add('loginPasswordIncorreto', (user,passwd) => {

    cy.visit('https://www.saucedemo.com/') 
    cy.title().should('be.equal', 'Swag Labs') 
    cy.get(loc.LOGIN.USER).type('standard_user')
    cy.get(loc.LOGIN.PASSWORD).type('incorreto')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.LOGIN.MESSAGE).should('contain', 'password do not match')
    
})



Cypress.Commands.add('adicionarItensAoCarrinho', () =>{
    
  
      
  
          // Clicar na backpack e adicionar ao cart
          cy.get(loc.PRODUCTS.BACKPACK).click()
      
          // Clicar na t-shirt e adicionar ao cart
          cy.get(loc.PRODUCTS.TSHIRTS.BOLT_TSHIRT).click()
      
          // Checar se a quantidade de itens no cart é igual a "2"
          cy.get('.shopping_cart_badge').should('contain', '2')
      
          // checar se os 2 itens foram listados 
          cy.get(loc.PRODUCTS.YOUR_CART).click()
          cy.url().should('include', '/cart.html')
          cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
          cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
  
    

    
})

Cypress.Commands.add('revomerItemDoCart', () => {
        // // Remover a blusa do carrinho
        cy.get(loc.BUTTOM.REMOVE_BOLT_TSHIRT).click()

       // Checar se a quantidade de itens no cart é igual a "1"
       cy.get('.shopping_cart_badge').should('contain', '1')

       // Checar se a backpack é o unico item listado no cart
       cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
       cy.get('.inventory_item_name').should('not.contain', 'Sauce Labs Bolt T-Shirt')


       
        cy.get(loc.BUTTOM.CONTINUE_SHOPPING).click()
        cy.url().should('include', '/inventory.html')
    

})

Cypress.Commands.add('adicionarItemMaisCaro', () => {
    
    

        cy.get(loc.BUTTOM.FILTRO).select('Price (high to low)')
        cy.get(loc.PRODUCTS.TSHIRTS.FLEECE_JACKET).click()
        cy.get(loc.PRODUCTS.YOUR_CART).click()
        cy.get('.inventory_item_name').should('contain', 'Fleece')

    

})


Cypress.Commands.add('fazerCheckout', () => {

    cy.get(loc.BUTTOM.CHECOUT).click()
    cy.get(loc.FORMULARIO_CHECHOUT.USER_INFORMATION.FiRSTNAME).type('William')
    cy.get(loc.FORMULARIO_CHECHOUT.USER_INFORMATION.LASTNAME).type('Natuba')
    cy.get(loc.FORMULARIO_CHECHOUT.USER_INFORMATION.ZIP_POSTAL_CODE).type('0633219')
    cy.get(loc.BUTTOM.CONTINUE_CHECK_OUT).click()

    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Backpack')
    cy.get('#item_5_title_link > .inventory_item_name').should('contain', 'Fleece Jacket')

    cy.get(loc.BUTTOM.FINISH_CHECKOUT).click()

    // cy.get(".title").should('contain','CHECKOUT:COMPLETE!')
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    cy.get('.pony_express').should('be.visible')

    cy.get(loc.BUTTOM.BACK_HOME).click()

    cy.url().should('include', '/inventory.html')
    cy.get('.peek').should('be.visible')
    


      
})