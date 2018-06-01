const fs = require('fs');

module.exports.extract = function(window) {
	// Write your solution to Task #2 - Extract Metadata task
	const json = {};

	const dom = window.document;

	const form = dom.querySelector('form');

	const formInputs = form.elements;

	for (let i = 0; i < formInputs.length; i++) {
		let key = formInputs[i].parentNode.previousSibling.innerHTML.trim();
		let value = formInputs[i].name.trim();
		json[key] = key + ' ' + value;
	}

	fs.writeFile('mapping.json', JSON.stringify(json, null, 4), 'utf8');

	return json;
};
