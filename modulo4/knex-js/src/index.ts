import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

// 1. A) O raw retorna exatamente o que está no banco de dados.

app.get("/Actor", (req, res) => {
    res.send("funcionou")
    
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.log(`Failure upon starting server.`)
    }
})
