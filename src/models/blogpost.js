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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false
    });

  BlogPost.associate = (model) => {
    BlogPost.hasOne(model.User, {
      foreignKey: 'userId',
      as: 'users'
    });
  }

  // hasOne -> Tem Um
  // hasMany -> Tem muitos
  // belongsTo -> Pertence a
  // belongsToMany -> Pertence a muitos

  return BlogPost;
};
