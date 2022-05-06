const express = require('express');
const router=express.Router();

const getModule=require('../module/hall');

router.get('/get',getModule.getBook);
router.post('/create',getModule.createBook);
router.put('/update/:Id',getModule.updateBook);
router.delete('/remove/:Id',getModule.deleteBook);

//router.post('/createRoom',getModule.createRoom);
//router.post('/createBookedRoom',getModule.createBookedRoom);
//router.post('/createBookedCustomer',getModule.createBookedCustomer);

module.exports = router;