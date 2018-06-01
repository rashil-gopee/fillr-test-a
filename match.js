module.exports.match = function(hash) {
	// Write your solution to Task #2 - Match Metadata task here
	const values = [];

	const field = 'card expire date';

	const regex = new RegExp('^\\b(' + field + ')', 'i');

	for (let key in hash) {
		if (regex.test(key)) values.push(key);
	}

	return values;
};
