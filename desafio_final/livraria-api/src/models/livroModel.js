import { DataTypes } from "sequelize";
import { mySqlDb } from "../connections/databases/mysqlDatabase.js";

export const LivroModel = mySqlDb.define('livro', {
  livro_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  autor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'livros',
});