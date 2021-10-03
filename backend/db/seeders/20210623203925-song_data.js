'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Songs",
        [
          {
            userId: 1,
            url: "https://soundcloud.com/user-937734966-440002051/lost-boy-rap-8/s-atFbnDd76BS",
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
