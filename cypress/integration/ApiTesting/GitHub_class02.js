/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>

describe("Books API", () => {
  let token;
  let baseURL = "https://simple-books-api.glitch.me";
  let orderID;

  it("Authentication", () => {
    cy.request({
      method: "POST",
      url: `${baseURL}/api-clients/`,
      headers: {
        accept: "application/json",
      },
      body: {
        clientName: `sanjay${Math.random()}`,
        clientEmail: `sanjay.rafayal${Math.random()}@gmail.com`,
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      cy.log(JSON.stringify(res.body));
      token = res.body.accessToken;
      cy.log(token);
    });
  });
  it("Order a Book", () => {
    cy.request({
      method: "POST",
      url: `${baseURL}/orders`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: {
        bookId: 1,
        customerName: "sanjay",
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      cy.log(JSON.stringify(res.body));
      orderID = res.body.orderId;
      cy.log(JSON.stringify(orderID));
    });
  });
  it("Change Order Customer Name", () => {
    cy.request({
      method: "PATCH",
      url: `${baseURL}/orders/${orderID}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: {
        customerName: "Shaktimaan",
      },
    }).then((res) => {
      expect(res.status).to.eq(204);
      cy.log(JSON.stringify(res.body));
    });
  });
  it("Get Order", () => {
    cy.request({
      method: "GET",
      url: `${baseURL}/orders/${orderID}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body));
      expect(res.body.customerName).to.eq("Shaktimaan");
    });
  });
  it("Delete Order", () => {
    cy.request({
      method: "DELETE",
      url: `${baseURL}/orders/${orderID}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      expect(res.status).to.eq(204);
      cy.log(JSON.stringify(res.body));
    });
  });
});
