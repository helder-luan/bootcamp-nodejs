import { DataTypes } from "sequelize";
import { MySqlDataBase } from "../connections/data/mysqlDatabase";

const db = MySqlDataBase.getInstance();

export const VendaModel = db.define('venda', {
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
});