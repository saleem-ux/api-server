'use strict';

const { Clothes } = require('../models/index');


async function createClothes (req,res) {
  let clothesData = req.body;
  console.log(clothesData);
  let clothes = await Clothes.create(clothesData);
  res.status(201).json(clothes);
}


async function getClothes (req , res) {
  const id = parseInt(req.params.id);
  let clothes = await Clothes.get(id);
  res.status(200).json(clothes);
}

async function getAllClothes(req, res) {
  let allClothes = await Clothes.getAll();
  res.status(200).json(allClothes);
}

async function updateClothes (req , res) {
  const id = parseInt(req.params.id);
  let clothesData = req.body;
  let updateClothes = await Clothes.update(id ,clothesData);
  res.status(200).json(updateClothes);
}

async function deleteClothes (req , res) {
  const id = parseInt(req.params.id);
  let deleteClothes = await Clothes.delete(id);
  res.status(204).json(deleteClothes);
}

module.exports = {
  createClothes,
  getClothes,
  getAllClothes,
  updateClothes,
  deleteClothes,
};