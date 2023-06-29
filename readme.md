# Endpoints

Realizar un servicio Web que cumpla los siguientes criterios:

-   Se requiere una app que permita el armado de pizzas personalizadas.

-   Se deberá contar tambien con la opción de tener pizzas o recetas preestablecidas.

-   Se debe tomar en consideración que si se realizan pedidos los días martes y miércoles las pizzas son 2x1 y los días jueves el delivery es gratis.
    
-   La aplicación debe cumplir con los principios S.O.L.I.D. y de ser favorable aplicar los  [patrones de diseño](http://cvpg.nur.edu/mod/resource/view.php?id=26742 "Patrones de Diseño")  necesarios

**Crear pizzas POST**
http://localhost:3000/pizzas/?name=Mariana&ingredients=Queso fetuccini&price=20

Params: name, ingredients, price.

Respuesta: 
```json
{

"name":  "Mariana",

"ingredients":  "Queso fetuccini",

"price":  20,

"id":  "3"

}
```

Params: name, ingredients, price.
**Conseguir pizzas GET**

http://localhost:3000/pizzas/

**Crear orden POST**
http://localhost:3000/orders

En el body, raw:
```json
{
"pizzas":  [
{
"pizza":  {
"id":  "1"
},
"quantity":  2
},
{
"pizza":  {
"id":  "1"
},
"quantity":  1
}
]
}
```
Respuesta si no hay descuento: 
```json
{

"pizzas":  [

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],
"price":  15
}
],
"totalPrice":  45,
"discountApplied":  "",

"deliveryFee":  5,

"id":  "ORD-1688334359410",

"createdAt":  "2023-07-02T21:45:59.410Z"

}
```
Respuesta con descuento 2x1
```json
{

"pizzas":  [

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

}

],

"totalPrice":  45,

"discountApplied":  "2x1",

"deliveryFee":  5,

"id":  "ORD-1687990378991",

"createdAt":  "2023-06-28T22:12:58.991Z"

}
```
Respuesta con delivery gratis
```json
{

"pizzas":  [

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

},

{

"id":  "1",

"name":  "Pizza Margarita",

"ingredients":  [

"tomato",

"cheese",

"basil"

],

"price":  15

}

],

"totalPrice":  45,

"discountApplied":  "Free delivery",

"deliveryFee":  0,

"id":  "ORD-1688076866245",

"createdAt":  "2023-06-29T22:14:26.245Z"

}
```

**Conseguir ordenes GET**
http://localhost:3000/orders
# Repositorio
	Link: https://github.com/Eamll/solid_pizza
# Notas

Existen dos tipos de pizza por defecto.
Al añadir una nueva pizza se puede hacer una orden con ella.