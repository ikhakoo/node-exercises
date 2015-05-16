var fs = require('fs');
var path = require('path');

var filename = process.argv[2];
var ext1 = "." + process.argv[3];

fs.readdir(filename, function(er, list){
	if (er) {
		throw err;
	}
	list.forEach(function(filename){
		var ext = path.extname(filename);
		if(ext == ext1){
			console.log(filename);
		}
	});
});