const express = require('express');
const notifier = require('node-notifier');
const normalizePort = require('./config/port');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
const port = normalizePort(process.env.PORT || '4000');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  notifier.notify({
    title: `Sequelize: ${port}`,
    message: 'Build succesfull'
  });
})
