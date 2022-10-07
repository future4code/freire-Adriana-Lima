// Qestão 1
export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(
		id: string,
		name: string,
		email: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.name = name 
		this.email = email
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getName(): string {
		return this.name
	}

	public getEmail(): string {
		return this.email
	}

	// questão 4 e 5
	public introduceYourself(): string {
		return `Olá, ${this.name} bom dia!`
	 }
}