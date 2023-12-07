require('dotenv').config();
const PORT = process.env.PORT || 4000;

const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(path.join(__dirname, "/public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


