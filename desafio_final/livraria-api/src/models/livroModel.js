import { DataTypes } from "sequelize";
import { MySqlDataBase } from "../connections/data/mysqlDatabase";

const db = MySqlDataBase.getInstance();

export const LivroModel = db.define('livro', {
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
});