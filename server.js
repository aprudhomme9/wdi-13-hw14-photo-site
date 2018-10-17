const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');































appl.listen(3000, () => {
	console.log('app listening on port 3000');
})