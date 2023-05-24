'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Postagens.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Postagens',
  });
  return Postagens;
};