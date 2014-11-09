var express = require('express');

var router = express.Router();

var todoItems = [
	{id: 1, desc: 'Foo'},
	{id: 2, desc: 'Bar'},
	{id: 3, desc: 'Baz'},
];

router.get('/', function(req, res){
	//The send method sends a response to the client
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});

router.post('/add', function(req, res){
	var newItem = req.body.newItem;
	
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem 
	});
	
	res.redirect('/');
});

module.exports = router;