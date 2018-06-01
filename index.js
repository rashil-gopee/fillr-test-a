var extract_test = require('./extract.js');
var match_test = require('./match.js');

var jsdom = require('jsdom/lib/old-api');

jsdom.env('http://autofill.mozdev.org/autofilltest.html', [], function(
	err,
	window
) {
	result = extract_test.extract(window);
});
