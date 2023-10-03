const express = require("express");

const mockController = require('../controllers/mock')

const router = express.Router();

router.get('/getMenu', mockController.getMenu);

router.post('/updateMenu', mockController.updateMenu);

router.get('/getOrders', mockController.getOrders);

router.post('/submitOrder', mockController.submitOrder);


module.exports = router;