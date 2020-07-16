const { Router } = require('express');
// import all routers;
const authRouter = require('./auth.js');
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const userRouter = require('./user.js');
const ordersRouter = require('./orders.js');


const router = Router({ force: true });


// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/user', userRouter);
router.use('/orders', ordersRouter);
router.use('/orderproduct', ordersRouter);

module.exports = router;
