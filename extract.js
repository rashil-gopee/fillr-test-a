var fs = require('fs');
const util = require('util');

module.exports.extract = function(window) {
	// Write your solution to Task #2 - Extract Metadata task
	var json = {};

	var dom = window.document;

	var form = dom.querySelector('form');
	var table = form.querySelector('table');

	var formInputs = form.getElementsByTagName('input');

	for (var i = 0; i < formInputs.length; i++) {
		var key = formInputs[i].parentNode.previousSibling.innerHTML.trim();
		var value = formInputs[i].name.trim();

		json[key] = key + ' ' + value;
	}

	// console.log(util.inspect(json));

	fs.writeFile('mapping.json', JSON.stringify(json, null, 4), 'utf8');

	return json;
};
