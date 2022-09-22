const express = require('express')
const request = require('request-promise')
const client = require('./connexion.js')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
const client_id = '0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23'
const baseurl = `https://api.unsplash.com`



client.connect()
    .then(() => console.log("succes"))
    .catch(err => console.log('error', err))
    .finally(() => client.end())





// GET photos from the unsplash api
app.get('/images', async (req, res) => {
    try {
        const result = await request(`${baseurl}/photos/?client_id=${client_id}`)
        res.json(JSON.parse(result))
    } catch (error) {
        console.log(error);
    }
})
// search an image 
app.get('/search/photos/:query', async (req, res) => {
    const { query } = req.params;


    try {
        const result = await request(`${baseurl}/search/photos?page=1&query=${query}&client_id=${client_id}`)
        res.json(JSON.parse(result))
    } catch (error) {
        console.log(error);
    }
    try {
        await client.connect()
        console.log("connected")
        client.query("INSERT INTO queries (user_id,query) value($1,$2)", ['user_id', query])

    } catch (error) {
        console.log(error);

    }
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))