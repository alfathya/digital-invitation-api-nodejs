"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.Comment, {
        foreignKey: "comment_id",
        onDelete: "CASCADE",
      });
    }
  }
  Like.init(
    {
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Like",
      timestamps: true,
    }
  );
  return Like;
};
