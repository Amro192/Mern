const express = require("express");
var faker = require('faker');
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );    
class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
    }
}

class Company {
    constructor(){
        this.name = faker.company.companyName();
        this.address = faker.address.streetName();
        this.address = faker.address.zipCode();
        this.address = faker.address.state();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json({ message: new User });
});
app.get("/api/company/new", (req, res) => {
        res.json({ message: new Company });
    });

app.listen( port, () => console.log(`Listening on port: ${port}`) );
