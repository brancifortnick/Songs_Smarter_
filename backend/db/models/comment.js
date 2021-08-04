'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Users'}
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Songs'}
    },
    body: {
     type: DataTypes.STRING(255),
     allowNull: false,
    }
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Comment.belongsTo(models.Song, {
      foreignKey: 'userId'
    })
  };
  return Comment;
};
