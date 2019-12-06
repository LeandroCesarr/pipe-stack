import { Model, DataTypes, Sequelize } from 'sequelize';
import { Database } from '../config/database';

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
}, { sequelize: new Database().sequelize, modelName: 'user', timestamps: true })
