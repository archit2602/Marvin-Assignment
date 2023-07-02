import selectors from '../utilities/selectors';
import urls from '../utilities/urls';

describe('Search & add a product to the cart', () => {
  before(() => {
    // visit the URL
    cy.visit(urls.amazonUrl);
    //Search and remove the target for the product
    cy.get(selectors.searchBox).type(selectors.searchText);
    cy.get(selectors.searchButton).click();
    cy.wait(2000);
    cy.get(selectors.dressLink)
      .invoke('removeAttr', 'target')
      .click();
    // wait for 2 seconds
    cy.wait(2000);
  })

  it('Validating product cart functionality', () => {
    //Checking and selecting the size of
    cy.get(selectors.sizeDropdown).should('be.visible');
    cy.get(selectors.sizeDropdown).select('32');
    // wait for 1,5 seconds
    cy.wait(1500);
    //Clicking on 'Add to Cart'and 'Go to Cart' butoons
    cy.get(selectors.addToCartButton).click();
    cy.get(selectors.goToCartButton).click();

    // validating the size text visibility and logging it
    cy.contains(selectors.sizeText).should('be.visible').then(() => {
      cy.task('log', selectors.sizeText);
    });

    // validating the color text visibility and logging it
    cy.contains(selectors.colorText).should('be.visible').then(() => {
      cy.task('log', selectors.colorText);
    });

    // validating the Quantity text visibility and logging it
    cy.get(selectors.quantityText).invoke('text').then((quantity) => {
      const formattedQuantity = 'Quantity: ' + quantity.trim();
      cy.task('log', formattedQuantity);
    });

    // validating the Price text visibility and logging it
    cy.get(selectors.priceOfDressText).invoke('text').then((price) => {
      const formattedPrice = 'Price: ₹' +price;
      cy.task('log', formattedPrice);
    });

  });

  after(() => {
    // Clicking on 'Proceed to Buy' button
    cy.get(selectors.proceedToBuyButton).click();
    // Taking Screen shot of login popup screen
    cy.screenshot('Login_screen');
  });

});
