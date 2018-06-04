const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 3000;

//app.use('/assets', express.static(__dirname + '/public'));
app.use(cors({ credentials: true, origin: true }));

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);