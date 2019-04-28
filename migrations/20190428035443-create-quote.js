"use strict";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Quotes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      characterId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable("Quotes")
};
