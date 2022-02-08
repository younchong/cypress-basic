describe("Counter module", () => {
  it("render components", () => {
    cy.visit("/");
    cy.get(".container > h1").contains("ui counter");
    cy.get(".minus-button").contains("-");
    cy.get(".plus-button").contains("+")
    cy.get(".count-display").should("have.value", "10");
  });

  it("if click plus button, then plus till 12", () => {
    cy.reload();
    cy.get(".count-display").should("have.value", "10");
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 11);
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 12);
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 12);
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 12);
  })

  it ("if click minus button, then minus till 8", () => {
    cy.reload();
    cy.get(".count-display").should("have.value", "10");
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 9);
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 8);
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 8);
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 8);
  })
})