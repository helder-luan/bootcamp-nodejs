import { DataTypes } from "sequelize";
import { mySqlDb } from "../connections/databases/mysqlDatabase.js";

export const VendaModel = mySqlDb.define('venda', {
  venda_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  livro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false
});