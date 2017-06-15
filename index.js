const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connect to the database: ', err);
	} else {
		console.log('Connected to databse: ' + config.db);
	}
});


app.use(express.static(__dirname + '/client/'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});