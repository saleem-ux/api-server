'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(modelData) {
    let record = await this.model.create(modelData);
    return record;
  }

  async getAll() {
    let allData = await this.model.findAll();
    return allData;
  }

  async get(id) {
    let record = await this.model.findOne({ where: { id: id } });
    return record;
  }

  async update(id, modelData) {
    let record = await this.model.findOne({ where: { id } });
    let updatedRecord = await record.update(modelData);
    return updatedRecord;
  }

  async delete(id) {
    await this.model.destroy({ where: { id } });
  }

}

module.exports = Collection;