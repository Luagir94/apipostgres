const express = require('express')
require('dotenv').config()
const { sequelize } = require("./libs/sequelize/index.js")
const app = express()



const server = app.listen(process.env.PORT || 8081, () => {
    console.log(`Sv en puerto ${server.address().port}`)
})


app.get('/api', (req, res) => {
    res.send(`Bienvenidos`)
})