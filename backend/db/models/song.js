'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: DataTypes.INTEGER,
    myStemsId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    // Song.belongsTo(models.Comment, {
    //   foreignKey: 'userId'
    // })
  };
  return Song;
};
