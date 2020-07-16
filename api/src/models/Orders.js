

const Orders = (sequelize, S) => {

  O = sequelize.define('orders', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    state: {
      type: S.STRING,
      allowNull: false
    },
    userId: {
      type: S.INTEGER,
      allowNull: false
    }

  });

  return O;
};


module.exports = Orders;
