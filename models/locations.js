import { DataTypes } from "sequelize";
import {db} from "../db.js";

async function get() {
  const positions = db.define("positions",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      lat: { type: DataTypes.DECIMAL(18, 15), allowNull: false },
      long: { type: DataTypes.DECIMAL(18, 15), allowNull: false },
      alt: { type: DataTypes.DECIMAL(18, 15), allowNull: false },
      bus_no: { type: DataTypes.TEXT, allowNull: false }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  );
  await positions.sync({ force: false });
  return positions;
};

export default get;