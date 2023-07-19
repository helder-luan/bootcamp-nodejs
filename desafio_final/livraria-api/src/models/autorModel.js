import { DataTypes } from "sequelize";
import { mySqlDb } from "../connections/databases/mysqlDatabase.js";

export const AutorModel = mySqlDb.define('autor', {
  autor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'autores',
});