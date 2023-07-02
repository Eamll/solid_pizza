const express = require('express');
const pizzaController = require('../controllers/pizzaController');
const data = require('../pizzaData');

const router = express.Router();

// Endpoint para crear una pizza
router.post('/', pizzaController.createPizza);

// Endpoint para obtener una pizza por ID
router.get('/:id', pizzaController.getPizza);

// Endpoint para obtener la lista de pizzas
router.get('/', (req, res) => {
    const pizzaList = data.getPizzaList();
    res.json(pizzaList);
});

module.exports = router;
