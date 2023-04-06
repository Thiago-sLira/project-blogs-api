'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  }

  // hasOne -> Tem Um
  // hasMany -> Tem muitos
  // belongsTo -> Pertence a
  // belongsToMany -> Pertence a muitos

  return BlogPost;
};
