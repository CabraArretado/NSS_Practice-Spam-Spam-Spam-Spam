
import customers from "./customers.js"
console.log(customers[0].contacts.email[0])
let emails = []
customers.forEach(customer => customer.contacts.email.forEach(email => emails.push(email)))
console.log(emails)