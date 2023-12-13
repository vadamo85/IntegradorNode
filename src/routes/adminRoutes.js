const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.adminItem);
router.post('/admin/create', adminControllers.adminCreateItem);
router.get('/admin/edit/:id', adminControllers.adminEdit);
router.put('/admin/edit/:id', adminControllers.adminEditOK);
router.delete('/admin/delete/:id', adminControllers.adminDelete);

module.exports = router;