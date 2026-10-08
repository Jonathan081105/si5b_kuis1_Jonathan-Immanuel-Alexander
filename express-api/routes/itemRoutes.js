const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemById);

// Melindungi rute POST, PUT, dan DELETE
router.post('/', cekApiKey, itemController.createItem);
router.put('/:id', cekApiKey, itemController.updateItem);
router.delete('/:id', cekApiKey, itemController.deleteItem);

module.exports = router;
