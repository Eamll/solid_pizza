const pizzaList = [
    {
        id: '1',
        name: 'Pizza Margarita',
        ingredients: ['tomato', 'cheese', 'basil'],
        price: 15
    },
    {
        id: '2',
        name: 'Pizza Hawaiana',
        ingredients: ['tomato', 'cheese', 'ham', 'pineapple'],
        price: 10
    },
];

const addPizza = (pizza) => {
    // Generate a new ID for the pizza
    const newId = (pizzaList.length + 1).toString();
    pizza.id = newId;
    pizza.price = parseInt(pizza.price);
    pizzaList.push({
        id: newId,
        ...pizza, // Spread the existing pizza properties
    });
};

const getPizzaList = () => {
    return pizzaList;
};

const getPizza = (id) => {
    return pizzaList.find((pizza) => pizza.id === id);
};

module.exports = { addPizza, getPizzaList, getPizza };
