/// <reference types="cypress" />

import { HomePage } from "../../support/page-objects/home-page";


//Add to Cart Shirt
describe('Home Page Test Suite', () => {
    const homePage = new HomePage();
    beforeEach(() => {
        cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
    });

    it('Verify Elements Presence in Home Page', () => {

        //Calling Home Page Element Presence Method and Assert Element Presence
        homePage.GetElementPresence().should('be.visible');

    });

    it('Verify Shopping Cart Window Expands', () => {

        //Check Shopping Cart Icon is Visible
        homePage.GetShoppingCartIcon().should('be.visible');

        //Click Shopping Cart Icon to Expand
        homePage.GetShoppingCartIcon().click();

    });

    it('Verify Shopping Cart Window Collapses', () => {

        //Check Shopping Cart Icon is Visible
        homePage.GetShoppingCartIcon().should('be.visible');

        //Click Shopping Cart Icon to Expand
        homePage.GetShoppingCartIcon().click();

        //Check Close Button is available
        homePage.GetCloseButton().should('be.visible');

        //Click Close Button to Collapase Shopping Cart
        homePage.GetCloseButton().click();

    });

    it('Verify Add Single Item To Shopping Cart', () => {

        //Check Availability of Skuul Shirt
        homePage.GetProductItems("Skuul").should("be.visible");

        //Click on the Shirt Skuul
        homePage.GetProductItems("Skuul").click();

        //Assert Product is added to Shopping Cart
        homePage.GetProductsInsideShoppingCart().should("be.visible");

    });

    it('Verify Add Multiple Items To Shopping Cart', () => {

        //Check Availability of Cat Tee Black T-Shirt Shirt
        homePage.GetProductItems("Cat Tee Black T-Shirt").should("be.visible");

        //Click on the Shirt Cat Tee Black T-Shirt
        homePage.GetProductItems("Cat Tee Black T-Shirt").click();

        //Click on Shirt 
        homePage.GetProductItems("Born On The Streets").click();

        //Assert Product is added to Shopping Cart
        homePage.GetProductsInsideShoppingCart().should("be.visible");

    });

    it('Verify Remove Single Item From Shopping Cart', () => {

        //Check Availability of Skuul Shirt
        homePage.GetProductItems("Skuul").should("be.visible");

        //Click on the Shirt Skuul
        homePage.GetProductItems("Skuul").click();

        //Assert Product is added to Shopping Cart
        homePage.GetProductsInsideShoppingCart().should("be.visible");

        //Assert Remove Button is Available inside Shopping Cart
        homePage.GetRemoveButton().should("be.visible");

        //Click Remove Button to Remove Selected Item
        homePage.GetRemoveButton().click();

        //Assert Selected Product is Remove
        homePage.GetRemoveButton().should("not.be.visible");

    });

    it('Verify Product Checkout From Shopping Cart', () => {

        //Check Availability of Wine Skul T-Shirt Shirt
        homePage.GetProductItems("Wine Skul T-Shirt").should("be.visible");

        //Click on the Shirt Skuul
        homePage.GetProductItems("Wine Skul T-Shirt").click();

        //Assert Product is added to Shopping Cart
        homePage.GetProductsInsideShoppingCart().should("be.visible");

        //Assert Checkout Button Availability
        homePage.GetCheckoutButton().should("be.visible");

        //Click on Checkout Button
        homePage.GetCheckoutButton().click();

        //Assert Checkout Successfull 
        homePage.GetCheckoutSuccess();

    });

})