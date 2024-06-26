import { DataTypes } from "sequelize";
import {db} from "../db.js";
import constants from "../constants.js"

async function get() {
  const routes = db.define("routes",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      route_no: { type: DataTypes.TEXT, allowNull: false },
      route_name: { type: DataTypes.TEXT, allowNull: false },
      bus_nos: { type: DataTypes.JSON, allowNull: true }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  );
  await routes.sync({ force: constants.forceSync });
  return routes;
};

export default get;