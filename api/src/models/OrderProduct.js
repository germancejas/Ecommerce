const OrderProduct = (sequelize, S) => {
    const C = sequelize.define("order_product", {
        quantity: {
            type: S.INTEGER,
            allowNull: true,
        },
        salePrice: {
            type: S.INTEGER,
            allowNull: true
        }
    });
    return C;
};
module.exports = OrderProduct;
