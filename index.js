const express = require('express');
const app = express();
const pizzaRoutes = require('./routes/pizzaRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Configuración de la aplicación
app.use(express.json());

// Rutas
app.use('/pizzas', pizzaRoutes);
app.use('/orders', orderRoutes);

// Puerto de escucha
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
