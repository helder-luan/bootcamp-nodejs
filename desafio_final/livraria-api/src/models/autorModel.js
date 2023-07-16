import { DataTypes } from "sequelize";
import { MySqlDataBase } from "../connections/data/mysqlDatabase";

const db = MySqlDataBase.getInstance();

export const AutorModel = db.define('autor', {
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
});