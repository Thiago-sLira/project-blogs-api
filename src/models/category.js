'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false
    });

  Category.associate = (model) => {
    Category.belongsToMany(model.PostCategory, {
      foreignKey: 'postId',
      as: 'posts'
    })
  }

  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos

  return Category;
};

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Category extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Category.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Category',
//     underscored: true,
//   });
//   return Category;
// };