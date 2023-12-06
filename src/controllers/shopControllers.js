const shopControllers = {
    shop: (req, res) => res.render('shop/shop', {layout:'layouts/layout'}),
    shopItem: (req, res) => res.render('shop/item', {layout:'layouts/layout'}),
    shopAddItem: (req, res) => res.send('Route for add item view'),
    shopCart:(req, res) => res.render('shop/cart', {layout:'layouts/layout'}),
    shopPayCart: (req, res) => res.send('Route for pay the cart View')
}

module.exports = shopControllers;