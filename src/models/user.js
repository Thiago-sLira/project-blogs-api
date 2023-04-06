'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
    User.belongsTo(model.BlogPost, {
      foreignKey: 'userId',
      as: 'user'
    })
  }

  // hasOne -> Tem Um
  // hasMany -> Tem muitos
  // belongsTo -> Pertence a
  // belongsToMany -> Pertence a muitos

  return User;
};
