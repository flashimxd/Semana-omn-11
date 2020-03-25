const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({
        nome: 'Galo doido'
    })
})

module.exports = routes;