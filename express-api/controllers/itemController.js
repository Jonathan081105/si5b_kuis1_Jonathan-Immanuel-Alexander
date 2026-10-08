const Item = require('../models/itemModel');

const getItems = (req, res, next) => {
  try {
    const items = Item.findAll();
    res.status(200).json({ status: "success", data: items });
  } catch (error) {
    next(error);
  }
};

const getItemById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const item = Item.findById(id);
    if (!item) {
      const error = new Error("Data tidak ditemukan");
      error.status = 404;
      return next(error);
    }
    res.status(200).json({ status: "success", data: item });
  } catch (error) {
    next(error);
  }
};

const createItem = (req, res, next) => {
  try {
    const { name, price } = req.body;
    if (!name || price === undefined) {
      const error = new Error("Data tidak lengkap. name dan price wajib diisi");
      error.status = 400;
      return next(error);
    }
    const newItem = Item.create({ name, price });
    res.status(201).json({ status: "success", message: "Data berhasil ditambahkan", data: newItem });
  } catch (error) {
    next(error);
  }
};

const updateItem = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const index = Item.findIndex(id);
    if (index === -1) {
      const error = new Error("Data tidak ditemukan");
      error.status = 404;
      return next(error);
    }
    const { name, price } = req.body;
    if (!name || price === undefined) {
      const error = new Error("Data tidak lengkap. name dan price wajib diisi");
      error.status = 400;
      return next(error);
    }
    const updatedItem = Item.update(index, { name, price });
    res.status(200).json({ status: "success", message: "Data berhasil diperbarui", data: updatedItem });
  } catch (error) {
    next(error);
  }
};

const deleteItem = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const index = Item.findIndex(id);
    if (index === -1) {
      const error = new Error("Data tidak ditemukan");
      error.status = 404;
      return next(error);
    }
    Item.delete(index);
    res.status(200).json({ status: "success", message: "Data berhasil dihapus", data: null });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
