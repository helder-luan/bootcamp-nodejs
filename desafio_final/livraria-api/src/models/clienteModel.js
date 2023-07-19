import { DataTypes } from "sequelize";
import { mySqlDb } from "../connections/databases/mysqlDatabase.js";

export const ClienteModel = mySqlDb.define('cliente', {
  cliente_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'C',
  }
}, {
  timestamps: false,
  tableName: 'clientes'
});
