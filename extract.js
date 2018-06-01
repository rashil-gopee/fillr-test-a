var fs = require('fs');
const util = require('util');

module.exports.extract = function(window) {
	// Write your solution to Task #2 - Extract Metadata task

	var dom = window.document;

	var form = dom.querySelector('form');
	var table = form.querySelector('table');

	var formInputs = form.getElementsByTagName('input');

	for (var index = 0; index < formInputs.length; index++) {
		var key = formInputs[index].parentNode.previousSibling.innerHTML;
		var value = formInputs[index].name;
	}
};
