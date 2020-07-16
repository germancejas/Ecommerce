
const Product = (sequelize, S) => {

  P = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    brand: {
      type: S.STRING,
      allowNull: false,
    },
    name: {
      type: S.STRING,
      allowNull: false,
    },
    package: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    description: {
      type: S.STRING,
    },
    imageUrl: {
      type: S.STRING,
    },
    
  });

  P.beforeCreate(async (product, options) => {
    const capBrand = product.brand.charAt(0).toUpperCase() + product.brand.slice(1);
    const capName = product.name.charAt(0).toUpperCase() + product.name.slice(1);
    product.brand = capBrand;
    product.name = capName
  });

  P.beforeUpdate(async (product, options) => {
    console.log(product)
    const capBrand = product.brand.charAt(0).toUpperCase() + product.brand.slice(1);
    const capName = product.name.charAt(0).toUpperCase() + product.name.slice(1);
    product.brand = capBrand;
    product.name = capName
  });

  return P;
};


module.exports = Product;
