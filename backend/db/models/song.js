'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Users'},
    },
      url: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Song.hasMany(models.Comment, {
      foreignKey: 'songId'
    })
  };
  return Song;
};
