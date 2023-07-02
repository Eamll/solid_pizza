class Order {
    constructor() {
        this.pizzas = [];
        this.totalPrice = 0;
        this.discountApplied = '';
        this.deliveryFee = 5; // Assuming a default delivery fee of $5
    }

    addPizza(pizza, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.pizzas.push(pizza);
            this.totalPrice += pizza.price;
        }
    }
}

module.exports = Order;
