'use strict';


const Clothes = (sequelize , DataTypes) => sequelize.define('Clothes' ,{
  clothesType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clothesColor : {
    type: DataTypes.STRING,
  },
} );

module.exports= Clothes;