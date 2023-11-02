// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('postAPI', (url, body) => {
  cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/user/createWithArray',
    body:
      [
        {
          id: 1,
          username: "Anton",
          firstName: "Anton",
          lastName: "Antonov",
          email: "Antonov@mail.ru",
          password: "98765",
          phone: "+79899899999",
          userStatus: 1
        }
      ]
  })
})

Cypress.Commands.add('putAPI', (url, body) => {
  cy.request({
    method: 'PUT',
    url: 'https://petstore.swagger.io/v2/user/Anton',
    body:
    {
      id: 1,
      username: "Nikita",
      firstName: "Nikita",
      lastName: "Nikitin",
      email: "Nikitin@mail.ru",
      password: "98765",
      phone: "+79899899999",
      userStatus: 1
    }
  })
})

// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })