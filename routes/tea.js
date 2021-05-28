const express = require("express");
const router = express.Router();
const teaController = require("../controllers/tea");
const { uploadImg } = require("../config/upload");

router.get('/tea', teaController.getAllTea);
router.post('/tea', uploadImg, teaController.newTea);
router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

module.exports = router; // Export for server.js use