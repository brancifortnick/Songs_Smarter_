'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Songs",
        [
          {
            userId: 1,
            url: "https://soundcloud.com/bacefacemusic/driving",
            title: "Driving",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            url: "https://soundcloud.com/officialteedo/teedo-enemies-ft-thomas-jay-tev-geez-prod-baceface",
            title: "Enemies",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            url: "https://soundcloud.com/bacefacemusic/vertebreaker",
            title: "Vertebreaker",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Songs')
  }
};
