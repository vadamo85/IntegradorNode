const authControllers = {
    authToLogin: (req, res) => res.render('admin/login', {layout:'layouts/adminLayout'}),
    authLogin: (req, res) => res.send('Logued'),
    authRegister: (req, res) => res.render('admin/signup',{layout:'layouts/adminLayout'} ),
    authRegisterOK: (req, res) => res.send('Registered'),
    authLogout: (req, res) => res.redirect('../index')
}

module.exports = authControllers;