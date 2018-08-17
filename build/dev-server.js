var express = require('express')


// default port where dev server listens for incoming traffic
var port = 3000

var app = express()

var appData = require('../data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
	res.json({
		errno: 0,
		data: seller
	});
});

apiRoutes.get('/goods', function (req, res) {
	res.json({
		errno: 0,
		data: goods
	});
});

apiRoutes.get('/ratings', function (req, res) {
	res.json({
		errno: 0,
		data: ratings
	});
});

app.use('/api', apiRoutes);

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
})

// run command
// node build/dev-server.js