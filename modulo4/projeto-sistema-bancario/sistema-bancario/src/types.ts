// 3. 
export type Transaction = {
    value: number,
    date: Date,
    description: string

}

// 1. 
export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction> //4.
}

// 2. 
export const users: Account[] = [

]