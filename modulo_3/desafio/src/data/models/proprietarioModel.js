import { DataTypes } from 'sequelize';
import DBSequelize from '../mysql.js';

export const ProprietarioModel = DBSequelize.define('proprietarios', {
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