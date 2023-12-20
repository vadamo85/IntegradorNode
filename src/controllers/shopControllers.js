const { Model } = require('sequelize');
const model = require("../models/Product");

const shopControllers = {
    shop: async (req, res) => {
        try {
            const productos = await model.findAll();
            res.render('shop/shop', {productos, layout:'layouts/layout'})
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    shopItem: async (req, res) => {
        try {
            const producto = await model.findByPk(req.params.id)
            res.render('shop/item', {producto, layout:'layouts/layout'})
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    shopAddItem: (req, res) => res.send('Route for add item view'),
    shopCart:(req, res) => res.render('shop/cart', {layout:'layouts/layout'}),
    shopPayCart: (req, res) => res.send('Route for pay the cart View')
}

module.exports = shopControllers;