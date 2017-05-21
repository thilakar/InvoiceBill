var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert')

var url = 'mongodb://localhost:27017/BillList'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Invoice Bill' });
});

router.get('/get-data', function(req, res, next) {
var resultArray = [];
mongo.connect(url, function(err, db) {
	assert.equal(null, err)
	var cursor = db.collection('Namelist').find();
	alert(cursor)
	cursor.forEach(function(doc, err){
		assert.equal(null, err)
		resultArray.push(doc);
		console.log(resultArray)
	}, function(){
		db.close();
		res.render('index', {items: resultArray})
		console.log(resultArray)
	});
});

});

module.exports = router;
