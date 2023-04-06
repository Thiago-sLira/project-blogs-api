'use strict';

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      categoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false
    });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });

    Category.belongsToMany(BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
  };

  // hasOne -> Tem Um
  // hasMany -> Tem muitos
  // belongsTo -> Pertence a
  // belongsToMany -> Pertence a muitos

  return PostCategory;
};
