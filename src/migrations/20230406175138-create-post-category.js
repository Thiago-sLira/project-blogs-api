'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'posts',
            key: 'id',
          },
        },
      },
      categoryId: {
        type: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
