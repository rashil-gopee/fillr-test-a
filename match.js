module.exports.match = function(hash) {
	// Write your solution to Task #2 - Match Metadata task here
	var values = [];

	var field = 'card expire date';

	var regex = new RegExp('^\\b(' + field + ')', 'i');

	for (var key in hash) {
		if (regex.test(key)) values.push(key);
	}

	return values;
};
