const path = require('path');

const express = require('express');

const rootDir = require('./routes/helper/paths');

const adminRoutes = require('./routes/admin.js');
const shopRouter = require('./routes/shop.js');
const contactsRouter = require('./routes/contacts.js');
const errorController = require('./controllers/errorsController');

const app = express();
app.set('view engine','pug');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir,'public')));

// ./admin/adminROuter
app.use('/admin',adminRoutes.routes);
app.use('/contacts',contactsRouter);
app.use(shopRouter);


//Error handle
app.use(errorController.error404);

app.listen(3000);