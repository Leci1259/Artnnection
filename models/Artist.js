const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Artist extends Model {}

Artist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(30),
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    biography: {
      type: DataTypes.STRING(140),
      allowNull: true,
    },
    twitter: {
      type:DataTypes.STRING(50),
      validate: {
        isUrl: true,
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Artist",
  }
);

module.exports = Artist;
