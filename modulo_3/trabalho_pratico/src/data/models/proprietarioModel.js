import { DataTypes } from 'sequelize';
import DB from '../connection.js';

export const ProprietarioModel = DB.define('proprietarios', {
  proprietario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});