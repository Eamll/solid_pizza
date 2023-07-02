const orderList = []; // An empty array to store the orders

const addOrder = (order) => {
    orderList.push(order);
};

const getOrderList = () => {
    return orderList;
};

module.exports = { addOrder, getOrderList };
