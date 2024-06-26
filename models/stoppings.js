import { DataTypes } from "sequelize";
import {db} from "../db.js";
import constants from "../constants.js"

async function get() {
  const positions = db.define("stopping",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      lat: { type: DataTypes.DECIMAL(18, 15), allowNull: false },
      long: { type: DataTypes.DECIMAL(18, 15), allowNull: false },
      alt: { type: DataTypes.DECIMAL(18, 15), allowNull: true },
      bus_no: { type: DataTypes.TEXT, allowNull: false },
      route_id: { type:DataTypes.TEXT, allowNull:false}
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  );
  await positions.sync({ force: constants.forceSync });
  return positions;
};

export default get;