const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const userController = require('./controllers/userController');


// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// controllers
app.use('/users', userController);

// index
app.get('/', (req, res) => {
	res.render('index.ejs');
})





























appl.listen(3000, () => {
	console.log('app listening on port 3000');
})