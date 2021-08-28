'use strict';


const Food = (sequelize , DataTypes) => sequelize.define('Food' ,{
  foodMeal: {
    type : DataTypes.STRING,
    allowNull: false,
  },
  drink : {
    type : DataTypes.STRING,
  },
  totalPrice : {
    type : DataTypes.INTEGER,
  },
} );

module.exports= Food;