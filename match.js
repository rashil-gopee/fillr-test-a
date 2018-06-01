module.exports.match = function(hash) {
	// Write your solution to Task #2 - Match Metadata task here
	// var field = 'credit card date';
	//var regex = new RegExp('^\b(' + field + ')');
	// var regex = new RegExp('^\b(card)/i');

	//var regex = new RegExp('/card/i');

	// var regex = '/card/i';
	// var string = 'card expire date day';

	// //var res = regex.test(string);
	// var res = string.match(regex);
	// console.log(res);

	// console.log(regex.test(string));
	var field = 'card expire date';

	var str = 'card expire date day';
	var patt1 = /^\b(card expire date)/i;
	var result = str.match(patt1);

	var regex = new RegExp('^\\b(card expire date)', 'i');

	console.log(regex.test(str));

	// for (var key in hash){
	//   console.log(key);
	// }

	console.log(result);
};
