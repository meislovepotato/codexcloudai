//follow.js
import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Follow = sequelize.define(
  "Follow",
  {
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Ensure this references the correct table name
        key: "id",
      },
    },
    followingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users", // Ensure this references the correct table name
        key: "id",
      },
    },
  },
  {
    tableName: "follows",
    timestamps: false,
  }
);

Follow.associate = (models) => {
  Follow.belongsTo(models.User, { foreignKey: "followerId", as: "followers" });
  Follow.belongsTo(models.User, { foreignKey: "followingId", as: "following" });
};

export default Follow;
