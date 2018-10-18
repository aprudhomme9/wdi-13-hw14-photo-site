const express = require('express');
const router = express.Router();

const User = require('../models/user');
// index --> get
router.get('/', (req, res) => {
	User.find({}, (err, foundUsers) => {

		res.render('./user/index.ejs', {

			users: foundUsers
			
		})
	})
})


// new --> get
router.get('/new', (req, res) => {
	res.render('./user/new.ejs', {
		user: User
	})
})


// create --> post






// show --> get








// edit --> get







// update --> put








// destory --> delete



























module.exports = router;