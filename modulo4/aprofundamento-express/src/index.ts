import express from "express";
import {AddressInfo} from "net";


const app = express();
app.use(express.json());

// exercicio 1
app.get('/ping', (req, res) => {
    res.send("pong")
})

// Exercicio 2
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: string
}

const users: Afazeres[] = [
    
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;