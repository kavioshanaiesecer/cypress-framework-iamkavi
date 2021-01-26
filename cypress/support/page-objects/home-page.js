/// <reference types="cypress" />

export class HomePage {

    //Identify Elements are present in Home Page
    GetElementPresence(){
        return cy.get("#root > main > div.shelf-container > div:nth-child(2) > div.shelf-item__thumb");
    }

    //Get Shopping Cart Icon
    GetShoppingCartIcon(){
        return cy.get("#root > div > span");
    }

    //Get Shopping Cart Close Icon
    GetCloseButton() {
        return cy.get("#root > div > div.float-cart__close-btn");
    }

    //Get Product List
    GetProductItems(productName) {
        return cy.get(".shelf-item__title").contains(productName);
    }

    //Get Product List inside Shopping Cart
    GetProductsInsideShoppingCart(){
        return cy.get("#root > div > div.float-cart__content > div.float-cart__shelf-container > div > div.shelf-item__details > p.title");
    }

    //Get Remove Button inside Shopping Cart
    GetRemoveButton() {
        return cy.get(".shelf-item__del");
    }

    //Get Checkout Button
    GetCheckoutButton() {
        return cy.get(".buy-btn");
    }

    //Get Checkout Success Message
    GetCheckoutSuccess() {
        return cy.on('window:alert',(txt)=>{
            expect(txt).to.contains("Checkout - Subtotal: $ ");
        })
    }

};