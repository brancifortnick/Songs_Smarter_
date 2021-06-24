'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        "Comments",
        [
          {
            userId: 1,
            songId: 1,
            body: "Wow that was an incredible drop",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            songId: 3,
            body: "I just woke the neighbors, that sub bass hits differently",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            songId: 2,
            body: "The build had me trembling, I lost it when it finally dropped!",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments');
  }
};
