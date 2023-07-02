const pizzaService = require('../services/pizzaService');

exports.createPizza = (req, res) => {
    const { name, ingredients, price } = req.query;
    const pizza = pizzaService.createPizza(name, ingredients, price);
    console.log("New pizza added");
    res.status(201).json(pizza);
};

exports.getPizza = (req, res) => {
    const { id } = req.params;
    const pizza = pizzaService.getPizza(id) // Utiliza data.js para obtener la pizza
    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).json({ error: 'Pizza not found' });
    }
};
