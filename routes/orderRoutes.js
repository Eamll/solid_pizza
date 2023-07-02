const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

// Endpoint para crear un pedido
router.post('/', orderController.createOrder);

// Endpoint para obtener un pedido por ID
router.get('/', orderController.getOrders);

module.exports = router;
