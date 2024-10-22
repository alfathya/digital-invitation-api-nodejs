"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  Comment.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hadir: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      komentar: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: true,
    }
  );
  return Comment;
};
