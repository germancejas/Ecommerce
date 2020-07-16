const server = require('express').Router()
const { Product, Category, Orders, User } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;



server.get("/:id", (req, res) => {
    Orders.findOne({
        where: {
            userId: req.params.id,
            statusOpen: true
        },
        include: {
          model: Product
        }
    }).then(response => {
        if (response !== null) {
            return res.send(response.products);
        } else {
            return res.send([])
        }
    })
})



server.post("/create", (req, res) => {
    const { statusOpen, userId } = req.body;
    Orders.create({
        statusOpen,
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
    const { userId, productId } = req.body;
    var product = Product.findByPk(productId)
    var cart = Orders.findOne({
        where: {
            userId,
            statusOpen,
        }
    })
    Promise.all([
        product, cart
    ])
        .then((values) => {
            var [prod, car] = values
            car.addProducto(prod)
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch(() => {
            res.sendStatus(404);
        });
});



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
