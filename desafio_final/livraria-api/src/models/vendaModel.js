import { DataTypes } from "sequelize";
import { mySqlDb } from "../connections/databases/mysqlDatabase.js";
import { ClienteModel } from "./clienteModel.js";
import { LivroModel } from "./livroModel.js";
import { AutorModel } from "./autorModel.js";

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
  timestamps: false,
  tableName: 'vendas',
});

VendaModel.belongsTo(ClienteModel, { foreignKey: 'cliente_id' });
VendaModel.belongsTo(LivroModel, { foreignKey: 'livro_id' });
VendaModel.belongsTo(AutorModel, { foreignKey: 'autor_id' });