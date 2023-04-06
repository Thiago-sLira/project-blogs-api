'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false
    });

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as: 'posts'
    })
  }

  // hasOne -> Tem Um
  // hasMany -> Tem muitos
  // belongsTo -> Pertence a
  // belongsToMany -> Pertence a muitos

  return User;
};
