'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      myStemsId: {
        unique: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      url: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
