'use strict';

const { Food } = require('../models/index');


async function createFood (req,res) {
  let foodData = req.body;
  console.log(foodData);
  let food = await Food.create(foodData);
  res.status(201).json(food);
}
  
  
async function getFood (req , res) {
  const id = parseInt(req.params.id);
  let food = await Food.get(id);
  res.status(200).json(food);
}
  
async function getAllFood(req, res) {
  let allFood = await Food.getAll();
  res.status(200).json(allFood);
}
  
async function updateFood (req , res) {
  const id = parseInt(req.params.id);
  let foodData = req.body; 
  let updateFood = await Food.update(id,foodData);
  res.status(200).json(updateFood);
}
  
async function deleteFood (req , res) {
  const id = parseInt(req.params.id);
  let deleteFood = await Food.delete(id);
  res.status(204).json(deleteFood);
}
  
module.exports = {
  createFood,
  getFood,
  getAllFood,
  updateFood,
  deleteFood,
};