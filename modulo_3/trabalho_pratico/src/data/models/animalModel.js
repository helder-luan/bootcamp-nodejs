import { DataTypes } from 'sequelize';
import DB from '../connection.js';

export const AnimalModel = DB.define('animais', {
  animal_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  proprietario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false
});