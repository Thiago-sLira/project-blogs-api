'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255)
      },
      content: {
        type: Sequelize.STRING(255)
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
