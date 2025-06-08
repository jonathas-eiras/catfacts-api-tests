

Cypress.Commands.add('accessAPI', () => {
  cy.request({
    method: "GET",
    url: `/`,
  }).then((res) => {
    return res;
  });
});

Cypress.Commands.add('accessBreedsEndpoint', () => {
  cy.request({
    method: "GET",
    url: `/breeds`,
  }).then((res) => {
    return res;
  });
});

Cypress.Commands.add('accessBreedsEndpointWithParameters', (limit) => {
  cy.request({
    method: "GET",
    url: `/breeds?limit=${limit}`,
    failOnStatusCode: false
  }).then((res) => {
    return res;
  });
});