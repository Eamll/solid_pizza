const Pizza = require('../models/Pizza');
const data = require('../pizzaData');

exports.createPizza = (name, ingredients, price) => {
    const pizza = new Pizza(name, ingredients, price);
    data.addPizza(pizza); // Utilize data.js to add the pizza
    return pizza;
};

exports.getPizza = (id) => {
    // Utilize data.js to get the pizza by ID from the list
    const pizzas = data.getPizzaList();
    return pizzas.find((pizza) => pizza.id === id);
};
