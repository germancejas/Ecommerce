const server = require('express').Router()
const { Product, Category, Orders, User } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;



server.get("/:id", (req, res) => {
    Orders.findByPk(req.params.id).then(orders => {
        console.log(orders)
        orders.getProducts({
            include: [
                {
                    model: Orders,
                    as: "Orders",
                    attributes: ["id", "state", "userId"],
                },
            ],
            attributes: ["id"],
        })
            .then((e) => {
                return res.send(e)
            }).catch(() => {
                return res.status(404);
            })
    })
})



server.post("/create", (req, res) => {
    const { state, userId } = req.body;
    Orders.create({
        state,
        userId
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
});

server.post("/add", (req, res) => {
    const { ordersId, productId } = req.body;
    var producto = Product.findByPk(productId)
    var carrito = Orders.findByPk(ordersId)
    Promise.all([
        producto, carrito
    ])
        .then((values) => {
            var [product, carry] = values
            carry.addProducto(product)
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
});
// router.post("/agregar", (req, res) => {
//     const {carritoId, productoId} = req.body;
//       var producto = Producto.findByPk(productoId)
//       var carrito = Carrito.findByPk(carritoId)
//       Promise.all([
//         producto, carrito
//       ])
//       .then((values) => {
//           var [product, carry] = values
//           carry.addProducto(product)
//       })
//           .then(() => {
//         res.sendStatus(200);
//       })
//       .catch(() => {
//         res.sendStatus(404);
//       });
//   });



server.put("/add/product/quantity", (req, res) => {
    const { quantity, salePrice, productId, ordersId } = req.body;

    OrderProduct.update({
        quantity,
        salePrice
    }, {
        where: {
            productId,
            ordersId
        }
    })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
});




module.exports = server;
