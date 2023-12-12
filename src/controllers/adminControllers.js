//requerimientos para multer y expressvalidator
// const path = require('path');
// const sharp = require('sharp');
// const { validationResult } = require('express-validator');

const model = require('../models/Product');

const adminControllers = {
    admin: async (req, res) => {
        try {
            const productos = await model.findAll();
            //console.log(productos);
            res.render('admin/admin', {productos}) //, layout:'layouts/adminLayout'
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    adminItem: (req, res) => res.render('admin/create-item', {layout:'layouts/adminLayout'}),
    adminCreateItem: (req, res) => res.send('Route for add an item in stock View'),
    adminEdit:(req, res) => res.render('admin/edit-item', {layout:'layouts/adminLayout'}),
    adminEditOK: (req, res) => res.send('Route to confirm changes in an item View'),
    adminDelete: (req, res) => res.send('Route to delete an item')
}

module.exports = adminControllers;