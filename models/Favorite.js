const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorites extends Model {}

Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Artist",
        key: "id",
      },
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Art",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Art",
  }
);

module.exports = Art;