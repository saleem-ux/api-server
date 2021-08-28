'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://jvasynbe:Eg25XlfwLH49QRRPOGEbyNa-V_kcgqyB@chunee.db.elephantsql.com/jvasynbe';

const { Sequelize, DataTypes } = require('sequelize');

const clothes = require('./clothes.model');
const food = require('./food.model');
const Collection = require('./collection.class');

let sequelize = new Sequelize(POSTGRES_URI, {});

const clothesModel = clothes(sequelize,DataTypes);
const foodModel = food(sequelize,DataTypes);

const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);


module.exports = {
  db : sequelize,
  Clothes : clothesCollection,
  Food: foodCollection,
};