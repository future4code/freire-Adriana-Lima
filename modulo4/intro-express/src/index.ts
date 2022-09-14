import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
    res.send("users")
})

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const users: User[] = [
    {
        id: 1,
        name: "Adriana",
        phone: 79999999999,
        email: "adry@gmail.com",
        website: "adry.com.br"

    },
    {
        id: 2,
        name: "Fernando",
        phone: 79988778877,
        email: "fernando@gmail.com",
        website: "fernandinhocalçados.com.br"
    },
    {
        id: 1,
        name: "Carlos",
        phone: 79999999999,
        email: "carlos@gmail.com",
        website: "carlosfeitosa.com.br"
    }
]

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
