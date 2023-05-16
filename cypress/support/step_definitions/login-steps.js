import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
Given('open the browsers and Navigate to the Login Page', ()=>{
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  cy.wait(2000)
})
When('Enter the Name {word}', (name)=>{
  cy.get('input[name="username"][placeholder="Username"]').type(name)
})
When('Enter the password {word}', (password)=>{
  cy.get('input[class="oxd-input oxd-input--active"][placeholder="Password"]').type(password)
})
When('Click on Loginbtn', ()=>{
  cy.contains(" Login ").click()
})
Then('Login should be Successfull', ()=>{
  cy.url().should("include", "dashboard")
})
When('Enter the invalid name {word}', (name)=>{
  cy.get('input[name="username"][placeholder="Username"]').type(name)
})
When('Enter the invalid pwd {word}', (password)=>{
  cy.get('input[class="oxd-input oxd-input--active"][placeholder="Password"]').type(password)
})
When('Click on Loginbtn', ()=>{
  cy.contains(" Login ").click()
})
Then('it should display {word} {word}', (firstword, lastword)=>{
  const fullmessage= firstword+" "+lastword
  cy.log(fullmessage)
})






