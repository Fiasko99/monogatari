const { Sequelize, DataTypes } = require('sequelize')
const fs = require('fs')
const path = require('path')

const pathToModels = path.join(__dirname, 'models');
const db = {};
const orm = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

fs.readdirSync(pathToModels).forEach(file => {
  const model = require(path.join(pathToModels, file))(orm, DataTypes);
  db[model.name] = model;
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = {
  db, orm
}