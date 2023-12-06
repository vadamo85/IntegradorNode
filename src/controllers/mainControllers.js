const mainControllers = {
    index: (req, res) => res.render('index'),
    contact: (req, res) => res.render('shop/contact', {layout:'layouts/layout'}),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;