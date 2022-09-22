const express = require('express')
const request = require('request-promise')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
const client_id = '0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23'
const baseurl = `https://api.unsplash.com`


// GET photos from the unsplash api
app.get('/images', async (req, res) => {
    try {
        const result = await request(`${baseurl}/photos/?client_id=${client_id}`)
        res.json(JSON.parse(result))
    } catch (error) {
        console.log(error);
    }
})

app.get('/search/photos/:name', async (req, res) => {
    const { name } = req.params;


    try {
        const result = await request(`${baseurl}/search/photos?page=1&query=${name}&client_id=${client_id}`)
        res.json(JSON.parse(result))
    } catch (error) {
        console.log(error);
    }
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))