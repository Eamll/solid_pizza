const Order = require('../models/Order');
const data = require('../orderData');
const pizzaDataId = require('../pizzaData');
exports.createOrder = (pizzas) => {
    const order = new Order();
    order.id = generateOrderId();
    order.createdAt = new Date();

    pizzas.forEach((pizzaData) => {

        const { id } = pizzaData.pizza;
        const quantity = pizzaData.quantity;
        const pizza = pizzaDataId.getPizza(id);
        if (pizza) {
            order.addPizza(pizza, quantity);
        }
    });

    applySpecialOffers(order);

    data.addOrder(order);
    return order;
};

exports.getOrders = () => {
    const orderList = data.getOrderList();
    return orderList;
};


// Generate a unique order ID
const generateOrderId = () => {
    return `ORD-${Date.now()}`;
};
const applySpecialOffers = (order) => {
    const dayOfWeek = order.createdAt.getDay();

    // Check if it's Tuesday or Wednesday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    if (dayOfWeek === 2 || dayOfWeek === 3) {
        // Apply 2x1 offer
        const uniquePizzas = new Set(order.pizzas.map((pizza) => pizza.id));
        const pizzasCount = uniquePizzas.size;
        const discountedPrice = order.pizzas.reduce((total, pizza) => total + pizza.price, 0) - Math.floor(pizzasCount / 2) * order.pizzas[0].price;

        order.totalPrice = discountedPrice;
        order.discountApplied = '2x1';
    }

    // Check if it's Thursday (4 = Thursday)
    if (dayOfWeek === 4) {
        // Apply free delivery offer
        order.deliveryFee = 0;
        order.discountApplied = 'Free delivery';
    }
};

