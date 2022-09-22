
const { Client } = require('pg')

// establish a connexion to the database ( not working thought)
const client = new Client({
    user: "gvtdafyjkatzcm",
    password: "a92356c671259227c3c3e06d4e40186a5a3d9dad0a30e9c0848adaf1294eab4c",
    host: "ec2-34-247-72-29.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d7g1fvma6oj6h6"
})

module.exports = client