
const Category = (sequelize, S) => {
    
    const C = sequelize.define('category', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },        
        name: {
            type: S.STRING,
            allowNull: false,
        }        
    });
    
    C.beforeCreate(async (category, options) => {
        const capName = category.name.charAt(0).toUpperCase() + category.name.slice(1);
        category.name = capName
      });
    
    C.beforeUpdate(async (category, options) => {
    const capName = category.name.charAt(0).toUpperCase() + category.name.slice(1);
    category.name = capName
    });

    return C;
}

module.exports = Category;