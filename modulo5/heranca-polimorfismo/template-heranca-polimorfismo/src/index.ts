import { User } from './heranca/User'
import { Customer } from './heranca/Customer';

// 1. A) Sim, é possível atrelar a senha a essa instancia.
// 1. B) "Chamando o construtor da classe User" Foi chamado 1 vez.
//instância
const user: User = new User("01", "Cida", "cida@gmail.com", "123") 
  console.log(user)


 // 2. A) "Chamando o construtor da classe Customer", foi impressa 1 vez.
 // 2; B) "Chamando o construtor da classe User", 1 vez.
 const customer: Customer = new Customer("02", "Eliene", "eliene@gmail.com", "456", "123456" )
   console.log(customer)

 // 3. A)
const customer1: Customer = new Customer("03", "Adriely", "adriely@gmail.com", "789", "1234567")
  console.table(user);
  console.table(customer1);
  
const customer2 = new Customer("02", "Eliane", "eliane@gmail.com", "456", "123456" ) // passa os parâmetros corretos
  console.log(customer2.introduceYourself());
  console.log(user.introduceYourself());