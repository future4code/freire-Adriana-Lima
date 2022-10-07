import { User } from '../heranca/User';

// Questão 2
export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      name: string,
      email: string,
      password: string,
      creditCard: string
    ) {
      super(id, name, email, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }