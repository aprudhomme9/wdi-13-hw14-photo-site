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
router.post('/', (req, res) => {
	User.create(req.body, (err, createdUser) => {
		res.redirect('/users');
	})
})


// show --> get

router.get('/:id', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		res.render('./user/show.ejs', {
			user: foundUser
		})
	})
})


// edit --> get
router.get('/:id/edit', (req, res) => {
	User.findById(req.params.id, (err, foundUser) => {
		res.render('./user/edit.ejs', {
			user: foundUser
		})
	})
})







// update --> put








// destroy --> delete



























module.exports = router;