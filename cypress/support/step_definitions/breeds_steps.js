import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


Given("the API is available", () => {
    cy.command("accessAPI").then((res) => {
        expect(res.status).to.eq(200);
    });
});

When("I send a GET request to endpoint breeds", () => {
    cy.command("accessBreedsEndpoint").as("breedsResponse");
});

Then("the response status code should be 200", () => {
    cy.command("accessBreedsEndpoint").then((res) => {
        expect(res.status).to.eq(200);
    });
});

Then("the response body should contain a list of cat breeds", () => {
    cy.command("accessBreedsEndpoint").then((res) => {
        expect(res.body).to.have.property("data").and.to.be.an("array").and.not.to.be.empty;
    });
});

When('I send a GET request to breeds?limit=5', () => {
    cy.command("accessBreedsEndpointWithParameters", 5).as("breedsResponse");
});


Then('the response body should contain a list of exactly 5 breeds', () => {
    cy.command("accessBreedsEndpointWithParameters", 5).then((res) => {
        expect(res.body).to.have.property("data").and.to.be.an("array").and.to.have.lengthOf(5);
    });
});

Then('the response body should include pagination fields: per_page and total', () => {
    cy.command("accessBreedsEndpoint").then((res) => {
        expect(res.body).to.have.property("per_page").and.to.be.a("number");
        expect(res.body).to.have.property("total").and.to.be.a("number");
    }
    );
});


When('I send a GET request to breeds?limit=-5', () => {
    cy.command("accessBreedsEndpointWithParameters", -5).as("breedsResponse");
});

Then('the response status code should be 404', () => {
    cy.command("accessBreedsEndpointWithParameters", -5).then((res) => {
        expect(res.status).to.eq(404);
    });
});

Then('the response body should contain a validation error message “Not Found”', () => {
    cy.command("accessBreedsEndpointWithParameters", -5).then((res) => {
        expect(res.body.message).to.contain('Not Found');
    });
});