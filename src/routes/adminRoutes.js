const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.create);
router.post('/admin/create', adminControllers.store);
router.get('/admin/edit/:id', adminControllers.adminEdit);
router.put('/admin/edit/:id', adminControllers.adminEditOK);
router.delete('/admin/delete/:id', adminControllers.adminDelete);

module.exports = router;