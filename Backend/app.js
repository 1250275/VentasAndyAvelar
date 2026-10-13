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

// rutas backend (pendientes)

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

// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log("PORT " + app.get('port'));
});
