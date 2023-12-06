const adminControllers = {
    admin: (req, res) => res.render('admin/admin', {layout:'layouts/adminLayout'}),
    adminItem: (req, res) => res.render('admin/create-item', {layout:'layouts/adminLayout'}),
    adminCreateItem: (req, res) => res.send('Route for add an item in stock View'),
    adminEdit:(req, res) => res.render('admin/edit-item', {layout:'layouts/adminLayout'}),
    adminEditOK: (req, res) => res.send('Route to confirm changes in an item View'),
    adminDelete: (req, res) => res.send('Route to delete an item')
}

module.exports = adminControllers;