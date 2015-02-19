/**
 * Created by bORm on 15.02.2015.
 */
var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');

Handlebars.registerHelper('script', function(data) {
	return '<script src="/js/'+data+'"></script>';
});

Handlebars.registerHelper('getProviders', function(providers) {
	console.log(providers);
	var ret = "";
	Object.keys(providers).forEach(function (key) {
		ret += '<a href="/auth/'+providers[key].slug+'" role="button">'+providers[key].name+'</a>';
	});
	return ret;
});
