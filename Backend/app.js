require('dotenv').config({ quiet: true });

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const myConnection = require('express-myconnection');

const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000",
                    credentials: true
                }
            ]
        }
    }
};

app.use(cors(
    config.application.cors.server
));

// rutas backend
const companyRoutes = require('./routes/company');
const branchRoutes = require('./routes/branch');
const supplierRoutes = require('./routes/supplier');
const workAreaRoutes = require('./routes/workArea');
const employeeRoutes = require('./routes/employee');
const userTypeRoutes = require('./routes/userType');
const userRoutes = require('./routes/user');
const customerRoutes = require('./routes/customer');
const productTypeRoutes = require('./routes/productType');
const productRoutes = require('./routes/product');
const paymentMethodRoutes = require('./routes/paymentMethod');
const purchaseHeaderRoutes = require('./routes/purchaseHeader');
const purchaseDetailRoutes = require('./routes/purchaseDetail');
const saleHeaderRoutes = require('./routes/saleHeader');
const saleDetailRoutes = require('./routes/saleDetail');
const accountReceivableRoutes = require('./routes/accountReceivable');
const accountPayableRoutes = require('./routes/accountPayable');
const paymentRoutes = require('./routes/payment');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dateStrings: true   // devuelve las fechas como 'YYYY-MM-DD'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

var bodyParser = require('body-parser');

// procesar peticiones en formato JSON
app.use(bodyParser.json());

// enlazar cada ruta con su tabla
app.use('/companies', companyRoutes);
app.use('/branches', branchRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/work-areas', workAreaRoutes);
app.use('/employees', employeeRoutes);
app.use('/user-types', userTypeRoutes);
app.use('/users', userRoutes);
app.use('/customers', customerRoutes);
app.use('/product-types', productTypeRoutes);
app.use('/products', productRoutes);
app.use('/payment-methods', paymentMethodRoutes);
app.use('/purchase-headers', purchaseHeaderRoutes);
app.use('/purchase-details', purchaseDetailRoutes);
app.use('/sale-headers', saleHeaderRoutes);
app.use('/sale-details', saleDetailRoutes);
app.use('/accounts-receivable', accountReceivableRoutes);
app.use('/accounts-payable', accountPayableRoutes);
app.use('/payments', paymentRoutes);

// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log("PORT " + app.get('port'));
});
