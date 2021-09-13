const faker=require("faker");
const express=require('express');
const app=express();
const port = 8000;
class User{
    constructor(){
        this._id=faker.datatype.number();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}
class Company{
    constructor(data){
        this._id=faker.datatype.number();
        this.name=faker.company.companyName();
        this.address={
            street:faker.address.streetName(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get('/api/users/new', (req,res)=>{
    res.send(new User)
})
app.get('/api/companies/new', (req,res)=>{
    res.send(new Company)
})
app.get('/api/user/company', (req,res)=>{
    res.send([(new Company),(new User)])
})
const server = app.listen(8000, ()=>console.log(`Server active port ${server.address().port}`))