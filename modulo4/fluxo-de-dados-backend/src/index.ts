import express from "express";
import { AddressInfo } from "net";
import { Products, listProducts } from "./data"; 

const app = express();

app.use(express.json());
// Exercicio 1
app.get("/test", (req, resp) => {
    resp.send("Hello World")

})

//Exercicio 3
app.post("/addProduct", (req, res) => {
    const addProduct = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    }
    const product = listProducts
    listProducts.push(addProduct)
    res.send(product)
})

// Exercicio 4
app.get("/listProducts", (req, res) => {
    res.send("data")
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;