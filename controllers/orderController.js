const orderService = require('../services/orderService');

exports.createOrder = (req, res) => {
    const { pizzas } = req.body;
    const orderPizzas = pizzas.map((pizza) => ({
        pizza: pizza.pizza,
        quantity: pizza.quantity || 1, // Set default quantity to 1 if not provided
    }));
    const order = orderService.createOrder(orderPizzas);
    console.log("Order created");
    res.status(201).json(order);
};


exports.getOrders = (req, res) => {
    const orders = orderService.getOrders();
    res.json(orders);
};
