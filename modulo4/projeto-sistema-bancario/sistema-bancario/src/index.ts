import express from 'express';
import cors from 'cors';
import { Account, users } from './types';

const app = express()

app.use(express.json());
app.use(cors());

//5.
app.post("/users", (req, res) => {
    try {
        const {name, CPF, dateOfBirthString} = req.body
        
        const [day, month, year] = dateOfBirthString.split("/")
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        users.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

    }
    catch(error) {

    }
})

app.listen(3003, () => {
    console.log("Server is running on port 3003")
})