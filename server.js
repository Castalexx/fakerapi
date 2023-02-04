const express = require('express');
const app = express()
const { faker } = require('@faker-js/faker');
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listen in the port ${PORT}`);
})


const createUser = () => {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
    };
  }

const createCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    adress: {
      street: faker.address.street(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      postalcode: faker.address.zipCode(),
      country: faker.address.country()
    }

  }
}

// RUTAS

app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser)
})

app.get('/api/company/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
})

app.get('/api/user/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const data = [newUser, newCompany];
  res.json(data);
})